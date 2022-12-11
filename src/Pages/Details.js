import React from 'react'
import Details_input from '../Compenents/Details_input';
import Details_inputdemo from '../Compenents/Details_inputdemo';
import { avatar, share } from '../Compenents/Icons';

const Details = () => {
  return (
    <div className='mb-6'>
      <div className="slider__item slider__item-01 mt0"></div>


      <div className=' pl-[2%] sm:flex h-full w-screen  sm:justify-between gap-7 sm:flex-start sm:w-full sm:h-full'>

                <div>
                    <div className='absolute mt-[-50px] '>
                   <span className=' flex items-center p-[3px] border w-[160px] h-[160px] bg-[#f9f5ff] px-2 rounded-full'> <span className='p-[30%]'>{avatar}</span> </span>
                </div>
                    <h2 className='pt-[16vh] sm:text-3xl m-3 font-semibold'> Tofunmi sojimi </h2>
                    <h2 className='pl-[17px] text-[11px] sm:text-xl text-[#9fa5b3]'> tofunmi@untitledui.com </h2>
                </div>

                <div className=' flex m-4'> 
                    <div className='pr-4'>
                    <button className='relative flex items-center border bg-[#ffffff] sm:p-[6px] px-2 rounded'> <span className='pr-4'>{share} </span> Share </button> 
                    </div>
                    <div>
                    <button className='relative flex items-center bg-[#7f56d9] p-[2px] sm:p-[6px] px-2 sm:px-5 rounded'> View profile </button>
                    </div>
                </div>
            </div>

            <Details_input/>

            <hr className='mt-7'/>
          <div className='mt-2 sm:mt-7'> 
         <Details_inputdemo/>
         <div className='mt-7'/>
         </div>
    </div> 
  )
}

export default Details;


