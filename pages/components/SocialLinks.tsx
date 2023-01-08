import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "../../type";
// import { useSelector, useDispatch } from "react-redux";
// import { fetch_home_datas } from "../redux/actions/Actions";

const SocialLinks = () => {
    // const home_data = useSelector((state) => state.home_reducers.home);
    // console.log(home_data);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(fetch_home_datas());
    //   // stting(false);
    // }, []);



    const socialLink_data:SocialIcon[]= [
      {
        iconName: 'github',
        s_link: 'helloloo'
      },
      {
        iconName: 'linkedin',
        s_link: 'helloloo'
      },
      {
        iconName: 'telegram',
        s_link: 'helloloo'
      },

    ]

  return (
    <>
        {/* {socialLink_data.map((item, key)=>{ */}
            {/* return ( */}
                <div  className="flex justify-center w-fit h-fit gap-3 mt-3 icons p-[4px] rounded-[50px] bg-[#ffffff] shadow-[2px_1px_1px_1px_#ebebeb]">
                {socialLink_data.map((item,key) => {
                  return (
                    
                    <a
                      href={item.s_link}
                      className="text-[black] hover:text-[#585858] text-[25px] h-[30px] flex justify-between"
                      rel="noreferrer"
                      target="_blank"
                      key={key}
                    >
                 
                      <FontAwesomeIcon  icon={["fab", item.iconName]} /> 
                    
                   </a>
                  );
                })}
              </div>
            
    </>
  )
}

export default SocialLinks