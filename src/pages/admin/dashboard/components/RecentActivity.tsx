export default function RecentActivity() {
  const activities = [
    { id: 1, type: 'lead', name: 'Rajesh Kumar', action: 'New contact form submission', page: 'Home', time: '2 min ago', status: 'new' },
    { id: 2, type: 'test-ride', name: 'Priya Sharma', action: 'Test ride request for E-Luna', page: 'Product Detail', time: '15 min ago', status: 'new' },
    { id: 3, type: 'b2b', name: 'TechCorp Solutions', action: 'B2B fleet inquiry', page: 'B2B', time: '1 hour ago', status: 'in-progress' },
    { id: 4, type: 'dealer', name: 'Amit Patel', action: 'Dealer application submitted', page: 'Become Dealer', time: '2 hours ago', status: 'new' },
    { id: 5, type: 'job', name: 'Sneha Reddy', action: 'Applied for Sales Manager', page: 'Careers', time: '3 hours ago', status: 'new' },
    { id: 6, type: 'lead', name: 'Vikram Singh', action: 'Finance inquiry', page: 'Contact', time: '4 hours ago', status: 'closed' },
    { id: 7, type: 'test-ride', name: 'Anita Desai', action: 'Test ride request for Urban Scooter', page: 'Vehicles', time: '5 hours ago', status: 'in-progress' },
    { id: 8, type: 'b2b', name: 'GreenFleet Logistics', action: 'E-Rickshaw bulk order inquiry', page: 'B2B', time: '6 hours ago', status: 'new' },
    { id: 9, type: 'dealer', name: 'Suresh Menon', action: 'Dealer application submitted', page: 'Become Dealer', time: '7 hours ago', status: 'in-progress' },
    { id: 10, type: 'lead', name: 'Kavita Joshi', action: 'Product inquiry', page: 'Contact', time: '8 hours ago', status: 'closed' }
  ];

  const getTypeIcon = (type: string) => {
    const icons: Record<string, string> = {
      lead: 'ri-user-line',
      'test-ride': 'ri-e-bike-2-line',
      b2b: 'ri-building-line',
      dealer: 'ri-store-line',
      job: 'ri-briefcase-line'
    };
    return icons[type] || 'ri-file-line';
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      lead: 'bg-teal-50 text-teal-600',
      'test-ride': 'bg-blue-50 text-blue-600',
      b2b: 'bg-purple-50 text-purple-600',
      dealer: 'bg-orange-50 text-orange-600',
      job: 'bg-green-50 text-green-600'
    };
    return colors[type] || 'bg-gray-50 text-gray-600';
  };

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

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
            <p className="text-sm text-gray-600 mt-1">Last 10 actions across all modules</p>
          </div>
          <button className="px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
            View All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Source Page</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {activities.map((activity) => (
              <tr key={activity.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                <td className="px-6 py-4">
                  <div className={`w-10 h-10 ${getTypeColor(activity.type)} rounded-lg flex items-center justify-center`}>
                    <i className={`${getTypeIcon(activity.type)} text-lg`}></i>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-gray-900">{activity.name}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-700">{activity.action}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-600">{activity.page}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </td>
                <td className="px-6 py-4">
                  {getStatusBadge(activity.status)}
                </td>
                <td className="px-6 py-4">
                  <button className="text-teal-600 hover:text-teal-700 cursor-pointer">
                    <i className="ri-arrow-right-line text-lg"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
