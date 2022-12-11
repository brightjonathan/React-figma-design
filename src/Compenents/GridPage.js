import React from 'react'
import { arrow, graphone, i_icon, arrowdown, graphtwo } from '../Compenents/Icons';

const GridPage = () => {
  return (
    <div className='grid md:grid-cols-3 px-5 pt-5 text-center'>

    <div className='border py-8 rounded-xl mb-5 sm:m-2 shadow-xl'>
      <div className='flex justify-between px-5 flex-grow-0 flex-shrink flex-1'>
        
      <div className='flex flex-col justify-between'>
          <h2>Total customers </h2>
          <h2 className='text-3xl font-bold pt-4 pr-[-4vh]'> 2,420 </h2>


          <h2 className='relative flex p-[3px] px-2 pt-8'>  <span className='text-green-500' >{arrow}</span> 
          <span className='text-green-500 pr-1'>40%</span> vs month </h2> 
          
      </div>

      <div className='flex flex-col justify-between'>
          <h2 className=''>{i_icon}</h2>
          <h2 className=''> <span className='w-0 h-0'>{graphone} </span></h2>
      </div>

      </div>
    </div>

    <div className='border py-8 rounded-xl mb-5 sm:m-2 shadow-xl'>
      <div className='flex justify-between px-5 flex-grow-0 flex-shrink flex-1'>
        
      <div className='flex flex-col justify-between'>
          <h2> Members </h2>
          <h2 className='text-3xl font-bold pt-4 pr-[-4vh]'> 1,210 </h2>


          <h2 className='relative flex p-[3px] px-2 pt-8'>  <span className='text-red-500' >{arrowdown}</span> 
          <span className='text-red-500 pr-1'>10%</span> vs month </h2> 
          
      </div>

      <div className='flex flex-col justify-between'>
          <h2 className=''>{i_icon}</h2>
          <h2 className=''> <span className='w-0 h-0'> {graphtwo} </span></h2>
      </div>

      </div>
    </div>

    <div className='border py-8 rounded-xl mb-5  sm:m-2 shadow-xl'>
      <div className='flex justify-between px-5 flex-grow-0 flex-shrink flex-1'>
        
      <div className='flex flex-col justify-between'>
          <h2>Active now</h2>
          <h2 className='text-3xl font-bold pt-4 pr-[-4vh]'> 316 </h2>


          <h2 className='relative flex p-[3px] px-2 pt-8'>  <span className='text-green-500' >{arrow}</span> 
          <span className='text-green-500 pr-1'>20%</span> vs month </h2> 
          
      </div>

      <div className='flex flex-col justify-between'>
          <h2 className=''>{i_icon}</h2>
          <h2 className=''> <span className='w-0 h-0'> {graphone} </span> </h2> 
      </div>

      </div>
    </div>

  </div>
  )
}

export default GridPage
