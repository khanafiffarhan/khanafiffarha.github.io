import { IProject ,Iskill,Service } from "./type";
// import {RiComputerLine} from "react-icons/ri"
// import { FaServer } from "react-icons/fa";
// import { AiOutlineApi ,AiOutlineAntDesign } from "react-icons/ai";
// import { MdDeveloperMode } from "react-icons/md";
// import {BsCircleFill} from "react-icons/bs"
export const services:Service[] = [
  {
    
    id:"1",
    title: "Frontend",
    description:'I can build dynamic, flexible, user-friendly, SEO-friendly and scalible frontend. Also I build custom functions as per demand. For fronted developement my experties in Next Js framework with Typescript. For state management, I prefered Redux. ',
    icon: [{
      link:"asset/img/javascript.png",
      width: "50px"
    },
    {
      link:"asset/img/typescript.png",
      width: "50px"
    },
    {
      link:"asset/img/react.png",
      width: "50px"
    },
    {
      link:"asset/img/next.svg",
      width: "50px"
    },
    {
      link:"asset/img/redux.png",
      width: "50px"
    }],


  },
  {
    id:"2",
    title: "Backend",
    description:'I can build powerfull backend. For builing backend I prefered node js package Express Js. For Database management I preferred MongoDB',
    icon: [{
      link:"asset/img/node.png",
      width: "50px"
    },
    {
      link:"asset/img/express.png",
      width: "50px"
    },
    {
      link:"asset/img/graphql.svg",
      width: "50px"
    },
    {
      link:"asset/img/mongo.svg",
      width: "50px"
    }],
  },
  {
    id:"3",
    title: "Phone App",
    description:'I can build user-friendly cross platform supported phone-apps.',
    icon: [{
      link:"asset/img/node.png",
      width: "50px"
    },
    {
      link:"asset/img/express.png",
      width: "50px"
    },
    {
      link:"asset/img/mongo.svg",
      width: "50px"
    }],}

]


export const languages:Iskill[] = [
  {
    name:"HTML",
    level:"85%",
    Icon:'BsCircleFill',
  },
  {
    name:"CSS",
    level:"80%",
    Icon:'BsCircleFill',
  },
  {
    name:"Javascript",
    level:"45%",
    Icon:'BsCircleFill',
  },
  {
    name:"React Js",
    level:"70%",
    Icon:'BsCircleFill',
  },
  {
    name:"Node Js",
    level:"40%",
    Icon:'BsCircleFill',
  },
  {
    name:"Next Js",
    level:"40%",
    Icon:'BsCircleFill',
  },
  {
    name:"Tailwind CSS",
    level:"70%",
    Icon:'BsCircleFill',
  },
]
export const tools: Iskill[] = [
 
  {
     Icon: 'BsCircleFill',
     name: 'Photoshop',
     level: '45%',
  },
  {
     Icon: 'BsCircleFill',
     name: 'Illustrator',
     level: '40%',
  },
  {
     Icon: 'BsCircleFill',
     name: 'Framer',
     level: '45%',
  },
]
export const projects: IProject[] = [
  { 
    id:1,
    name: "Personal Blog site",
    description:
      "In this app a person can post his Articles, Books , Videos. It is a CMS app that why a person can handel all those things by him self easily. Me and my Friend Khan Afif Farhan Develop this App.",
    image_path: "/images/ahmadullah-saidpury.png",
    deployed_url: "https://ahmadullahsaidpury.netlify.app/",
    github_url: "https://github.com/muhammadHasnine",
    category: ["react","node","mongo","express"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux"],
    key:4
  },
  { 
    id:2,
    name: "Personal Blog site",
    description:
      "In this app a person can post his Articles, Books , Videos. It is a CMS app that why a person can handel all those things by him self easily. Me and my Friend Khan Afif Farhan Develop this App.",
    image_path: "/images/ahmadullah-saidpury.png",
    deployed_url: "https://ahmadullahsaidpury.netlify.app/",
    github_url: "https://github.com/muhammadHasnine",
    category: ["react","node","mongo","express"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux"],
    key:5
  },
  { 
    id:3,
    name: "Personal Blog site",
    description:
      "In this app a person can post his Articles, Books , Videos. It is a CMS app that why a person can handel all those things by him self easily. Me and my Friend Khan Afif Farhan Develop this App.",
    image_path: "/images/ahmadullah-saidpury.png",
    deployed_url: "https://ahmadullahsaidpury.netlify.app/",
    github_url: "https://github.com/muhammadHasnine",
    category: ["react","node","mongo","express"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux"],
    key:622
  },
  { 
    id:4,
    name: "Personal Blog site",
    description:
      "In this app a person can post his Articles, Books , Videos. It is a CMS app that why a person can handel all those things by him self easily. Me and my Friend Khan Afif Farhan Develop this App.",
    image_path: "/images/ahmadullah-saidpury.png",
    deployed_url: "https://ahmadullahsaidpury.netlify.app/",
    github_url: "https://github.com/muhammadHasnine",
    category: ["react","node","mongo","express"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux"],
    key:61
  },
  { 
    id:5,
    name: "Personal Blog site",
    description:
      "In this app a person can post his Articles, Books , Videos. It is a CMS app that why a person can handel all those things by him self easily. Me and my Friend Khan Afif Farhan Develop this App.",
    image_path: "/images/ahmadullah-saidpury.png",
    deployed_url: "https://ahmadullahsaidpury.netlify.app/",
    github_url: "https://github.com/muhammadHasnine",
    category: ["react","node","mongo","express"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux"],
    key:62
  },
  { 
    id:6,
    name: "Personal Blog site",
    description:
      "In this app a person can post his Articles, Books , Videos. It is a CMS app that why a  ",
    image_path: "/images/ahmadullah-saidpury.png",
    deployed_url: "https://ahmadullahsaidpury.netlify.app/",
    github_url: "https://github.com/muhammadHasnine",
    category: ["react","node","mongo","express"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux"],
    key:69
  },
  { 
    id:7,
    name: "Personal Blog site",
    description:
      "In this app a person can post his Articles, Books , Videos. It is a CMS app that why a  ",
    image_path: "/images/ahmadullah-saidpury.png",
    deployed_url: "https://ahmadullahsaidpury.netlify.app/",
    github_url: "https://github.com/muhammadHasnine",
    category: ["react","node","mongo","express"],
    key_techs: [ "Mongo DB","Express","React js", "Node js","Redux"],
    key:68
  },
];