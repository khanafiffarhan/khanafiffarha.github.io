import ServiceCard from "../components/ServiceCard"
import { services } from "../data"
import Title from "../components/Title"



const Aboutme = ({ reff }:any) => {
  return (
    <div
        className="flex-grow p-4 dark:bg-black-100 "
        ref={reff}
        
      >
        {/* <a className="top-[-90px] block relative invisible" id={reff}></a> */}
        <Title title={"MY EXPERTIES"} />
        {/* <h4 className="my-3 text-xl font-semibold tracking-wide">What I&#39;m doing</h4> */}
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((item, index) => (
            <div key={index} className="col-span-2 p-2 rounded-lg dark:bg-black-200 md:col-span-1">
              <ServiceCard service={item} />
            </div>
          ))}
        </div>
      </div>
  )
}

export default Aboutme