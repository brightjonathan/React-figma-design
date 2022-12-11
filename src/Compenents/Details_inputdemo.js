import React from 'react';
import { bi, btn_icon, circle, hash_1, hash_2, i } from './Icons';


const Details_inputdemo = () => {
  return (
    <div className=' sm:mt-[15vh] pl-[2%] sm:flex  h-full w-screen  sm:justify-between gap-7 sm:flex-start sm:w-full sm:h-full'>

    <div className=''>
        <h2 className='font-bold text-xl sm:text-4xl text-[#344054]'> Profile </h2>
        <h2 className='mt-1 text-[#9fa5b3] text-[10px] sm:text-[15px]'> Update your profile and bio. </h2> 
    </div>

    {/* first components  */}

    <div className='sm:mr-[10vh] mt-3'> 
      <div className='max-w-[800px] m-auto mx-4 '>
      <div className='bg-[#F5F5F5] w-[100%] sm:mr-[20vh] border px-10 py-8 rounded-lg text-white'>

       <form>
       <div className='grid md:grid-cols-1 md:gap-8 '>

        <div className='flex text-black'>
            <div className='pr-2'>{btn_icon}</div>
            <div>
            <h2 className='text-black '>Available for projects</h2>
            <h2 className='text-black text-[10px] sm:text-[13px]'>i'm open and available for freelence work </h2>
            </div>
            

        </div>
        
        <div className=''>
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

       
       <div className='sm:mt-[-20px]'>
         <label className='text-black' > website </label>
         <div className='my-2 w-full relative '>
           <input
             className='w-[100%] sm:w-full text-black p-2 border border-gray-400 bg-transparent rounded-lg' 
             type="text" 
             placeholder='Enter your website url' 
             name='email'
           />
         </div>
       </div> 

       <div className='sm:mt-[-20px]'>
         <label className='text-black' > Bio </label>
         <div className='my-2 w-full relative '>
           <textarea
             className='w-[100%] sm:w-full text-black p-2 border border-gray-400 bg-transparent rounded-lg' 
             placeholder="i'm a software developer based in Lagos, Nigeria. I specialise in website development, front-end and back-end development..." 
             name='text'
           />
           <h2 className='text-black'>275 characters left </h2>
         </div>
       </div>


       

     </div>


     <div className='pl-[2%] sm:flex h-full sm:justify-between gap-7 sm:flex-start sm:w-full sm:h-full'>

    <div>
      <input type='text' placeholder='Normal text' className=' w-full my-4 md:my-2 p-3 border bg-[#F5F5F5] text-black rounded-lg '/>
    </div>

    
    <div>
        <div className=' mt-[50px]'>

          <div className='flex text-black mt-[-5vh]'>
            <div className='pr-4'> {bi} </div>
            <div className='pr-4'> {i} </div>
            <div className='pr-4'> {circle} </div>
            <div className='pr-4'> {hash_1} </div>
            <div className='pr-4'> {hash_2} </div>   
         </div>
        </div>
    </div>

     </div>

     
     <div className='pt-4'>
     <label className='text-black' >Country</label>
     <input type='text' placeholder='United States' className='w-full my-4 md:my-2 p-3 border bg-[#F5F5F5] text-black rounded-lg '/>
     </div>

     <div >
     <label className='text-black' >Time Zone </label>
     <input type='email' placeholder='Pacific Standard Time (PST) UTC-08:00' className='w-full my-4 md:my-2 p-3 border bg-[#F5F5F5] text-black rounded-lg'/>
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

export default Details_inputdemo
