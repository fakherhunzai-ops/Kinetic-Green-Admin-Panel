import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';

type PageType = 'home' | 'vehicles' | 'b2b' | 'about';
type SectionType = 'hero' | 'stats' | 'cards' | 'timeline' | 'cta' | 'footer';

interface Section {
  id: string;
  type: SectionType;
  title: string;
  enabled: boolean;
  order: number;
}

interface EditModalData {
  section: Section | null;
  page: PageType;
}

export default function CMSBuilder() {
  const [selectedPage, setSelectedPage] = useState<PageType>('home');
  const [editModal, setEditModal] = useState<EditModalData>({ section: null, page: 'home' });
  const [previewMode, setPreviewMode] = useState(false);
  const [sections, setSections] = useState<Record<PageType, Section[]>>({
    home: [
      { id: '1', type: 'hero', title: 'Hero Section', enabled: true, order: 1 },
      { id: '2', type: 'stats', title: 'Statistics Cards', enabled: true, order: 2 },
      { id: '3', type: 'cards', title: 'Vehicles Section', enabled: true, order: 3 },
      { id: '4', type: 'cards', title: 'About Us', enabled: true, order: 4 },
      { id: '5', type: 'cards', title: 'Dealer Locator', enabled: true, order: 5 },
      { id: '6', type: 'cta', title: 'Become a Dealer', enabled: true, order: 6 },
      { id: '7', type: 'cards', title: 'PR & Media', enabled: true, order: 7 },
      { id: '8', type: 'footer', title: 'Footer', enabled: true, order: 8 }
    ],
    vehicles: [
      { id: 'v1', type: 'hero', title: 'Hero Section', enabled: true, order: 1 },
      { id: 'v2', type: 'stats', title: 'Statistics Bar', enabled: true, order: 2 },
      { id: 'v3', type: 'cards', title: 'Vehicle Grid', enabled: true, order: 3 },
      { id: 'v4', type: 'cta', title: 'Test Ride CTA', enabled: true, order: 4 },
      { id: 'v5', type: 'footer', title: 'Footer', enabled: true, order: 5 }
    ],
    b2b: [
      { id: 'b1', type: 'hero', title: 'Hero Section', enabled: true, order: 1 },
      { id: 'b2', type: 'cards', title: 'Fleet Solutions', enabled: true, order: 2 },
      { id: 'b3', type: 'cards', title: 'Benefits Section', enabled: true, order: 3 },
      { id: 'b4', type: 'cards', title: 'Case Studies', enabled: true, order: 4 },
      { id: 'b5', type: 'cards', title: 'Pricing Plans', enabled: true, order: 5 },
      { id: 'b6', type: 'cards', title: 'Partners Section', enabled: true, order: 6 },
      { id: 'b7', type: 'cta', title: 'Contact Form', enabled: true, order: 7 },
      { id: 'b8', type: 'footer', title: 'Footer', enabled: true, order: 8 }
    ],
    about: [
      { id: 'a1', type: 'hero', title: 'Hero Section', enabled: true, order: 1 },
      { id: 'a2', type: 'timeline', title: 'Company Timeline', enabled: true, order: 2 },
      { id: 'a3', type: 'cards', title: 'Team Section', enabled: true, order: 3 },
      { id: 'a4', type: 'stats', title: 'Achievements', enabled: true, order: 4 },
      { id: 'a5', type: 'cta', title: 'Join Us CTA', enabled: true, order: 5 },
      { id: 'a6', type: 'footer', title: 'Footer', enabled: true, order: 6 }
    ]
  });
  const [draggedSection, setDraggedSection] = useState<string | null>(null);
  const [saveNotification, setSaveNotification] = useState(false);

  const pages = [
    { id: 'home' as PageType, name: 'Home Page', icon: 'ri-home-line' },
    { id: 'vehicles' as PageType, name: 'Vehicles Page', icon: 'ri-car-line' },
    { id: 'b2b' as PageType, name: 'B2B Page', icon: 'ri-briefcase-line' },
    { id: 'about' as PageType, name: 'About Page', icon: 'ri-information-line' }
  ];

  const getSectionIcon = (type: SectionType): string => {
    switch (type) {
      case 'hero': return 'ri-image-line';
      case 'stats': return 'ri-bar-chart-line';
      case 'cards': return 'ri-layout-grid-line';
      case 'timeline': return 'ri-time-line';
      case 'cta': return 'ri-megaphone-line';
      case 'footer': return 'ri-layout-bottom-line';
      default: return 'ri-file-line';
    }
  };

  const openEditModal = (section: Section, page: PageType) => {
    setEditModal({ section, page });
  };

  const closeEditModal = () => {
    setEditModal({ section: null, page: selectedPage });
  };

  const toggleSection = (sectionId: string) => {
    setSections(prev => ({
      ...prev,
      [selectedPage]: prev[selectedPage].map(s => 
        s.id === sectionId ? { ...s, enabled: !s.enabled } : s
      )
    }));
  };

  const handleDragStart = (sectionId: string) => {
    setDraggedSection(sectionId);
  };

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!draggedSection || draggedSection === targetId) return;

    const currentSections = [...sections[selectedPage]];
    const draggedIdx = currentSections.findIndex(s => s.id === draggedSection);
    const targetIdx = currentSections.findIndex(s => s.id === targetId);

    const [removed] = currentSections.splice(draggedIdx, 1);
    currentSections.splice(targetIdx, 0, removed);

    const reordered = currentSections.map((s, idx) => ({ ...s, order: idx + 1 }));
    setSections(prev => ({ ...prev, [selectedPage]: reordered }));
  };

  const handleDragEnd = () => {
    setDraggedSection(null);
  };

  const handlePublish = () => {
    setSaveNotification(true);
    setTimeout(() => setSaveNotification(false), 3000);
  };

  const addNewSection = () => {
    const newSection: Section = {
      id: `new-${Date.now()}`,
      type: 'cards',
      title: 'New Section',
      enabled: true,
      order: sections[selectedPage].length + 1
    };
    setSections(prev => ({
      ...prev,
      [selectedPage]: [...prev[selectedPage], newSection]
    }));
  };

  const deleteSection = (sectionId: string) => {
    if (confirm('Are you sure you want to delete this section?')) {
      setSections(prev => ({
        ...prev,
        [selectedPage]: prev[selectedPage].filter(s => s.id !== sectionId).map((s, idx) => ({ ...s, order: idx + 1 }))
      }));
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">CMS Builder</h1>
            <p className="text-gray-600 mt-1">Manage and customize your website sections</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setPreviewMode(!previewMode)}
              className="px-6 py-3 bg-white border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className={`ri-${previewMode ? 'edit' : 'eye'}-line mr-2`}></i>
              {previewMode ? 'Edit Mode' : 'Preview'}
            </button>
            <button 
              onClick={handlePublish}
              className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-save-line mr-2"></i>
              Publish Changes
            </button>
          </div>
        </div>

        {/* Save Notification */}
        {saveNotification && (
          <div className="fixed top-20 right-6 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center gap-3 animate-slide-in">
            <i className="ri-check-line text-2xl"></i>
            <div>
              <p className="font-semibold">Changes Published!</p>
              <p className="text-sm text-green-100">Your website has been updated successfully</p>
            </div>
          </div>
        )}

        {/* Page Selector */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Select Page to Edit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setSelectedPage(page.id)}
                className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                  selectedPage === page.id
                    ? 'border-teal-600 bg-teal-50'
                    : 'border-gray-200 bg-white hover:border-teal-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                  selectedPage === page.id ? 'bg-teal-600' : 'bg-gray-100'
                }`}>
                  <i className={`${page.icon} text-2xl ${
                    selectedPage === page.id ? 'text-white' : 'text-gray-600'
                  }`}></i>
                </div>
                <h3 className={`font-bold ${
                  selectedPage === page.id ? 'text-teal-600' : 'text-gray-900'
                }`}>{page.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {sections[selectedPage].length} sections
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Sections List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">
                {pages.find(p => p.id === selectedPage)?.name} Sections
              </h2>
              <button 
                onClick={addNewSection}
                className="px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-add-line mr-2"></i>
                Add Section
              </button>
            </div>
          </div>

          <div className="p-6 space-y-3">
            {sections[selectedPage].map((section) => (
              <div
                key={section.id}
                draggable
                onDragStart={() => handleDragStart(section.id)}
                onDragOver={(e) => handleDragOver(e, section.id)}
                onDragEnd={handleDragEnd}
                className={`flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all ${
                  draggedSection === section.id ? 'opacity-50' : ''
                } ${!section.enabled ? 'opacity-60' : ''}`}
              >
                {/* Drag Handle */}
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-move">
                  <i className="ri-draggable text-xl"></i>
                </button>

                {/* Section Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  section.enabled ? 'bg-white' : 'bg-gray-200'
                }`}>
                  <i className={`${getSectionIcon(section.type)} text-xl ${
                    section.enabled ? 'text-teal-600' : 'text-gray-400'
                  }`}></i>
                </div>

                {/* Section Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900">{section.title}</h3>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded">
                      {section.type}
                    </span>
                    {!section.enabled && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded">
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">Order: {section.order}</p>
                </div>

                {/* Toggle */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={section.enabled}
                    onChange={() => toggleSection(section.id)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                </label>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => openEditModal(section, selectedPage)}
                    className="w-10 h-10 flex items-center justify-center text-teal-600 hover:bg-teal-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <i className="ri-edit-line text-xl"></i>
                  </button>
                  <button 
                    onClick={() => deleteSection(section.id)}
                    className="w-10 h-10 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <i className="ri-delete-bin-line text-xl"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6 border border-teal-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="ri-lightbulb-line text-xl text-white"></i>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Quick Tips</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Drag sections to reorder them on your page</li>
                <li>• Toggle sections on/off without deleting them</li>
                <li>• Click edit to customize content, images, and styling</li>
                <li>• Preview changes before publishing to your live site</li>
                <li>• All changes are auto-saved as drafts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editModal.section && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Edit {editModal.section.title}</h2>
                <p className="text-gray-600 mt-1">Customize this section's content and appearance</p>
              </div>
              <button 
                onClick={closeEditModal}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
              {editModal.section.type === 'hero' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Hero Title</label>
                    <input
                      type="text"
                      defaultValue="Drive the Future with Electric Vehicles"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Subtitle</label>
                    <textarea
                      rows={3}
                      defaultValue="Experience sustainable mobility with our range of eco-friendly electric vehicles. Zero emissions, maximum performance."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Background Image</label>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src="https://readdy.ai/api/search-image?query=modern%20electric%20vehicle%20showroom%20with%20sleek%20EVs%20on%20display%20bright%20professional%20lighting%20clean%20minimalist%20design%20sustainable%20mobility%20concept&width=400&height=400&seq=hero001&orientation=squarish"
                          alt="Hero background"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="flex-1">
                        <button className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer mb-2">
                          <i className="ri-upload-2-line mr-2"></i>
                          Upload New Image
                        </button>
                        <p className="text-sm text-gray-600">Recommended: 1920x1080px, JPG or PNG</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Primary Button Text</label>
                      <input
                        type="text"
                        defaultValue="Explore Vehicles"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Primary Button Link</label>
                      <input
                        type="text"
                        defaultValue="/vehicles"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Secondary Button Text</label>
                      <input
                        type="text"
                        defaultValue="Book Test Ride"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Secondary Button Link</label>
                      <input
                        type="text"
                        defaultValue="#test-ride"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {editModal.section.type === 'stats' && (
                <div className="space-y-6">
                  <p className="text-gray-600">Configure your statistics cards. Add up to 4 key metrics.</p>
                  
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="p-4 bg-gray-50 rounded-lg space-y-4">
                      <h3 className="font-bold text-gray-900">Stat Card {num}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Value</label>
                          <input
                            type="text"
                            defaultValue={num === 1 ? '500+' : num === 2 ? '50+' : num === 3 ? '4.8' : '10,000+'}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Label</label>
                          <input
                            type="text"
                            defaultValue={num === 1 ? 'Happy Customers' : num === 2 ? 'Cities' : num === 3 ? 'Rating' : 'Km Driven'}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Icon (Remix Icon class)</label>
                        <input
                          type="text"
                          defaultValue={num === 1 ? 'ri-user-smile-line' : num === 2 ? 'ri-map-pin-line' : num === 3 ? 'ri-star-line' : 'ri-road-map-line'}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {editModal.section.type === 'cards' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Section Title</label>
                    <input
                      type="text"
                      defaultValue="Our Electric Vehicles"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Section Description</label>
                    <textarea
                      rows={3}
                      defaultValue="Discover our range of eco-friendly electric vehicles designed for modern urban mobility."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Layout Style</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer">
                        <option>Grid - 3 Columns</option>
                        <option>Grid - 4 Columns</option>
                        <option>Carousel</option>
                        <option>List View</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Cards to Show</label>
                      <input
                        type="number"
                        defaultValue="4"
                        min="1"
                        max="12"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Background Color</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        defaultValue="#ffffff"
                        className="w-16 h-12 rounded-lg cursor-pointer"
                      />
                      <input
                        type="text"
                        defaultValue="#ffffff"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {editModal.section.type === 'timeline' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Timeline Title</label>
                    <input
                      type="text"
                      defaultValue="Our Journey"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Timeline Style</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer">
                      <option>Vertical Timeline</option>
                      <option>Horizontal Timeline</option>
                      <option>Zigzag Timeline</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="block text-sm font-semibold text-gray-900">Timeline Events</label>
                      <button className="px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                        <i className="ri-add-line mr-2"></i>
                        Add Event
                      </button>
                    </div>

                    {[1, 2, 3].map((num) => (
                      <div key={num} className="p-4 bg-gray-50 rounded-lg space-y-3 mb-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-gray-900">Event {num}</h4>
                          <button className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer">
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="Year"
                            defaultValue={num === 1 ? '2020' : num === 2 ? '2021' : '2023'}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                          />
                          <input
                            type="text"
                            placeholder="Title"
                            defaultValue={num === 1 ? 'Company Founded' : num === 2 ? 'First Product Launch' : 'Expansion'}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                          />
                        </div>
                        <textarea
                          rows={2}
                          placeholder="Description"
                          defaultValue="Key milestone in our journey..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                        ></textarea>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {editModal.section.type === 'cta' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">CTA Title</label>
                    <input
                      type="text"
                      defaultValue="Ready to Go Electric?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">CTA Description</label>
                    <textarea
                      rows={3}
                      defaultValue="Join thousands of satisfied customers who have made the switch to sustainable mobility."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Button Text</label>
                      <input
                        type="text"
                        defaultValue="Get Started"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Button Link</label>
                      <input
                        type="text"
                        defaultValue="/vehicles"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Background Style</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer">
                      <option>Solid Color (Teal)</option>
                      <option>Gradient (Teal to Green)</option>
                      <option>Image Background</option>
                      <option>Pattern Background</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Background Color</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        defaultValue="#14b8a6"
                        className="w-16 h-12 rounded-lg cursor-pointer"
                      />
                      <input
                        type="text"
                        defaultValue="#14b8a6"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500 cursor-pointer"
                      />
                      <span className="text-sm font-semibold text-gray-900">Show as full-width banner</span>
                    </label>
                  </div>
                </div>
              )}

              {editModal.section.type === 'footer' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Footer Background Color</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="color"
                        defaultValue="#14b8a6"
                        className="w-16 h-12 rounded-lg cursor-pointer"
                      />
                      <input
                        type="text"
                        defaultValue="#14b8a6"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Company Description</label>
                    <textarea
                      rows={3}
                      defaultValue="Leading the electric vehicle revolution with sustainable and innovative mobility solutions."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="block text-sm font-semibold text-gray-900">Quick Links</label>
                      <button className="px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                        <i className="ri-add-line mr-2"></i>
                        Add Link
                      </button>
                    </div>

                    {['About Us', 'Vehicles', 'Dealers', 'Contact'].map((link, idx) => (
                      <div key={idx} className="flex items-center gap-3 mb-3">
                        <input
                          type="text"
                          defaultValue={link}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        />
                        <input
                          type="text"
                          defaultValue={`/${link.toLowerCase().replace(' ', '-')}`}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        />
                        <button className="w-10 h-10 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer">
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Copyright Text</label>
                    <input
                      type="text"
                      defaultValue="© 2024 EV Company. All rights reserved."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-4">Social Media Links</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                        <div key={social}>
                          <label className="block text-xs text-gray-600 mb-1">{social} URL</label>
                          <input
                            type="text"
                            placeholder={`https://${social.toLowerCase()}.com/...`}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 flex items-center justify-end gap-3">
              <button 
                onClick={closeEditModal}
                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={closeEditModal}
                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-save-line mr-2"></i>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
