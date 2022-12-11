import {useState} from 'react';
import { NavLink } from 'react-router-dom'; 
import { analytics, burly, dashboard, overview, people, product, producttwo, profile, setting } from './Icons';
import about from '../Assest/Img/about_us.jpg'

const NarBar = ({children}) => {

    const [open, setopen] = useState(true);

    const Menus=[
        {
            path:"/",
            name:"Dashboard",
            icon: dashboard
        },
        {
            path:"/overview",
            name:"Overview",
            icon: overview
        },
        {
            path:"/my_details",
            name:"my details",
            icon: profile
        },
        {
            path:"#",
            name:"analytics",
            icon: analytics,
        },
        {
            path:"#",
            name:"Product",
            icon:product,
        },
        {
            path:"#",
            name:"checked",
            icon: producttwo
        },
    
        {
            path:"#",
            icon: burly,
            gap: true
        },

        {
            path:"#",
            name:"setting",
            icon: setting,
        },
        
    ];
    

  return (
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} duration-500 w-72  h-[100vh] bg-[#6941c6] relative `}>
      <img 
      src='https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/control.png' alt='logo' 
      className= {`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full ${!open && 'rotate-180'}`}
      onClick={()=> setopen(!open)}
      />
      <div className='flex gap-x-4 items-center m-6'>
       <img
       src='https://github.com/Sridhar-C-25/sidebar_reactTailwind/blob/main/src/assets/logo.png?raw=true'
       alt='logo'
       className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
       />
       <h1  className={`text-white origin-left font-medium text-xl duration-200 ${ !open && "scale-0" }`}> Untitled Ul </h1>
      </div>

      <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <NavLink
            to={Menu.path}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-[#7f56d9] text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-[12vh]" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
               <h2 className='ml-4'> {Menu.icon} </h2> 
              <span className={`${!open && "hidden"} origin-left duration-200`} >
                {Menu.name}
              </span>
            </NavLink>
          ))}

          <div className=' ml-4  mt-3 items-center '>
            <div className='pr-2'><img src={about} alt='images' className=' w-12 h-12 rounded-full'/></div>
            {/* <h4>Tofunmi sojimi </h4> */}
          </div>

        </ul>
      </div>

      <div  className=' flex-start w-[100%] h-screen'>
        {children}
      </div>
    </div>
  )
}

export default NarBar;


