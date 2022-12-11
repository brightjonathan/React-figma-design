import React from 'react'
import about from '../Assest/Img/testimonials-3.jpg';
import { cloud } from './Icons';

const Details_input = () => {
  return (
    
    <div className=' mt-[15vh] pl-[2%] sm:flex h-full w-screen  sm:justify-between gap-7 sm:flex-start sm:w-full sm:h-full'>

    <div className=''>
        <h2 className='font-bold text-xl sm:text-xl text-[#344054]'> Personal info </h2>
        <h2 className='mt-1 text-[#9fa5b3] text-[10px] sm:text-[12px]'> Update your photo and personal details. </h2> 
    </div>

    {/* first components  */}

    <div className='sm:mr-[10vh] mt-3'> 
      <div className='max-w-[800px] m-auto mx-4 '>
      <div className='bg-[#F5F5F5] w-[100%] sm:mr-[20vh] border px-10 py-8 rounded-lg text-white'>

       <form>
       <div className='grid md:grid-cols-2 md:gap-8 '>
                
        <div className='my-4'>
          <label className='text-black'> Name </label>
          <div className='my-2 w-full relative'>
           <input 
             className='w-[100%] sm:w-full p-2 border text-black border-gray-400 bg-transparent rounded-l'
             type="text" 
             placeholder='Enter your Name' 
             name='name'
           />
         </div>
       </div>

       
       <div className='md:my-4'>
         <label className='text-black' >Last name</label>
         <div className='my-2 w-full relative '>
           <input
             className='w-[100%] sm:w-full text-black p-2 border border-gray-400 bg-transparent rounded-lg' 
             type="text" 
             placeholder='Enter your last name' 
             name='email'

           />
           
         </div>
       </div>            
     </div>

     <div >
     <label className='text-black' >Last name</label>
     <input type='email' placeholder='email' className='w-full my-4 md:my-2 p-3 border bg-[#F5F5F5] text-black rounded-lg font-semibold'/>
     </div>

     <div className='pl-[2%] sm:flex h-full sm:justify-between gap-7 sm:flex-start sm:w-full sm:h-full'>

    <div>
      <img src={about} alt='images' className=' w-[90px] h-[90px] rounded-full '/>
    </div>

    <div>
        <div className='text-[#F5F5F5] mt-3  w-[100%] sm:mr-[50vh] h-[20vh] border px-10 py-8 rounded-lg '>
            <div className='text-black text-center '>
             <h2 className='pl-[45%]'> {cloud} </h2>
             <h2 className='mt-3 text-[10px] sm:text-[15px]'><span className='text-[#7f56d9] '>click to upload </span> or drag and drop</h2>
             <h2 className='mt-3 text-[9px] sm:text-[15px]'>SVG, PNG, JPG, or GIF ( max, 800 * 400)</h2>
            </div>
        </div>
    </div>

     </div>

     <div className='pl-[2%] sm:flex h-full sm:justify-between gap-7 sm:flex-start sm:w-full sm:h-full'>
      
      <div></div>

      <div className='flex mt-9 '>
      <div className='pr-4'>
      <button className=' items-center border bg-[#F5F5F5] p-[5px] px-2 rounded text-black '> cancel </button>
      </div>
      <button className='items-center border bg-[#7f56d9] p-[5px] px-2 rounded'> Save changes </button>
      
      </div>

     </div>
     
     </form>
      
        </div>

              
      </div>
    </div>

</div>
  )
}

export default Details_input;

