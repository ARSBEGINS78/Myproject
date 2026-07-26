import React from 'react'

const Nav_im = ({ scrollToSection, homeRef, aboutRef, contactusRef, pricetierRef, formRef, logo}) => {
  return (
    <div>
          <img className='h-screen w-full object-cover' src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"/>
              <img className='absolute top-2 left-2 md:left-4 h-24 md:h-40 z-30' src={logo}/>      
          <nav className='absolute top-0 w-full p-4 md:p-8 flex justify-end gap-4 md:gap-8 text-white font-bold text-sm md:text-lg z-10'>
          <button onClick={() => scrollToSection(homeRef)} className='hover:text-orange-500 transition-colors'>Home</button>
          <button onClick={() => scrollToSection(aboutRef)} className='hover:text-orange-500 transition-colors'>Services</button>
          <button onClick={() => scrollToSection(contactusRef)} className='hover:text-orange-500 transition-colors'>Testimonials</button>
          <button onClick={() => scrollToSection(pricetierRef)} className='hover:text-orange-500 transition-colors'>Pricing</button>
          <button onClick={() => scrollToSection(formRef)} className='hover:text-orange-500 transition-colors'>Contact us</button>
        </nav>
    </div>
  )
}

export default Nav_im
