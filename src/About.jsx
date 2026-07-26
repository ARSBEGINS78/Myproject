import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Boost organic rankings via technical audits, keyword strategy, high-quality backlinking, and content optimization.',
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Run high-ROI performance campaigns across Google Ads, Bing, and Meta to drive immediate, targeted leads.',
    },
    {
      title: 'Social Media Marketing',
      description: 'Build brand loyalty through creative content, active community engagement, and strategic paid social campaigns.',
    },
    {
      title: 'Content Strategy & Copywriting',
      description: 'Craft compelling blog posts, persuasive email sequences, and high-converting ad copy that educates and converts.',
    },
    {
      title: 'Web Design & CRO',
      description: 'Design fast, fully responsive landing pages tuned specifically to turn site visitors into paying clients.',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track key performance metrics and campaign insights to continuously measure ROI and refine growth strategies.',
    },
  ];

  return (
    <div className='min-h-screen w-full bg-white flex flex-col justify-center px-4 py-10 xs:px-6 sm:py-12 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto w-full'>
        {/* Header Section */}
        <div className='mb-8 sm:mb-12 text-center sm:text-left'>
          <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black font-light tracking-tight'>
            Services
          </h1>
          <h2 className='font-bold text-orange-500 text-2xl sm:text-4xl md:text-5xl mt-1 sm:mt-2'>
            Northpeak Digital
          </h2>
        </div>

        {/* 6-Grid Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='p-5 xs:p-6 sm:p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between bg-gray-50 hover:border-orange-500'
            >
              <div>
                <span className='text-orange-500 font-bold text-lg sm:text-xl'>
                  0{index + 1}
                </span>
                <h3 className='text-xl sm:text-2xl font-bold text-black mt-3 sm:mt-4 mb-2 sm:mb-3 leading-snug'>
                  {service.title}
                </h3>
                <p className='text-gray-700 text-sm sm:text-base leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
