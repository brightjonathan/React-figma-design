import React from 'react';
import DataPages from '../Compenents/DataPages';
import GridPage from '../Compenents/GridPage';
import { add, calender, filter, import_btn, search } from '../Compenents/Icons';

const Overview = () => {
  return (
    <div className='sm:mt-[3vh] '>

            <div className=' pl-[2%] sm:flex h-full w-screen  sm:justify-between gap-7 sm:flex-start sm:w-full sm:h-full'>

                <div>
                    <h2 className='font-bold text-xl sm:text-3xl text-[#101828]'> Welcome back, Tofunmi </h2>
                    <h2 className='mt-1 text-[#9fa5b3] sm:text-xl m-3'> track, manage, and forcast your customers and orders. </h2> 
                </div>

                <div className=' flex mt-2'> 
                    <div className='pr-4'>
                    <button className='relative flex items-center border bg-[#ffffff] p-[3px] px-2 rounded'> <span className='pr-4'>{import_btn} </span> Import </button> 
                    </div>
                    <div>
                    <button className='relative flex items-center bg-[#7f56d9] p-[3px] px-2 rounded'> <span className='pr-4 text-white'> {add} </span> Add</button>
                    </div>
                </div>
            </div>

            <GridPage/>

            <div className='sm:flex sm:flex-row sm:justify-between items-center'> 

        <div className='flex flex-row items-center p-7 w-5 h-5 mt-5'>
             <div className='relative flex items-center bg-[#ffffff] p-[3px] px-2 rounded-xl border '> 
             <span className='pr-4 text-black'> {search} </span> <input type='search' placeholder='Search for traders' className='w-[20vh] sm:w-[40vh] px-3 py-2 outline_two' />
             </div>
        </div> 
           


           <div className='flex mt-5'>
           
             <div className='pr-3'> 
             <h2 className='relative flex items-center border bg-[#ffffff] p-[3px] px-2 rounded sm:font-semibold'> <span className='pr-2'> {calender} </span> <span> <input type='date'/> </span></h2>
            </div> 

                 
             <div> 
             <h2 className='relative flex items-center border bg-[#ffffff] p-[3px] px-2 rounded sm:font-semibold'> <span className='pr-2'> {filter} </span> <span>Filters</span></h2>
            </div> 
           </div>

          </div> 

     <DataPages/>
      
    </div>
  )
}

export default Overview;
