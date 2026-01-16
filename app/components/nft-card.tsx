import React from 'react'
import Image from 'next/image'
import equilibrium from '@/images/image-equilibrium.jpg'
import avatar from '@/images/image-avatar.png'
import eth from '@/images/icon-ethereum.svg'
import clock from '@/images/icon-clock.svg'
import view from '@/images/icon-view.svg'

function nftCard() {
  return (
    <div className='flex flex-col px-6 py-6 bg-[#15263F] w-87.5 h-149 rounded-[15px] '>
        <div className="relative group">
            <Image
                src={equilibrium}
                width={302}
                height={302}
                alt="Picture of the author"
                className="rounded-[8px]"
            />
            <Image
                src={view}
                width={48}
                height={48}
                alt="View icon"
                className="absolute inset-0 m-auto hidden group-hover:block z-10"
            />
            <div className="absolute inset-0 bg-[#00FFF8]/50 opacity-0 group-hover:opacity-100 rounded-[8px] transition-opacity" />
            </div>
        <div className='flex flex-col mt-6 mb-6 content-between gap-y-2'>
            <h1 className='font-semibold leading-tight text-[22px]'>Equilibrium #3429</h1>
            <h1 className='text-[#8BACD9] font-light text-[18px] leading-[145%] '>Our Equilibrium collection promotes balance and calm.</h1>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex gap-x-2 items-center'>
                <Image
                src={eth}
                width={18}
                height={12}
                alt="Picture of the author"
                
                /> 
                <h1 className='text-[#00FFF8] text-[22px] font-semibold leading-tight '>0.041 ETH</h1>
            </div>
            <div className='flex gap-x-2 items-center'>
                <Image
                src={clock}
                width={18}
                height={18}
                alt="Picture of the author"
               
                /> 
                <h1 className='text-[#8BACD9] text-[16px] font-semibold leading-tight'>3 days left</h1>
            </div>
            </div>
        <hr className="border-[#2E405A] mt-6"></hr>
        <div className='flex items-center mt-6 gap-x-4'>
            <Image
            src={avatar}
            width={33}
            height={33}
            alt="Picture of the author"
            className='rounded-[8px] '
            />
            <h1 className='text-[#8BACD9]  text-[18px] font-light leading-tight'>Creation of <span className='text-white'>Ed Brock</span></h1>
        </div>
    </div>
  )
}

export default nftCard