import { Icon } from "@fortawesome/fontawesome-svg-core";

// import { IconType } from "react-icons";
export interface Service {
    id:string,
    title:string,
    description:string,
    icon: {
        link:Object,
        width:string
    }[],
}

export interface Iskill {
    name:string,
    level:string,
    Icon:string,
}


export interface IProject {
    id:number;
    name:string;
    description:string;
    image_path:string;
    deployed_url:string;
    github_url:string;
    category:Category[];
    key_techs:string[];
    key: React.Key;
}

export interface SocialIcon{
    
    iconName: any;
    s_link: string;
    
}
export type Category = "react" | "node" | "express" | "django" | "mongo"