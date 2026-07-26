import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Client-side Validation Rules
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.phone && !/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message field cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      // Reset form fields after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }
  };

  return (
    <div className='min-h-screen w-full bg-white flex flex-col justify-center px-4 py-12 sm:px-6 md:px-12 lg:px-20'>
      <div className='max-w-4xl mx-auto w-full'>
        {/* Header Section */}
        <div className='mb-8 sm:mb-12 text-center md:text-left'>
          <h1 className='text-4xl sm:text-6xl md:text-7xl font-light text-black tracking-tight'>
            Get in Touch
          </h1>
          <h2 className='font-bold text-orange-500 text-2xl sm:text-3xl md:text-4xl mt-2'>
            Northpeak Digital
          </h2>
          <p className='text-gray-600 text-sm sm:text-base md:text-xl mt-3 sm:mt-4 leading-relaxed'>
            Ready to scale your online presence? Send us a message and our team will get back to you shortly.
          </p>
        </div>

        {/* Success Alert Banner */}
        {isSubmitted && (
          <div className='mb-6 sm:mb-8 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-r-lg'>
            <p className='font-bold text-sm sm:text-base'>Thank you for reaching out!</p>
            <p className='text-xs sm:text-sm'>Your message has been sent successfully. We will get back to you shortly.</p>
          </div>
        )}

        {/* Form Container */}
        <form 
          onSubmit={handleSubmit} 
          className='space-y-4 sm:space-y-6 bg-gray-50 p-5 sm:p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm' 
          noValidate
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            {/* Full Name */}
            <div>
              <label className='block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2'>
                Full Name <span className='text-orange-500'>*</span>
              </label>
              <input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                placeholder='John Doe'
                className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                  errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-orange-500'
                }`}
              />
              {errors.fullName && <p className='text-red-500 text-xs mt-1'>{errors.fullName}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label className='block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2'>
                Email Address <span className='text-orange-500'>*</span>
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='john@example.com'
                className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-orange-500'
                }`}
              />
              {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            {/* Phone Number */}
            <div>
              <label className='block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2'>
                Phone Number <span className='text-gray-400 font-normal'>(Optional)</span>
              </label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='+1 (555) 000-0000'
                className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-orange-500'
                }`}
              />
              {errors.phone && <p className='text-red-500 text-xs mt-1'>{errors.phone}</p>}
            </div>

            {/* Select Service */}
            <div>
              <label className='block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2'>
                Interested Service <span className='text-orange-500'>*</span>
              </label>
              <select
                name='service'
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                  errors.service ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-orange-500'
                }`}
              >
                <option value=''>Select a service...</option>
                <option value='SEO'>Search Engine Optimization (SEO)</option>
                <option value='PPC'>Pay-Per-Click (PPC) Advertising</option>
                <option value='SMM'>Social Media Marketing</option>
                <option value='Content'>Content Strategy & Copywriting</option>
                <option value='CRO'>Web Design & CRO</option>
                <option value='Analytics'>Analytics & Reporting</option>
              </select>
              {errors.service && <p className='text-red-500 text-xs mt-1'>{errors.service}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className='block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2'>
              Project Details <span className='text-orange-500'>*</span>
            </label>
            <textarea
              name='message'
              rows='4'
              value={formData.message}
              onChange={handleChange}
              placeholder='Tell us about your brand goals and timeline...'
              className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border bg-white text-sm focus:outline-none transition-colors ${
                errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-orange-500'
              }`}
            ></textarea>
            {errors.message && <p className='text-red-500 text-xs mt-1'>{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full md:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base rounded-xl transition-colors duration-200 cursor-pointer shadow-md'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;