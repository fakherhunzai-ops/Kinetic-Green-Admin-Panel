import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import KPICard from './components/KPICard';
import QuickActions from './components/QuickActions';
import RecentActivity from './components/RecentActivity';

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('today');

  const kpiData = {
    today: [
      { title: 'Total Leads', value: 47, change: 12, icon: 'ri-user-add-line', color: 'teal', subtitle: 'New today' },
      { title: 'Test Rides', value: 23, change: 8, icon: 'ri-e-bike-2-line', color: 'blue', subtitle: 'Scheduled' },
      { title: 'B2B Inquiries', value: 12, change: 15, icon: 'ri-briefcase-line', color: 'purple', subtitle: 'Active deals' },
      { title: 'Dealer Applications', value: 8, change: -5, icon: 'ri-store-2-line', color: 'orange', subtitle: 'Pending review' },
      { title: 'Conversion Rate', value: 34, change: 3, icon: 'ri-line-chart-line', color: 'green', subtitle: 'Lead to sale' }
    ],
    week: [
      { title: 'Total Leads', value: 284, change: 18, icon: 'ri-user-add-line', color: 'teal', subtitle: 'This week' },
      { title: 'Test Rides', value: 156, change: 12, icon: 'ri-e-bike-2-line', color: 'blue', subtitle: 'Completed' },
      { title: 'B2B Inquiries', value: 67, change: 22, icon: 'ri-briefcase-line', color: 'purple', subtitle: 'In progress' },
      { title: 'Dealer Applications', value: 34, change: 8, icon: 'ri-store-2-line', color: 'orange', subtitle: 'Under review' },
      { title: 'Conversion Rate', value: 38, change: 5, icon: 'ri-line-chart-line', color: 'green', subtitle: 'Weekly avg' }
    ],
    month: [
      { title: 'Total Leads', value: 1247, change: 24, icon: 'ri-user-add-line', color: 'teal', subtitle: 'This month' },
      { title: 'Test Rides', value: 689, change: 16, icon: 'ri-e-bike-2-line', color: 'blue', subtitle: 'Total rides' },
      { title: 'B2B Inquiries', value: 298, change: 28, icon: 'ri-briefcase-line', color: 'purple', subtitle: 'Monthly total' },
      { title: 'Dealer Applications', value: 142, change: 12, icon: 'ri-store-2-line', color: 'orange', subtitle: 'Applications' },
      { title: 'Conversion Rate', value: 42, change: 7, icon: 'ri-line-chart-line', color: 'green', subtitle: 'Monthly avg' }
    ]
  };

  const currentData = kpiData[timeRange as keyof typeof kpiData];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
          </div>
          
          {/* Time Range Selector */}
          <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setTimeRange('today')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                timeRange === 'today'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setTimeRange('week')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                timeRange === 'week'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setTimeRange('month')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                timeRange === 'month'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              This Month
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {currentData.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
