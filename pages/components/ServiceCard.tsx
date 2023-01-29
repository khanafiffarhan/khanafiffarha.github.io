import { FunctionComponent } from "react"
import { Service } from "../../type"
import Image from 'next/image'
import image from '../../asset/img/javascript.png'


const ServiceCard:FunctionComponent<{service:Service}> = ({service:{
    id, title,description, icon
}}) => {

  return (
    <div className=" items-center p-2 space-x-4">
        {/* <Icon className="w-12 h-12 text-green"/> */}
        {/* <div>
            <h5 className="font-bold">{title}</h5>
            <p dangerouslySetInnerHTML={createMarkup()}/>
        </div> */}
        <div className='flex relative'>
          <div className="min-w-[45px]">
             <p className='text-[68px] top-[-23px] absolute md:text-[68px]'>{id}</p>
          </div>
          
          <div>
          <p className='text-[1.2rem] font-bold '>{title}</p>
          <p className='text-[13px] '>{description}</p>
          {/* <div className="w-[30px]">
          <img  src={`${title}`} alt="helo" height="100%" width="100%" />
          

          </div> */}
          <div className="flex">
          {
            icon.map((i,index)=>(
              <div key={index}  className="w-[30px]">
              {/* <img  src={`${i.link}`} alt="helo" height="100%" width="100%" /> */}
              {/* <img  src={image} alt="helo" height="100%" width="100%" /> */}
              {/* <Image src={'../../asset/img/javascript.png'} alt="helo" width={150} height={150} /> */}
              <Image src={i.link} alt="helo" width={150} height={150} />
              
    
              </div>
              
            ))

          }

          </div>
          
          

          </div>
          
        </div>
        
    </div>
  )
}

export default ServiceCard