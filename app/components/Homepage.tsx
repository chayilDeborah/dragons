import Image from 'next/image'
import React from 'react';
import flag from '../assets/flag.svg';
import hatch from '../assets/hatch.png'

const Homepage = () => {
    return (
        <>
            <div className='flex justify-center '>
                <div className='lg:max-w-[1440px] w-full '>
                    <div className='flex'>
                        <div>
                        <Image src={flag} alt='flag' className='' />
                        </div>
                        <div className='mt-[205px] mr-[39px] '>
                            <div className='text-[64px] font-bold text-[#000000] leading-[81.92px] w-[578px]  '>
                                EXPERIENCE THE <span className='font-semibold'>DRAGONS EFFECT</span>
                            </div>
                            <div className='text-[16px] font-semibold text-[#000000] w-[572px] mb-[34px] '>Metatime is a digital art collection and global community artists,
                            creators, developers, entrepreneurs, athletes.</div>
                            <div className='flex space-x-[8px]'>
                                <button className='dis w-[212px] h-[48px] text-[16px] font-bold leading-[140%] text-[#FEFEFE] '>JOIN DISCORD</button>
                                <button className='twit w-[212px] h-[48px] text-[16px] font-bold leading-[140%] text-[#0C0C0C] '>FOLLOW TWITTER</button>
                            </div>
                        </div>
                        <div className='hatch '>
                        <Image src={hatch} alt='hatch' className='mt-[18px]' />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Homepage