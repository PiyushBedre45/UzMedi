import React from 'react'
import rafiki from '../../../public/Images/rafiki.png'
import ServicesBgImg from '../../../public/Images/ServicesBgImg.png'
import ServicesImg from '../../../public/Images/ServiceImg.png'
import Image from 'next/image'

const page = () => {
    return (
        <>
            {/* BgImage */}
            <div className='relative  w-full h-[300px] sm:h-[380px] border border-black'>
                {/* Bg Image */}
                <div className='absolute h-[400px] w-full'>
                    <Image src={ServicesImg} alt='ServicesImg' className='w-full object-cover block sm:hidden h-[300px]' />
                    <Image src={ServicesBgImg} alt='ServicesBgImg' className='w-full h-full object-cover hidden sm:block sm:h-[380px]' />
                    <div className="h-[300px] sm:h-[380px] w-full  absolute top-0 bg-black opacity-60"></div>
                </div>
                <div className='absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold'>
                    <p>Home /<span className='text-[#16A8AF]'> Services</span></p>
                </div>
                {/* Heading */}
                <div className='text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5  flex flex-col gap-1'>
                    <h1 className="text-4xl sm:text-5xl font-semibold mt-3  w-full">
                        Services
                    </h1>
                </div>
            </div>
            {/* Services Card */}


            <div className='w-full bg-[#ebfeff] p-10 flex flex-col gap-5 sm:gap-8 items-center justify-center'>
                <div className='w-[90%] mx-auto  text-center'>
                    <h1 className='text-[24px] sm:text-[40px]  text-[#16A8AF] font-semibold'>Services At Uzbikstan Education</h1>
                </div>
                <div className='w-[90%] mx-auto flex flex-wrap justify-center gap-6 items-center '>

                    <div className='w-[311px] h-[302px] flex items-center justify-center flex-col gap-4 shadow-md rounded-xl bg-white'>
                        <div className='w-[205] h-[170px] '>
                            <Image src={rafiki} alt='rafiki' className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 '>
                            <h2 className=' w-[80%] text-center'>Admission</h2>
                            <h2 className=' w-[80%] text-center'>Get the guaranteed admission to top university.</h2>
                        </div>
                    </div>

                    <div className='w-[311px] h-[302px] flex items-center justify-center flex-col gap-4 shadow-md rounded-xl bg-white'>
                        <div className='w-[205] h-[170px] '>
                            <Image src={rafiki} alt='rafiki' className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 '>
                            <h2 className=' w-[80%] text-center'>Admission</h2>
                            <h2 className=' w-[80%] text-center'>Get the guaranteed admission to top university.</h2>
                        </div>
                    </div>

                    <div className='w-[311px] h-[302px] flex items-center justify-center flex-col gap-4 shadow-md rounded-xl bg-white'>
                        <div className='w-[205] h-[170px] '>
                            <Image src={rafiki} alt='rafiki' className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 '>
                            <h2 className=' w-[80%] text-center'>Admission</h2>
                            <h2 className=' w-[80%] text-center'>Get the guaranteed admission to top university.</h2>
                        </div>
                    </div>
                    <div className='w-[311px] h-[302px] flex items-center justify-center flex-col gap-4 shadow-md rounded-xl bg-white'>
                        <div className='w-[205] h-[170px] '>
                            <Image src={rafiki} alt='rafiki' className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 '>
                            <h2 className=' w-[80%] text-center'>Admission</h2>
                            <h2 className=' w-[80%] text-center'>Get the guaranteed admission to top university.</h2>
                        </div>
                    </div>
                    <div className='w-[311px] h-[302px] flex items-center justify-center flex-col gap-4 shadow-md rounded-xl bg-white'>
                        <div className='w-[205] h-[170px] '>
                            <Image src={rafiki} alt='rafiki' className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 '>
                            <h2 className=' w-[80%] text-center'>Admission</h2>
                            <h2 className=' w-[80%] text-center'>Get the guaranteed admission to top university.</h2>
                        </div>
                    </div>
                    <div className='w-[311px] h-[302px] flex items-center justify-center flex-col gap-4 shadow-md rounded-xl bg-white'>
                        <div className='w-[205] h-[170px] '>
                            <Image src={rafiki} alt='rafiki' className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-2 '>
                            <h2 className=' w-[80%] text-center'>Admission</h2>
                            <h2 className=' w-[80%] text-center'>Get the guaranteed admission to top university.</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default page
