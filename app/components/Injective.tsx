import Image from 'next/image'
import React from 'react';
import point from '../assets/point.svg';
import greenhat from '../assets/greenhat.png'

const Injective = () => {
  return (
    <>
    <div className='flex justify-center mt-[150px] '>
        <div>
            <div className='inj flex pl-[30px]  '>
                <div className='mt-[41px]'>
                    <div className='text-[40px] font-bold leading-[56px] '>About Injective Dragons</div>
                    <div className='text-[16px] leading-[22.4px] w-[571px] mb-[60px] '>Dragons goes beyond being a digital art; it is a welcoming community where crypto enthusiasts and traders come together to share knowledge and learn. We use the Injective blockchain to connect people from diverse backgrounds who are interested in trading and growing together.</div>
                    <div className='text-[40px] font-bold leading-[56px] mb-[11px] '>Our Objectives:</div>
                    <div >
                        <div className='flex'>
                            <Image src={point} alt='pointer' className='mr-[9px]' />
                            <div className='text-[16px] font-bold leading-[15.68px] w-[312px] '>Establish a strong and engaged community of Dragon pass holders.</div>
                        </div>
                        <div className='flex mt-[20px] '>
                            <Image src={point} alt='pointer' className='mr-[9px]' />
                            <div className='text-[16px] font-bold leading-[15.68px] w-[312px] '>Provide valuable educational resources and insights for trading.</div>
                        </div>
                        <div className='flex mt-[20px] '>
                            <Image src={point} alt='pointer' className='mr-[9px]' />
                            <div className='text-[16px] font-bold leading-[15.68px] w-[312px] '>Facilitate networking and collaboration among crypto enthusiasts.</div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={greenhat} alt='hatch' className='' />
                </div>

            </div>
        </div>

    </div>
    </>
  )
}

export default Injective