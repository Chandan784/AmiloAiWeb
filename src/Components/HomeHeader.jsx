import React from 'react';

const HomeHeader = () => {
  return (
    <div className='bg-blue-700'>
      <div className='max-w-[1240px] mx-auto px-4 xl:px-0 py-14 md:py-16 lg:py-20'>
        <div className="flex flex-col md:flex-row gap-6 items-center ">
          {/* Text Content */}
          <div className="content w-full md:w-1/2 text-white text-center md:text-left">
            <h1 className="text-3xl !leading-[115%] md:text-4xl lg:text-5xl xl:text-[54px] font-extrabold max-w-[540px] pb-4">
              ARE YOU LOOKING FOR <span className='text-yellow-500'>SUPERIOR TECH</span> IT SUPPORT?
            </h1>
            <p className="py-2 text-sm md:text-base max-w-[540px]">
              We provide <strong>affordable</strong>, highly responsive <strong>IT Support</strong> and Services for small and medium businesses.
            </p>
            <button className="border-2 hover:bg-yellow-500 duration-300 hover:text-black border-yellow-500 p-2 md:p-4 mt-4">GET STARTED NOW</button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src="./src/assets/images/home/generic-1.jpg"
              alt="main image"
              className="sm:w-3/4 w-full md:w-full max-w-sm md:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
