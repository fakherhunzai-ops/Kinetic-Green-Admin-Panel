import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

export default function LeadsInbox() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const leads = [
    { id: 1, name: 'Rajesh Kumar', phone: '+91 98765 43210', email: 'rajesh@example.com', city: 'Mumbai', type: 'Contact', source: 'Home', created: '2024-01-15 10:30', status: 'new', notes: 'Interested in E-Luna for daily commute' },
    { id: 2, name: 'Priya Sharma', phone: '+91 98765 43211', email: 'priya@example.com', city: 'Delhi', type: 'Test Ride', source: 'Product Detail', created: '2024-01-15 09:15', status: 'new', notes: 'Wants to test E-Luna this weekend' },
    { id: 3, name: 'TechCorp Solutions', phone: '+91 98765 43212', email: 'contact@techcorp.com', city: 'Bangalore', type: 'B2B', source: 'B2B Page', created: '2024-01-15 08:45', status: 'in-progress', notes: 'Fleet of 50 E-Rickshaws needed' },
    { id: 4, name: 'Amit Patel', phone: '+91 98765 43213', email: 'amit@example.com', city: 'Ahmedabad', type: 'Contact', source: 'Contact Page', created: '2024-01-14 16:20', status: 'new', notes: 'Finance inquiry for Urban Scooter' },
    { id: 5, name: 'Sneha Reddy', phone: '+91 98765 43214', email: 'sneha@example.com', city: 'Hyderabad', type: 'Test Ride', source: 'Vehicles', created: '2024-01-14 14:30', status: 'in-progress', notes: 'Scheduled for tomorrow 3 PM' },
    { id: 6, name: 'GreenFleet Logistics', phone: '+91 98765 43215', email: 'info@greenfleet.com', city: 'Pune', type: 'B2B', source: 'B2B Page', created: '2024-01-14 11:00', status: 'new', notes: 'Interested in E-Rickshaw bulk order' },
    { id: 7, name: 'Vikram Singh', phone: '+91 98765 43216', email: 'vikram@example.com', city: 'Jaipur', type: 'Finance', source: 'Contact', created: '2024-01-13 15:45', status: 'closed', notes: 'Loan approved, purchased E-Luna' },
    { id: 8, name: 'Anita Desai', phone: '+91 98765 43217', email: 'anita@example.com', city: 'Chennai', type: 'Test Ride', source: 'Vehicles', created: '2024-01-13 10:20', status: 'in-progress', notes: 'Test ride completed, considering purchase' },
    { id: 9, name: 'Suresh Menon', phone: '+91 98765 43218', email: 'suresh@example.com', city: 'Kochi', type: 'Contact', source: 'Home', created: '2024-01-12 17:30', status: 'closed', notes: 'General inquiry, not interested' },
    { id: 10, name: 'Kavita Joshi', phone: '+91 98765 43219', email: 'kavita@example.com', city: 'Kolkata', type: 'Contact', source: 'Contact', created: '2024-01-12 09:00', status: 'spam', notes: 'Spam inquiry' }
  ];

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lead.phone.includes(searchQuery) ||
                         lead.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || lead.type === filterType;
    const matchesStatus = filterStatus === 'all' || lead.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { bg: string; text: string; label: string }> = {
      new: { bg: 'bg-green-50', text: 'text-green-700', label: 'New' },
      'in-progress': { bg: 'bg-blue-50', text: 'text-blue-700', label: 'In Progress' },
      closed: { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Closed' },
      spam: { bg: 'bg-red-50', text: 'text-red-700', label: 'Spam' }
    };
    const badge = badges[status] || badges.new;
    return (
      <span className={`px-3 py-1 ${badge.bg} ${badge.text} text-xs font-semibold rounded-full whitespace-nowrap`}>
        {badge.label}
      </span>
    );
  };

  const handleRowClick = (lead: any) => {
    setSelectedLead(lead);
    setDrawerOpen(true);
  };

  const handleStatusUpdate = (newStatus: string) => {
    if (selectedLead) {
      setSelectedLead({ ...selectedLead, status: newStatus });
      // Update in backend
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Leads Inbox</h1>
            <p className="text-gray-600 mt-1">{filteredLeads.length} leads found</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-download-line mr-2"></i>
              Export CSV
            </button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-refresh-line mr-2"></i>
              Refresh
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, phone, or city..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                />
                <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer"
              >
                <option value="all">All Types</option>
                <option value="Contact">Contact</option>
                <option value="B2B">B2B</option>
                <option value="Test Ride">Test Ride</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="in-progress">In Progress</option>
                <option value="closed">Closed</option>
                <option value="spam">Spam</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">City</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Source Page</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredLeads.map((lead) => (
                  <tr 
                    key={lead.id} 
                    onClick={() => handleRowClick(lead)}
                    className="hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">{lead.name}</p>
                      <p className="text-xs text-gray-600">{lead.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-700">{lead.phone}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-700">{lead.city}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full whitespace-nowrap">
                        {lead.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600">{lead.source}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600">{lead.created}</p>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(lead.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Drawer */}
      {drawerOpen && selectedLead && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setDrawerOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Lead Details</h2>
                <button 
                  onClick={() => setDrawerOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              {/* Lead Info */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase">Name</label>
                  <p className="text-lg font-semibold text-gray-900 mt-1">{selectedLead.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase">Phone</label>
                    <p className="text-sm text-gray-900 mt-1">{selectedLead.phone}</p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase">City</label>
                    <p className="text-sm text-gray-900 mt-1">{selectedLead.city}</p>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase">Email</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedLead.email}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase">Type</label>
                    <p className="text-sm text-gray-900 mt-1">{selectedLead.type}</p>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 uppercase">Source</label>
                    <p className="text-sm text-gray-900 mt-1">{selectedLead.source}</p>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase">Created</label>
                  <p className="text-sm text-gray-900 mt-1">{selectedLead.created}</p>
                </div>
              </div>

              {/* Status Update */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Update Status</label>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => handleStatusUpdate('new')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                      selectedLead.status === 'new' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-green-50 text-green-700 hover:bg-green-100'
                    }`}
                  >
                    New
                  </button>
                  <button 
                    onClick={() => handleStatusUpdate('in-progress')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                      selectedLead.status === 'in-progress' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    }`}
                  >
                    In Progress
                  </button>
                  <button 
                    onClick={() => handleStatusUpdate('closed')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                      selectedLead.status === 'closed' 
                        ? 'bg-gray-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Closed
                  </button>
                  <button 
                    onClick={() => handleStatusUpdate('spam')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                      selectedLead.status === 'spam' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-red-50 text-red-700 hover:bg-red-100'
                    }`}
                  >
                    Spam
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                <textarea
                  defaultValue={selectedLead.notes}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                  placeholder="Add notes about this lead..."
                ></textarea>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-save-line mr-2"></i>
                  Save Changes
                </button>
                <button className="px-4 py-3 text-red-600 bg-red-50 font-semibold rounded-lg hover:bg-red-100 transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
