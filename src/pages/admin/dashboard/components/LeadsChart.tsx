export default function LeadsChart() {
  const weekData = [
    { day: 'Mon', leads: 45, testRides: 12, b2b: 5 },
    { day: 'Tue', leads: 52, testRides: 15, b2b: 7 },
    { day: 'Wed', leads: 38, testRides: 10, b2b: 4 },
    { day: 'Thu', leads: 65, testRides: 18, b2b: 9 },
    { day: 'Fri', leads: 58, testRides: 16, b2b: 6 },
    { day: 'Sat', leads: 72, testRides: 22, b2b: 8 },
    { day: 'Sun', leads: 48, testRides: 14, b2b: 5 }
  ];

  const maxValue = Math.max(...weekData.map(d => d.leads));

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Weekly Leads Overview</h2>
          <p className="text-sm text-gray-600 mt-1">Total leads and conversions this week</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Leads</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Test Rides</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-sm text-gray-600">B2B</span>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between gap-4 h-64">
        {weekData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex flex-col items-center gap-1 flex-1 justify-end">
              <div 
                className="w-full bg-teal-600 rounded-t-lg transition-all hover:bg-teal-700 cursor-pointer relative group"
                style={{ height: `${(data.leads / maxValue) * 100}%` }}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  {data.leads}
                </span>
              </div>
              <div 
                className="w-3/4 bg-blue-600 rounded-t-lg transition-all hover:bg-blue-700 cursor-pointer"
                style={{ height: `${(data.testRides / maxValue) * 100}%` }}
              ></div>
              <div 
                className="w-1/2 bg-purple-600 rounded-t-lg transition-all hover:bg-purple-700 cursor-pointer"
                style={{ height: `${(data.b2b / maxValue) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-600 mt-2">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
