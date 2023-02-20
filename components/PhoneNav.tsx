import React from 'react'
import homee from '../asset/img/home.svg'
import code from '../asset/img/code.svg'
import Image from 'next/image'

const PhoneNav = ({fun,another,home}) => {
  return (
    <div>
        <div className="phone_nav md::hidden bg-white border-t-2 border-black">
          <div className="nav_imgs h-full flex items-center justify-between ">
            <div className="nav1" >
            <Image src={homee} alt="helo" width={50} height={50} />
            </div>
            <div className="nav2" onClick={()=>fun(another)}>
            <Image src={code} alt="helo" width={50} height={50} />
            </div>
            <div className="nav3">
            <Image src={homee} alt="helo" width={50} height={50} />
            </div>
            <div className="nav4">
            <Image src={homee} alt="helo" width={50} height={50} />
            </div>
            <div className="nav4">
            <Image src={homee} alt="helo" width={50} height={50} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default PhoneNav