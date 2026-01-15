export const vehicleDetails = [
  {
    id: 1,
    name: 'E-Luna',
    tagline: 'Classic Design Meets Modern Electric Technology',
    category: 'Electric Scooter',
    startingPrice: '₹68,990',
    emiPrice: '₹1,999/month',
    rating: 4.7,
    reviews: 428,
    variants: [
      { id: 1, color: 'Cream White', colorCode: '#F5F5DC', price: '₹68,990' },
      { id: 2, color: 'Sky Blue', colorCode: '#87CEEB', price: '₹69,990' },
      { id: 3, color: 'Mint Green', colorCode: '#98FF98', price: '₹69,990' }
    ],
    specifications: {
      performance: [
        { label: 'Top Speed', value: '45 km/h' },
        { label: 'Range', value: '60 km per charge' },
        { label: 'Motor Power', value: '1200W BLDC' },
        { label: 'Acceleration', value: '0-40 km/h in 12 sec' }
      ],
      battery: [
        { label: 'Battery Type', value: 'Lithium-ion' },
        { label: 'Battery Capacity', value: '2.0 kWh' },
        { label: 'Charging Time', value: '4-5 hours' },
        { label: 'Fast Charging', value: 'Not Available' }
      ],
      charging: [
        { label: 'Charger Type', value: 'Standard Charger' },
        { label: 'Charging Port', value: 'Standard Port' },
        { label: 'Battery Warranty', value: '3 years' },
        { label: 'Swappable Battery', value: 'Yes' }
      ],
      dimensions: [
        { label: 'Length', value: '1750 mm' },
        { label: 'Width', value: '680 mm' },
        { label: 'Height', value: '1050 mm' },
        { label: 'Weight', value: '75 kg' },
        { label: 'Load Capacity', value: '120 kg' }
      ],
      warranty: [
        { label: 'Vehicle Warranty', value: '2 years' },
        { label: 'Battery Warranty', value: '3 years' },
        { label: 'Motor Warranty', value: '3 years' },
        { label: 'Roadside Assistance', value: '1 year free' }
      ]
    },
    features: [
      {
        icon: 'ri-history-line',
        title: 'Retro Design',
        description: 'Classic vintage styling with modern electric performance',
        details: 'Inspired by the iconic Luna design, combining nostalgic aesthetics with cutting-edge electric technology for a unique riding experience.'
      },
      {
        icon: 'ri-wallet-3-line',
        title: 'Most Affordable',
        description: 'Budget-friendly option for daily commuting',
        details: 'Best value electric scooter in the market with low running costs and minimal maintenance requirements.'
      },
      {
        icon: 'ri-battery-charge-line',
        title: 'Swappable Battery',
        description: 'Quick battery swap for continuous riding',
        details: 'Removable battery design allows you to charge at home or swap at battery stations for extended range.'
      },
      {
        icon: 'ri-user-smile-line',
        title: 'Easy to Ride',
        description: 'Simple controls perfect for all age groups',
        details: 'Lightweight design and intuitive controls make it ideal for first-time riders and daily commuters.'
      },
      {
        icon: 'ri-leaf-line',
        title: 'Eco-Friendly',
        description: 'Zero emissions for cleaner environment',
        details: 'Contribute to reducing air pollution with zero tailpipe emissions and sustainable transportation.'
      },
      {
        icon: 'ri-tools-line',
        title: 'Low Maintenance',
        description: 'Minimal upkeep with electric drivetrain',
        details: 'No engine oil changes, fewer moving parts, and lower maintenance costs compared to petrol scooters.'
      }
    ],
    gallery: [
      {
        id: 1,
        type: 'lifestyle',
        url: 'https://readdy.ai/api/search-image?query=vintage%20style%20cream%20colored%20electric%20scooter%20being%20ridden%20by%20young%20woman%20in%20colorful%20traditional%20Indian%20dress%20on%20peaceful%20village%20street%20during%20golden%20hour%2C%20retro%20aesthetic%2C%20professional%20lifestyle%20photography%2C%20natural%20warm%20lighting%2C%20nostalgic%20atmosphere%2C%20high%20quality%20commercial%20image&width=1200&height=800&seq=eluna001&orientation=landscape',
        alt: 'E-Luna lifestyle shot'
      },
      {
        id: 2,
        type: 'variant',
        url: 'https://readdy.ai/api/search-image?query=classic%20retro%20electric%20scooter%20in%20cream%20white%20color%20on%20pure%20white%20minimal%20background%2C%20vintage%20inspired%20design%20with%20modern%20elements%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20profile%20view%2C%20commercial%20quality&width=1200&height=800&seq=eluna002&orientation=landscape',
        alt: 'Cream White variant'
      },
      {
        id: 3,
        type: 'detail',
        url: 'https://readdy.ai/api/search-image?query=close%20up%20detail%20of%20vintage%20style%20scooter%20analog%20speedometer%20and%20chrome%20handlebars%2C%20retro%20design%20elements%2C%20professional%20product%20photography%2C%20soft%20studio%20lighting%2C%20nostalgic%20aesthetic&width=1200&height=800&seq=eluna003&orientation=landscape',
        alt: 'Dashboard detail'
      },
      {
        id: 4,
        type: 'variant',
        url: 'https://readdy.ai/api/search-image?query=classic%20retro%20electric%20scooter%20in%20sky%20blue%20color%20on%20pure%20white%20minimal%20background%2C%20vintage%20inspired%20design%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20three%20quarter%20view%2C%20commercial%20quality&width=1200&height=800&seq=eluna004&orientation=landscape',
        alt: 'Sky Blue variant'
      },
      {
        id: 5,
        type: 'detail',
        url: 'https://readdy.ai/api/search-image?query=detailed%20close%20up%20of%20electric%20scooter%20removable%20battery%20compartment%20with%20swappable%20battery%20visible%2C%20modern%20technology%20in%20vintage%20design%2C%20professional%20product%20photography%2C%20studio%20lighting&width=1200&height=800&seq=eluna005&orientation=landscape',
        alt: 'Swappable battery system'
      },
      {
        id: 6,
        type: 'lifestyle',
        url: 'https://readdy.ai/api/search-image?query=vintage%20electric%20scooter%20parked%20outside%20traditional%20Indian%20tea%20shop%20with%20colorful%20surroundings%2C%20lifestyle%20photography%2C%20natural%20lighting%2C%20cultural%20context%2C%20cream%20colored%20vehicle%2C%20professional%20quality&width=1200&height=800&seq=eluna006&orientation=landscape',
        alt: 'Cultural lifestyle shot'
      }
    ]
  },
  {
    id: 2,
    name: 'Urban Scooter',
    tagline: 'Smart Mobility for Modern Cities',
    category: 'Electric Scooter',
    startingPrice: '₹89,990',
    emiPrice: '₹2,599/month',
    rating: 4.8,
    reviews: 356,
    variants: [
      { id: 1, color: 'Teal Green', colorCode: '#14B8A6', price: '₹89,990' },
      { id: 2, color: 'Midnight Black', colorCode: '#1F2937', price: '₹91,990' },
      { id: 3, color: 'Pearl White', colorCode: '#F9FAFB', price: '₹90,990' }
    ],
    specifications: {
      performance: [
        { label: 'Top Speed', value: '55 km/h' },
        { label: 'Range', value: '75 km per charge' },
        { label: 'Motor Power', value: '1800W BLDC' },
        { label: 'Acceleration', value: '0-40 km/h in 9 sec' }
      ],
      battery: [
        { label: 'Battery Type', value: 'Lithium-ion' },
        { label: 'Battery Capacity', value: '2.8 kWh' },
        { label: 'Charging Time', value: '4-5 hours (Standard)' },
        { label: 'Fast Charging', value: '2-3 hours' }
      ],
      charging: [
        { label: 'Charger Type', value: 'Smart Charger' },
        { label: 'Charging Port', value: 'Type-C Port' },
        { label: 'Battery Warranty', value: '3 years' },
        { label: 'Swappable Battery', value: 'Yes' }
      ],
      dimensions: [
        { label: 'Length', value: '1820 mm' },
        { label: 'Width', value: '710 mm' },
        { label: 'Height', value: '1120 mm' },
        { label: 'Weight', value: '92 kg' },
        { label: 'Load Capacity', value: '150 kg' }
      ],
      warranty: [
        { label: 'Vehicle Warranty', value: '2 years' },
        { label: 'Battery Warranty', value: '3 years' },
        { label: 'Motor Warranty', value: '3 years' },
        { label: 'Roadside Assistance', value: '1 year free' }
      ]
    },
    features: [
      {
        icon: 'ri-smartphone-line',
        title: 'Smart Connectivity',
        description: 'Connect your phone via Bluetooth for navigation',
        details: 'Integrated mobile app provides real-time vehicle diagnostics, GPS tracking, ride statistics, and remote vehicle monitoring.'
      },
      {
        icon: 'ri-dashboard-line',
        title: 'Digital Display',
        description: 'Full-color TFT display with real-time information',
        details: 'High-resolution digital instrument cluster shows speed, battery level, range, and smartphone notifications.'
      },
      {
        icon: 'ri-flashlight-line',
        title: 'Fast Charging',
        description: 'Get fully charged in just 2-3 hours',
        details: 'Advanced fast charging system allows quick charging at home or public charging stations.'
      },
      {
        icon: 'ri-shield-check-line',
        title: 'Advanced Safety',
        description: 'CBS braking and anti-theft system',
        details: 'Combined braking system, LED lighting, and GPS-based anti-theft protection with mobile alerts.'
      },
      {
        icon: 'ri-leaf-line',
        title: 'Eco-Friendly',
        description: 'Zero emissions with sustainable technology',
        details: 'Contribute to cleaner air with zero tailpipe emissions and recyclable battery components.'
      },
      {
        icon: 'ri-tools-line',
        title: 'Low Maintenance',
        description: 'Minimal maintenance required',
        details: 'Electric drivetrain eliminates regular oil changes and complex engine maintenance.'
      }
    ],
    gallery: [
      {
        id: 1,
        type: 'lifestyle',
        url: 'https://readdy.ai/api/search-image?query=modern%20teal%20green%20electric%20scooter%20being%20ridden%20by%20young%20professional%20in%20business%20casual%20attire%20on%20clean%20urban%20street%20with%20modern%20buildings%2C%20dynamic%20motion%20shot%2C%20professional%20commercial%20photography%2C%20natural%20lighting%2C%20contemporary%20lifestyle%20aesthetic&width=1200&height=800&seq=scooter001&orientation=landscape',
        alt: 'Urban Scooter in action'
      },
      {
        id: 2,
        type: 'variant',
        url: 'https://readdy.ai/api/search-image?query=sleek%20modern%20electric%20scooter%20in%20teal%20green%20color%20on%20pure%20white%20minimal%20background%2C%20contemporary%20design%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20profile%20view%2C%20commercial%20quality&width=1200&height=800&seq=scooter002&orientation=landscape',
        alt: 'Teal Green variant'
      },
      {
        id: 3,
        type: 'detail',
        url: 'https://readdy.ai/api/search-image?query=close%20up%20detail%20shot%20of%20modern%20electric%20scooter%20digital%20TFT%20dashboard%20with%20colorful%20display%20showing%20speed%20and%20battery%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20teal%20accents&width=1200&height=800&seq=scooter003&orientation=landscape',
        alt: 'Digital dashboard'
      },
      {
        id: 4,
        type: 'variant',
        url: 'https://readdy.ai/api/search-image?query=sleek%20modern%20electric%20scooter%20in%20midnight%20black%20color%20on%20pure%20white%20minimal%20background%2C%20contemporary%20design%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20three%20quarter%20view%2C%20commercial%20quality&width=1200&height=800&seq=scooter004&orientation=landscape',
        alt: 'Midnight Black variant'
      }
    ]
  },
  {
    id: 3,
    name: 'E-Rickshaw',
    tagline: 'Sustainable Transport for Passengers and Cargo',
    category: 'Three Wheeler',
    startingPrice: '₹1,85,990',
    emiPrice: '₹5,299/month',
    rating: 4.6,
    reviews: 284,
    variants: [
      { id: 1, color: 'Green & Yellow', colorCode: '#10B981', price: '₹1,85,990' },
      { id: 2, color: 'Blue & White', colorCode: '#3B82F6', price: '₹1,87,990' }
    ],
    specifications: {
      performance: [
        { label: 'Top Speed', value: '35 km/h' },
        { label: 'Range', value: '120 km per charge' },
        { label: 'Motor Power', value: '1500W BLDC' },
        { label: 'Seating Capacity', value: '4+1 (Driver + 4 Passengers)' }
      ],
      battery: [
        { label: 'Battery Type', value: 'Lithium-ion' },
        { label: 'Battery Capacity', value: '5.0 kWh' },
        { label: 'Charging Time', value: '6-7 hours' },
        { label: 'Fast Charging', value: '4-5 hours' }
      ],
      charging: [
        { label: 'Charger Type', value: 'Industrial Charger' },
        { label: 'Charging Port', value: 'Heavy Duty Port' },
        { label: 'Battery Warranty', value: '3 years' },
        { label: 'Swappable Battery', value: 'Yes' }
      ],
      dimensions: [
        { label: 'Length', value: '2650 mm' },
        { label: 'Width', value: '1050 mm' },
        { label: 'Height', value: '1750 mm' },
        { label: 'Weight', value: '380 kg' },
        { label: 'Load Capacity', value: '400 kg' }
      ],
      warranty: [
        { label: 'Vehicle Warranty', value: '2 years' },
        { label: 'Battery Warranty', value: '3 years' },
        { label: 'Motor Warranty', value: '3 years' },
        { label: 'Roadside Assistance', value: '2 years free' }
      ]
    },
    features: [
      {
        icon: 'ri-group-line',
        title: 'Spacious Seating',
        description: 'Comfortable seating for 4 passengers plus driver',
        details: 'Ergonomically designed seats with ample legroom and headspace for comfortable passenger transport.'
      },
      {
        icon: 'ri-money-rupee-circle-line',
        title: 'Low Running Cost',
        description: 'Save up to 70% on fuel costs',
        details: 'Electric drivetrain significantly reduces operating costs compared to petrol or CNG rickshaws.'
      },
      {
        icon: 'ri-battery-2-charge-line',
        title: 'Long Range',
        description: 'Travel up to 120 km on single charge',
        details: 'High-capacity battery ensures full day operation without mid-day charging for most routes.'
      },
      {
        icon: 'ri-shield-check-line',
        title: 'Safety Features',
        description: 'Equipped with safety cage and seat belts',
        details: 'Reinforced safety cage, seat belts for all passengers, and bright LED lights for visibility.'
      },
      {
        icon: 'ri-leaf-line',
        title: 'Zero Emissions',
        description: 'Contribute to cleaner city air',
        details: 'Help reduce urban air pollution with zero tailpipe emissions and quiet operation.'
      },
      {
        icon: 'ri-tools-line',
        title: 'Easy Maintenance',
        description: 'Minimal maintenance with electric motor',
        details: 'Lower maintenance costs with fewer moving parts and no engine oil changes required.'
      }
    ],
    gallery: [
      {
        id: 1,
        type: 'lifestyle',
        url: 'https://readdy.ai/api/search-image?query=green%20and%20yellow%20electric%20rickshaw%20transporting%20passengers%20on%20busy%20Indian%20city%20street%20with%20shops%20and%20people%2C%20realistic%20urban%20scene%2C%20professional%20commercial%20photography%2C%20natural%20lighting%2C%20vibrant%20colors%2C%20documentary%20style&width=1200&height=800&seq=rickshaw001&orientation=landscape',
        alt: 'E-Rickshaw in service'
      },
      {
        id: 2,
        type: 'variant',
        url: 'https://readdy.ai/api/search-image?query=modern%20electric%20auto%20rickshaw%20in%20green%20and%20yellow%20colors%20on%20pure%20white%20minimal%20background%2C%20three%20wheeler%20passenger%20vehicle%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20view%2C%20commercial%20quality&width=1200&height=800&seq=rickshaw002&orientation=landscape',
        alt: 'Green & Yellow variant'
      },
      {
        id: 3,
        type: 'detail',
        url: 'https://readdy.ai/api/search-image?query=interior%20view%20of%20electric%20rickshaw%20showing%20comfortable%20passenger%20seats%20with%20safety%20features%2C%20clean%20upholstery%2C%20professional%20product%20photography%2C%20natural%20lighting&width=1200&height=800&seq=rickshaw003&orientation=landscape',
        alt: 'Interior seating'
      },
      {
        id: 4,
        type: 'variant',
        url: 'https://readdy.ai/api/search-image?query=modern%20electric%20auto%20rickshaw%20in%20blue%20and%20white%20colors%20on%20pure%20white%20minimal%20background%2C%20three%20wheeler%20passenger%20vehicle%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20three%20quarter%20view%2C%20commercial%20quality&width=1200&height=800&seq=rickshaw004&orientation=landscape',
        alt: 'Blue & White variant'
      }
    ]
  },
  {
    id: 4,
    name: 'EV Golf Cart',
    tagline: 'Premium Electric Mobility for Leisure and Business',
    category: 'Golf Cart',
    startingPrice: '₹2,45,990',
    emiPrice: '₹6,999/month',
    rating: 4.9,
    reviews: 142,
    variants: [
      { id: 1, color: 'Pearl White', colorCode: '#F9FAFB', price: '₹2,45,990' },
      { id: 2, color: 'Forest Green', colorCode: '#059669', price: '₹2,47,990' },
      { id: 3, color: 'Navy Blue', colorCode: '#1E40AF', price: '₹2,46,990' }
    ],
    specifications: {
      performance: [
        { label: 'Top Speed', value: '30 km/h' },
        { label: 'Range', value: '80 km per charge' },
        { label: 'Motor Power', value: '3000W BLDC' },
        { label: 'Seating Capacity', value: '6 Passengers' }
      ],
      battery: [
        { label: 'Battery Type', value: 'Lithium-ion (Premium)' },
        { label: 'Battery Capacity', value: '6.0 kWh' },
        { label: 'Charging Time', value: '6-8 hours' },
        { label: 'Fast Charging', value: '4-5 hours' }
      ],
      charging: [
        { label: 'Charger Type', value: 'Smart Charger' },
        { label: 'Charging Port', value: 'Standard Port' },
        { label: 'Battery Warranty', value: '4 years' },
        { label: 'Swappable Battery', value: 'No' }
      ],
      dimensions: [
        { label: 'Length', value: '2850 mm' },
        { label: 'Width', value: '1200 mm' },
        { label: 'Height', value: '1850 mm' },
        { label: 'Weight', value: '450 kg' },
        { label: 'Load Capacity', value: '500 kg' }
      ],
      warranty: [
        { label: 'Vehicle Warranty', value: '3 years' },
        { label: 'Battery Warranty', value: '4 years' },
        { label: 'Motor Warranty', value: '4 years' },
        { label: 'Roadside Assistance', value: '3 years free' }
      ]
    },
    features: [
      {
        icon: 'ri-vip-crown-line',
        title: 'Premium Comfort',
        description: 'Luxury seating with premium upholstery',
        details: 'High-quality cushioned seats with weather-resistant upholstery, armrests, and ample legroom for maximum comfort.'
      },
      {
        icon: 'ri-sun-line',
        title: 'Weather Protection',
        description: 'Full canopy roof with windshield',
        details: 'Complete weather protection with durable canopy, windshield, and optional side curtains for all-weather operation.'
      },
      {
        icon: 'ri-steering-2-line',
        title: 'Easy Handling',
        description: 'Power steering for effortless control',
        details: 'Smooth power steering, responsive braking, and easy-to-use controls make driving comfortable and safe.'
      },
      {
        icon: 'ri-shopping-cart-line',
        title: 'Storage Space',
        description: 'Rear cargo area for luggage and equipment',
        details: 'Spacious rear storage compartment perfect for golf bags, luggage, or business equipment.'
      },
      {
        icon: 'ri-leaf-line',
        title: 'Eco-Friendly',
        description: 'Silent operation with zero emissions',
        details: 'Quiet electric motor ensures peaceful environment in golf courses, resorts, and residential areas.'
      },
      {
        icon: 'ri-settings-3-line',
        title: 'Customizable',
        description: 'Multiple configurations available',
        details: 'Available in various seating configurations and can be customized for different applications like resorts, airports, and campuses.'
      }
    ],
    gallery: [
      {
        id: 1,
        type: 'lifestyle',
        url: 'https://readdy.ai/api/search-image?query=white%20electric%20golf%20cart%20with%20passengers%20on%20beautiful%20green%20golf%20course%20with%20palm%20trees%20and%20blue%20sky%2C%20luxury%20resort%20setting%2C%20professional%20lifestyle%20photography%2C%20natural%20lighting%2C%20premium%20aesthetic%2C%20high%20quality%20commercial%20image&width=1200&height=800&seq=golfcart001&orientation=landscape',
        alt: 'Golf Cart on course'
      },
      {
        id: 2,
        type: 'variant',
        url: 'https://readdy.ai/api/search-image?query=premium%20white%20electric%20golf%20cart%20on%20pure%20white%20minimal%20background%2C%20six%20seater%20with%20canopy%20roof%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20side%20profile%20view%2C%20commercial%20quality&width=1200&height=800&seq=golfcart002&orientation=landscape',
        alt: 'Pearl White variant'
      },
      {
        id: 3,
        type: 'detail',
        url: 'https://readdy.ai/api/search-image?query=close%20up%20interior%20view%20of%20golf%20cart%20showing%20premium%20leather%20seats%20and%20steering%20wheel%2C%20luxury%20details%2C%20professional%20product%20photography%2C%20soft%20studio%20lighting&width=1200&height=800&seq=golfcart003&orientation=landscape',
        alt: 'Premium interior'
      },
      {
        id: 4,
        type: 'variant',
        url: 'https://readdy.ai/api/search-image?query=premium%20forest%20green%20electric%20golf%20cart%20on%20pure%20white%20minimal%20background%2C%20six%20seater%20with%20canopy%20roof%2C%20professional%20product%20photography%2C%20studio%20lighting%2C%20three%20quarter%20view%2C%20commercial%20quality&width=1200&height=800&seq=golfcart004&orientation=landscape',
        alt: 'Forest Green variant'
      },
      {
        id: 5,
        type: 'lifestyle',
        url: 'https://readdy.ai/api/search-image?query=electric%20golf%20cart%20being%20used%20at%20luxury%20beach%20resort%20with%20ocean%20view%2C%20tourism%20and%20hospitality%20setting%2C%20professional%20photography%2C%20natural%20lighting%2C%20premium%20lifestyle%20aesthetic&width=1200&height=800&seq=golfcart005&orientation=landscape',
        alt: 'Resort lifestyle'
      }
    ]
  }
];
