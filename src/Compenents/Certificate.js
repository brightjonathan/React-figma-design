import {useState, useEffect } from 'react';
import {auth, db } from '../Firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Certificate = ({isAuth}) => {

  const [cert, setcert] = useState([]);
  const navigate = useNavigate();
  

  //fetching the data using useEffect 
  useEffect(()=>{
    const getletter = onSnapshot(
      collection(db, 'BirthData'),
      (snapshot)=>{
        let list = []
        snapshot.docs.forEach((doc)=>{
          list.push({id: doc.id, ...doc.data()});
        });
        setcert(list);
        console.log(list)
      }
    )
    return ()=>{
      getletter();
    }
  },[]);

  
  useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <>
    {
      cert.map((doc)=>{
        return(
         <div className='' key={doc.id}>
          { isAuth && doc.User.id === auth.currentUser.uid && (
             <div className='mt-10 text-center lg:ml-[30vh] lg:mr-[30vh] mb-6 bdsytle rounded '>
              <h2 className='pt-[10px] text-3xl text-[#667467] font-semibold'>FEDERAL REPUBLIC OF NIGERIA</h2>
              <h2 className='text-xl text-[#667467]'>(National Population Commission)</h2>
             <h2 className='sm:text-5xl text-xl font-semibold pt-[5vh] text-[#A49587]'> Certificate Of Birth </h2>
             <h2 className='sm:mt-8 mt-2 sm:text-xl  font-semibold text-[#667467]'> This is to certify that </h2> 
             <h2 className='mt-3 sm:text-3xl text-xl font-semibold underline  text-[#667467] italic ' > {doc.childs_name} </h2>
             <h2 className='mt-2 text-[12px] sm:mt-3  sm:text-2xl font-semibold text-[#667467]'>was born on {doc.Date_of_Birth} at St. Joy Hospital, <br/> Owerri by Mr. and Mrs. { doc.Father_name } </h2>
             <h2 className='underline font-semibold pb-[20px] text-[15px] mt-2 text-[#667467]'> Cert.No.: {doc.id} </h2>
           </div>
          ) 

          }

         </div>
        )
      })
    }
    
    </>
    
  )
}

export default Certificate;


