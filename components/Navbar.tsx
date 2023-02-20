import Image from 'next/image'
import React, { useState } from 'react'
import homee from '../asset/img/home.svg'
import code from '../asset/img/code.svg'


const Navbar = ({fun,another,home}) => {

    const [style, setStyle] = useState({})
    const [done, setdone] = useState("13")
    
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			height: `${done}%`
		}
		
		setStyle(newStyle);
	}, 0);


    return (
        <div className='fixed hidden md:block top-50 right-[65px]  '>

            <div className="progress w-[40px] ">
			<div className="progress-done w-[40px]" style={style}>

			</div>
            <div className='flex absolute h-full justify-between w-[50]  top-0 flex-col'>
            <button  onClick={() => setdone("13")} >
            <li className="flex  items-center" >
               
                <div className="nav_img  relative w-[40px]" onClick={()=>fun(home)} >
                        
                        <Image src={homee} alt="helo" width={150} height={150} />
                    </div>

                </li>
                </button>
            <button  onClick={() => setdone("35")}>
            <li className="flex  items-center">

                        <div className="nav_img  relative w-[40px]" onClick={()=>fun(another)} >
                        <Image src={code} alt="helo" width={150} height={150} />
                    </div>
                   
                </li>
                </button>
            <button  onClick={() => setdone("57")}> <li className="flex items-center">
                    <div className="nav_img  relative w-[40px]">
                        <Image src={homee} alt="helo" width={150} height={150} />
                    </div>

                </li>
                </button>
            <button  onClick={() => setdone("78")}>
            <li className="flex  items-center">
                    <div className="nav_img  relative w-[40px]">
                        <Image src={homee} alt="helo" width={150} height={150} />
                    </div>

                </li></button>
            <button onClick={() => setdone("100")}>
            <li className="flex items-center">
                    <div className="nav_img  relative w-[40px]">
                        <Image src={homee} alt="helo" width={150} height={150} />
                    </div>

                </li></button>

     

            </div>
           
            
            
            
		</div>
        

            

        </div>

    )
}

export default Navbar