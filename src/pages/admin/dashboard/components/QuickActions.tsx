import { useNavigate } from 'react-router-dom';

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      icon: 'ri-car-line',
      label: 'Add Product',
      description: 'Create new vehicle',
      color: 'teal',
      path: '/admin/products/new'
    },
    {
      icon: 'ri-store-line',
      label: 'Add Dealer',
      description: 'Register new dealer',
      color: 'blue',
      path: '/admin/dealers/new'
    },
    {
      icon: 'ri-image-line',
      label: 'Publish Banner',
      description: 'Upload homepage banner',
      color: 'purple',
      path: '/admin/cms'
    },
    {
      icon: 'ri-briefcase-line',
      label: 'Post Job',
      description: 'Create job opening',
      color: 'orange',
      path: '/admin/careers/new'
    },
    {
      icon: 'ri-mail-send-line',
      label: 'Send Newsletter',
      description: 'Email subscribers',
      color: 'green',
      path: '/admin/marketing'
    },
    {
      icon: 'ri-file-chart-line',
      label: 'View Reports',
      description: 'Analytics & insights',
      color: 'red',
      path: '/admin/reports'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; icon: string }> = {
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', icon: 'bg-teal-600' },
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', icon: 'bg-blue-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', icon: 'bg-purple-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', icon: 'bg-orange-600' },
      green: { bg: 'bg-green-50', text: 'text-green-600', icon: 'bg-green-600' },
      red: { bg: 'bg-red-50', text: 'text-red-600', icon: 'bg-red-600' }
    };
    return colors[color] || colors.teal;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900">Quick Actions</h2>
        <p className="text-sm text-gray-600 mt-1">Frequently used tasks</p>
      </div>

      <div className="space-y-3">
        {actions.map((action, index) => {
          const colors = getColorClasses(action.color);
          return (
            <button
              key={index}
              onClick={() => navigate(action.path)}
              className={`w-full flex items-center gap-4 p-4 ${colors.bg} rounded-lg hover:shadow-md transition-all cursor-pointer group`}
            >
              <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <i className={`${action.icon} text-xl text-white`}></i>
              </div>
              <div className="flex-1 text-left">
                <p className={`text-sm font-semibold ${colors.text}`}>{action.label}</p>
                <p className="text-xs text-gray-600 mt-1">{action.description}</p>
              </div>
              <i className={`ri-arrow-right-line ${colors.text}`}></i>
            </button>
          );
        })}
      </div>
    </div>
  );
}
