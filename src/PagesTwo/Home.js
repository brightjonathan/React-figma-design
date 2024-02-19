import { useState, useEffect } from 'react';
import {Link,  useNavigate } from 'react-router-dom';
import { getDocs, collection, deleteDoc, doc, onSnapshot, } from 'firebase/firestore';
import { auth, db } from '../Firebase-config';
import { toast } from "react-toastify";
import Skeleton from 'react-loading-skeleton';
import GridPage from '../Compenents/GridPage';

const Home = ( { isAuth } ) => {

  
  const [Birth, setBirth] = useState([]);
  const [isloading, setisloading] = useState(true);
  const navigate = useNavigate();

  
  useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);


  
  useEffect(()=>{
      const getBlogs = onSnapshot(
        collection(db, 'BirthData'),
        (snapshot) =>{
          let list = []
          snapshot.docs.forEach((doc)=>{
            list.push({id: doc.id, ...doc.data()})
          });
          setBirth(list)
          setisloading(false)
        }, (err)=>{
          console.log(err)
        }
      )

      return ()=>{
        getBlogs();
      }

  },[])


  //delete functionality
  const Birth_delete = async (id)=>{
    if (window.confirm('ARE YOU SURE YOU WANT TO DELETE THIS ARTICLE ?')){
      try {
        const postDoc = doc(db, 'BirthData', id)
        await deleteDoc(postDoc)
        toast.success('deleted successfully')
        //navigate('/post') 
      } catch (err) {
        console.log(err)
      }
    }
    
  };


  return (
    <div className='sm:mt-[3vh] '>
      <GridPage />

      <>
    
    <h2  className='ml-8 text-2xl font-semibold mt-2'> All Birth Registration details </h2>
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 0 lg:grid-cols-2 gap-x-6 gap-y-16 px-4 pt-10 sm:pt-10 text-black'>
       {Birth?.map((item)=>{
        return(
          <div key={item.id} >
            <div className='p-4 rounded-lg shadow-2xl mb-9 bg-white hover:bg-transparent hover:bg-slate-300 duration-500 '>
            <div>
            <h3 className=' pt-4 text-[15px] text-black pb-2 font-bold' > {`${item?.childs_name}'s`} Birth details </h3>
            <h1 className='text-[#ed0518] text-[15px]' > <span className='font-bold text-black'> username :</span> {item?.User.name || <Skeleton/> } </h1>
            <h1 className='text-[#ed0518] text-[15px]' > <span className='font-bold text-black'> User Email :</span> {item?.User.email || <Skeleton/> }kg </h1>
            <h1 className='text-[#ed0518] text-[13px]'> <span className='font-bold text-black'> User Id :</span> {item?.User.id || <Skeleton/> }kg </h1>

               <h1 className='mt-4'> <span className='font-bold text-black'> Weight :</span> {item?.weight || <Skeleton/> }kg </h1>
               <h1> <span className='font-bold text-black'> Date of Birth : </span> {item?.Date_of_Birth || <Skeleton/>} </h1>
               <h1> <span className='font-bold text-black'> Phone Number :</span> {item?.Phone_Number || <Skeleton/>} </h1>
               <h1> <span className='font-bold text-black'> Time of Birth: </span> {item?.Time_of_Birth || <Skeleton/>}</h1>
               <h1> <span className='font-bold text-black'> State of origin: </span> {item?.State_of_origin || <Skeleton/>}</h1> 
               <h1> <span className='font-bold text-black'> State of origin: </span> {item?.city} </h1> 

               <div className='mt-4'>
              <Link to={`/birth_detail/${item.id}`} > <button className='mr-4 pr-2 bg-slate-900 text-center p-1 rounded-lg shadow-2xl text-white' >Read more </button> </Link>
               {/* <button className='mr-4 pr-2 bg-slate-900 text-center p-1 rounded-lg shadow-2xl text-white' onClick={()=> { Birth_delete(item?.id)}} > Delete </button> */}
               <Link to={`/birth_update/${item.id}`}> <button className='mr-4 pr-2 bg-slate-900 text-center p-1 rounded-lg shadow-2xl text-white'>  Update </button> </Link>
               {
                isAuth && item.User.id === auth.currentUser.uid && (
                  <Link to='/certificate'><button className='mr-4 pr-2 mt-2 bg-slate-900 text-center p-1 rounded-lg shadow-2xl text-white'> Get certificate </button></Link>
                )
               }
               
            </div>

            </div>
            </div>
            
          </div>
        )
       })}
      </div>

    </>


    </div>
  )
}

export default Home;