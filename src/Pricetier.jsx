import React from 'react';

const Pricetier = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Essential digital marketing to build your online presence and start driving local traffic.',
      features: [
        'Basic SEO Optimization',
        'Social Media Management (2 Platforms)',
        'Monthly Analytics Report',
        'Email Support',
      ],
      popular: false,
      buttonText: 'Get Started',
    },
    {
      name: 'Growth',
      price: '$2,499',
      period: '/month',
      description: 'Comprehensive strategies designed to rapidly scale your brand and maximize lead generation.',
      features: [
        'Advanced Technical & On-Page SEO',
        'PPC Ad Campaign Management',
        'Social Media Management (4 Platforms)',
        'Content Strategy & Weekly Blogs',
        'Bi-Weekly Strategy Calls',
        'Dedicated Account Manager',
      ],
      popular: true,
      buttonText: 'Scale Now',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored high-performance marketing ecosystems designed for large brands and fast-growing enterprises.',
      features: [
        'Full-Funnel Growth Strategy',
        'Custom Web Design & CRO Optimization',
        'Omnichannel Ad Campaign Management',
        'Advanced Email Automation & CRM',
        '24/7 Priority Support & Weekly Calls',
        'Custom Analytics & Performance Dashboards',
      ],
      popular: false,
      buttonText: 'Contact Us',
    },
  ];

  return (
    <div className='min-h-screen w-full bg-white flex flex-col justify-center px-4 py-12 sm:px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto w-full'>
        {/* Header Section */}
        <div className='mb-10 sm:mb-14 text-center'>
          <h1 className='text-4xl sm:text-6xl md:text-7xl font-light text-black tracking-tight'>
            Pricing Plans
          </h1>
          <h2 className='font-bold text-orange-500 text-2xl sm:text-3xl md:text-4xl mt-2'>
            Northpeak Digital
          </h2>
          <p className='text-gray-600 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed'>
            Transparent investment options tailored to scale your brand with proven digital strategies.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch w-full'>
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                tier.popular
                  ? 'border-orange-500 shadow-xl bg-orange-50/20 md:scale-105 z-10 md:col-span-2 lg:col-span-1'
                  : 'border-gray-200 shadow-sm bg-white hover:border-gray-300'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <span className='absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-md whitespace-nowrap'>
                  Most Popular
                </span>
              )}

              <div>
                {/* Header Info */}
                <h3 className='text-xl sm:text-2xl font-bold text-black'>{tier.name}</h3>
                <p className='text-gray-600 text-xs sm:text-sm mt-2 sm:min-h-12 leading-relaxed'>
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className='mt-4 sm:mt-6 mb-6 sm:mb-8'>
                  <span className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-black'>
                    {tier.price}
                  </span>
                  <span className='text-gray-500 font-medium text-sm sm:text-base ml-1'>
                    {tier.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className='space-y-3 sm:space-y-4 mb-6 sm:mb-8'>
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center text-gray-700 text-xs sm:text-sm md:text-base'>
                      <svg
                        className='w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2.5 sm:mr-3 shrink-0'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2.5'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-colors duration-200 cursor-pointer ${
                  tier.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-black hover:bg-gray-800 text-white'
                }`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricetier;
