interface KPICardProps {
  title: string;
  value: number;
  change: number;
  icon: string;
  color: string;
  subtitle?: string;
}

export default function KPICard({ title, value, change, icon, color, subtitle }: KPICardProps) {
  const isPositive = change >= 0;
  
  const colorClasses = {
    teal: 'bg-teal-50 text-teal-600',
    blue: 'bg-blue-50 text-blue-600',
    purple: 'bg-purple-50 text-purple-600',
    orange: 'bg-orange-50 text-orange-600',
    green: 'bg-green-50 text-green-600'
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${colorClasses[color as keyof typeof colorClasses]}`}>
          <i className={`${icon} text-2xl`}></i>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
          isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
        }`}>
          <i className={`${isPositive ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} text-sm`}></i>
          {Math.abs(change)}%
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</h3>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        {subtitle && (
          <p className="text-xs text-gray-500">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
