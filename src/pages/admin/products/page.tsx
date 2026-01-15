import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  status: 'Published' | 'Draft' | 'Scheduled';
  image: string;
  range: string;
  topSpeed: string;
}

export default function ProductsManagement() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const products: Product[] = [
    {
      id: '1',
      name: 'E-Luna',
      category: 'Scooter',
      price: 68990,
      status: 'Published',
      image: 'https://readdy.ai/api/search-image?query=modern%20electric%20scooter%20E-Luna%20retro%20classic%20design%20with%20simple%20white%20background%20product%20photography%20studio%20lighting%20professional%20commercial%20shot&width=400&height=300&seq=eluna001&orientation=landscape',
      range: '80 km',
      topSpeed: '45 km/h'
    },
    {
      id: '2',
      name: 'Urban Scooter',
      category: 'Scooter',
      price: 89990,
      status: 'Published',
      image: 'https://readdy.ai/api/search-image?query=sleek%20modern%20urban%20electric%20scooter%20with%20digital%20display%20simple%20white%20background%20product%20photography%20studio%20lighting%20professional%20commercial%20shot&width=400&height=300&seq=urban001&orientation=landscape',
      range: '120 km',
      topSpeed: '65 km/h'
    },
    {
      id: '3',
      name: 'E-Rickshaw',
      category: 'Three Wheeler',
      price: 185990,
      status: 'Published',
      image: 'https://readdy.ai/api/search-image?query=electric%20rickshaw%20three%20wheeler%20passenger%20vehicle%20simple%20white%20background%20product%20photography%20studio%20lighting%20professional%20commercial%20shot&width=400&height=300&seq=erickshaw001&orientation=landscape',
      range: '100 km',
      topSpeed: '35 km/h'
    },
    {
      id: '4',
      name: 'EV Golf Cart',
      category: 'Golf Cart',
      price: 245990,
      status: 'Published',
      image: 'https://readdy.ai/api/search-image?query=premium%20electric%20golf%20cart%20luxury%20vehicle%20simple%20white%20background%20product%20photography%20studio%20lighting%20professional%20commercial%20shot&width=400&height=300&seq=golfcart001&orientation=landscape',
      range: '60 km',
      topSpeed: '30 km/h'
    },
    {
      id: '5',
      name: 'Cargo E-Rickshaw',
      category: 'Three Wheeler',
      price: 195990,
      status: 'Draft',
      image: 'https://readdy.ai/api/search-image?query=electric%20cargo%20rickshaw%20delivery%20vehicle%20three%20wheeler%20simple%20white%20background%20product%20photography%20studio%20lighting%20professional%20commercial%20shot&width=400&height=300&seq=cargo001&orientation=landscape',
      range: '90 km',
      topSpeed: '35 km/h'
    },
    {
      id: '6',
      name: 'Sport Scooter',
      category: 'Scooter',
      price: 99990,
      status: 'Scheduled',
      image: 'https://readdy.ai/api/search-image?query=sporty%20electric%20scooter%20performance%20design%20aggressive%20styling%20simple%20white%20background%20product%20photography%20studio%20lighting%20professional%20commercial%20shot&width=400&height=300&seq=sport001&orientation=landscape',
      range: '110 km',
      topSpeed: '75 km/h'
    }
  ];

  const filteredProducts = products.filter(product => {
    if (filterStatus !== 'all' && product.status !== filterStatus) return false;
    if (filterCategory !== 'all' && product.category !== filterCategory) return false;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-700';
      case 'Draft': return 'bg-gray-100 text-gray-700';
      case 'Scheduled': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Products Management</h1>
            <p className="text-gray-600 mt-1">Manage your vehicle inventory and listings</p>
          </div>
          <button 
            onClick={() => navigate('/admin/products/new')}
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-add-line mr-2"></i>
            Add New Product
          </button>
        </div>

        {/* Filters and View Toggle */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                  <option value="Scheduled">Scheduled</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select 
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  <option value="Scooter">Scooter</option>
                  <option value="Three Wheeler">Three Wheeler</option>
                  <option value="Golf Cart">Golf Cart</option>
                </select>
              </div>

              <div className="flex items-end">
                <button className="px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                  <i className="ri-refresh-line mr-2"></i>
                  Reset Filters
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  viewMode === 'grid' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <i className="ri-grid-line mr-2"></i>
                Grid
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  viewMode === 'table' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <i className="ri-list-check mr-2"></i>
                Table
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products
          </p>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain object-center"
                  />
                  <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                    <p className="text-xl font-bold text-teal-600">₹{product.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <i className="ri-charging-pile-2-line"></i>
                      <span>{product.range}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="ri-speed-line"></i>
                      <span>{product.topSpeed}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => navigate(`/admin/products/${product.id}`)}
                      className="flex-1 px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-edit-line mr-2"></i>
                      Edit
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                      <i className="ri-more-2-fill text-xl"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Range</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Top Speed</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-contain object-center"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{product.name}</p>
                            <p className="text-sm text-gray-600">ID: {product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">{product.category}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">₹{product.price.toLocaleString()}</td>
                      <td className="px-6 py-4 text-gray-900">{product.range}</td>
                      <td className="px-6 py-4 text-gray-900">{product.topSpeed}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(product.status)}`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => navigate(`/admin/products/${product.id}`)}
                            className="w-8 h-8 flex items-center justify-center text-teal-600 hover:bg-teal-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <i className="ri-edit-line"></i>
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                            <i className="ri-more-2-fill"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
