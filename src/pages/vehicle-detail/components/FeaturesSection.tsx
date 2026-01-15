import { useState } from 'react';

interface FeaturesSectionProps {
  vehicle: {
    name: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
      details: string;
    }>;
  };
}

export default function FeaturesSection({ vehicle }: FeaturesSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Roomy. Steady. <span className="text-teal-600">Ready</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {vehicle.features.map((feature, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-teal-50 rounded-xl mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <i className={`${feature.icon} text-3xl text-teal-600 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
