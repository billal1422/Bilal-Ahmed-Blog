import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-100 mb-40'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out
        transform hover:translate-y-[-5px] hover:text-black text-red-600'>
          Bilal Ahmed : Navigating the secret of Technology in Tech Chronicles Blog!
        </h2>
       
        <p className=
        'text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:ab-16 animate-fade-in-up delay-100'>
          Bilal Ahmed as he derives into the dynamic world of Web development.</p>
          <div className='mx-auto max-w-7xl px-5'>
            <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Exploring above Categories</h1>
          <div className='grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-col-6 animate-fade-in-up delay-100'>
            {[
              "Technology",
              "Artificial Intelligence",
              "HTML",
              "CSS",
              "NEXT JS",
              "Web development",
              "Javascript",
            ].map((category,index)=>(
              <div key={index}
              className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>
<p className='text-center text-lg font-semibold'>{category}</p>
<div className='absolute insert-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out '>

</div>
              </div>
              
            ))}
          </div>
          </div>
          <p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>The future of technology promises unprecedented advancements that will reshape our lives.
             Artificial Intelligence and machine learning will continue to evolve, powering everything
              from personalized healthcare solutions to autonomous transportation. Quantum computing is
               set to revolutionize problem-solving, enabling breakthroughs in areas like drug discovery
                and climate modeling. Renewable energy technologies, such as solar and wind power, will
                 become more efficient and widespread, supporting a sustainable planet. The Internet of 
                 Things (IoT) will seamlessly connect devices, creating smarter homes and cities. Space
                  exploration may lead to colonization efforts on other planets, expanding humanity's
                   horizons. With these innovations, the future holds exciting possibilities for
                    improving our world.
</p>
      </section>
    </div>
  );
}