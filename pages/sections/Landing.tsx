import Image from 'next/image'
import SocialLinks from '../components/SocialLinks'
import image from '../../asset/img/Farhan.svg'
const Landing = ({reff}:any) => {
  return (
    // border-[2px] border-black
    <div className='grid grid-cols-12 landing_sec col-[1_/_span_12]  relative mt-[15px] p-[15px_25px_15px_25px] md:p-[15px_0px_15px_25px] '  ref={reff} >
      {/* <a className="top-[-90px] block relative invisible" id='landing'></a> */}

      {/* h-[calc(100vh-70px)] */}
      <div className='absolute hidden md:block h-[200px] w-[2px] bg-[#f3f3f3] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[50px] '>

      </div>
    {/* <div>
       <Image src="/asset/img/logo.svg" alt="helo" width={130} height={130} />
    </div> */}
      

      <div className=" md:col-end-[span_7] col-[1_/_span_12] md:col-[0_/_span_12]  left_col">
        <h1 className='text-[3rem] md:text-[4rem] font-[geomatrix]'>Hi, <br/>  Farhan.</h1>
        <div className="botton_text font-[codepro] text-[0.8rem] md:w-[70%] mt-[12px] ">
        <p> a full-stack web developer, who loves to build user-friendly websites, web app and mobile apps. My preferred tools are Javascript (typescript), React Native and Next.js. </p>
      </div>
      <div className='flex mt-10'>
        <div className='flex'>
          <p className='text-[35px] md:text-[50px]'>5</p>
          <p className='text-[13px] mt-[18px] ml-[10px]'>YEARS <br/> EXPERIENCE</p>
        </div>
        <div className='flex ml-7 md:ml-[42px]'>
          <p className='text-[28px] md:text-[35px] font-[400] mt-[10px]'>FOUNDER</p>
          <p className='text-[13px] mt-[18px] ml-[10px]'>FONOON CODES <br/> An app dev Co.</p>
        </div>


      </div>
        
      </div>
      <div className="md:col-end-[span_5] col-[1_/_span_12] md:col-auto right_col row-end-[1] md:row-end-[auto]">  
         
      <div className="relative flex flex-col items-center justify-center h_img_wrapper mt-[18px]">
                  <div className=" flex justify-center items-center h_img_wrapper  border-[2px] border-black bg-[#ffffff] h-[185px] w-[185px]   relative rounded-[50%] rotate-[-18deg] "> 
                  {/* shadow-[#e8e8e8_0px_2px_2px_0px] */}
                    {/* <img
                      className=" rounded-[50%] h-[130px] w-[130px] "
                      src={imgurl}
                      alt=""
                    /> */}
                      {/* <Image src="/asset/img/profile.png" alt="My photo" className='rounded-[50%] h-[130px] w-[130px]' width={130} height={130} />  */}
                      <Image src={image} alt="helo" width={150} height={150} />
                      
                      
                  </div>
                  <SocialLinks />
                  <p className='bg-black text-white px-5 rounded mt-5 font-[geomatrix]'>Full-stack developer</p>
                </div>
                
        
      </div>

      {/* <div className="botton_text col-[1_/_span_12]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti distinctio fuga cum blanditiis molestiae. Incidunt inventore, </p>
      </div> */}
      
        </div>
  )
}

export default Landing