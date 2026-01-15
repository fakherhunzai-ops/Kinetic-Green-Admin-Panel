import { useState } from 'react';

interface SpecificationsSectionProps {
  vehicle: {
    name: string;
    specifications: {
      performance: Array<{ label: string; value: string }>;
      battery: Array<{ label: string; value: string }>;
      charging: Array<{ label: string; value: string }>;
      dimensions: Array<{ label: string; value: string }>;
      warranty: Array<{ label: string; value: string }>;
    };
  };
}

export default function SpecificationsSection({ vehicle }: SpecificationsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {vehicle.name} does it all
          </h2>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {vehicle.specifications.performance.slice(0, 4).map((spec, index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-600 mb-2">{spec.label}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{spec.value}</div>
            </div>
          ))}
        </div>

        {/* Detailed Specifications Table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">Detailed Specifications</h3>
          </div>
          
          <div className="divide-y divide-gray-200">
            {/* Performance */}
            <div className="p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-speed-line text-teal-600 text-xl"></i>
                Performance
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {vehicle.specifications.performance.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">{spec.label}</span>
                    <span className="text-sm font-bold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Battery */}
            <div className="p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-battery-charge-line text-teal-600 text-xl"></i>
                Battery
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {vehicle.specifications.battery.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">{spec.label}</span>
                    <span className="text-sm font-bold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Charging */}
            <div className="p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-flashlight-line text-teal-600 text-xl"></i>
                Charging
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {vehicle.specifications.charging.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">{spec.label}</span>
                    <span className="text-sm font-bold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dimensions */}
            <div className="p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <i className="ri-ruler-line text-teal-600 text-xl"></i>
                Dimensions
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {vehicle.specifications.dimensions.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">{spec.label}</span>
                    <span className="text-sm font-bold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-50">
            <button className="w-full md:w-auto px-8 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2">
              <i className="ri-download-line text-lg"></i>
              Download Full Specifications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
