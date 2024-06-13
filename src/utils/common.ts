import {
    SiCypress, SiFirebase,
    SiJavascript,
    SiJest,
    SiMongodb,
    SiPostgresql,
    SiPostman,
    SiRedux,
    SiSwagger,
    SiTypescript
} from "react-icons/si";
import {FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaJava, FaJira, FaNodeJs, FaReact} from "react-icons/fa";
import {BsFiletypeScss} from "react-icons/bs";
import {ISkillIcon, ISkillItem} from "./types";

const LANGUAGE = 'language';
export const getLangFromStorage = () => localStorage.getItem(LANGUAGE);

export const setLangInStorage = (lang: string) => localStorage.setItem(LANGUAGE, lang);

export const languages = ['English', 'Hebrew']

export const skills2: ISkillItem[] = [
    {
        area: "Programming languages",
        skills: ["JavaScript", "TypeScript", "Node.js", "Java"]
    },
    {
        area: "Web",
        skills: ["React", "Redux", "Context API", "SCSS/SASS", "CSS Modules",
            "BEM", "Adaptive Layout", "Tailwind CSS", "Bootstrap", "Figma"]
    },
    {
        area: "Technologies and frameworks",
        skills: ["Next.js", "Express.js", "OOP", "Multithreading", "Spring", "SpringBoot", "Spring Data JPA", "Maven", "Lombok", "Jackson",
            "JSON"]
    },
    {
        area: "Testing and API development",
        skills: ["Rest API", "WebSocket", "Postman", "Swagger", "Jest", "Cypress"]
    },
    {
        area: "Databases",
        skills: ["Postgresql", "MongoDb"]
    },
    {
        area: "IDE/Tools",
        skills: ["WebStorm", "VSCode", "Eclipse", "Jira", "Git", "Firebase"]
    },
    {
        area: "OS",
        skills: ["Mac OS", "Windows"]
    }

]
export const skills: ISkillIcon[] = [
    {
        name: "JavaScript",
        color: "rgba(255, 213, 0, .5)",
        icon: SiJavascript
    },
    {
        name: "TypeScript",
        color: "aqua",
        icon: SiTypescript
    },
    {
        name: "Java",
        color: "darkOrange",
        icon: FaJava
    },
    {
        name: "Node JS",
        color: "springGreen",
        icon: FaNodeJs
    },
    {
        name: "HTML",
        color: "red",
        icon: FaHtml5
    },
    {
        name: "CSS",
        color: "deepSkyBlue",
        icon: FaCss3Alt
    },
    {
        name: "SCSS",
        color: "indianRed",
        icon: BsFiletypeScss
    },
    {
        name: "Figma",
        color: "white",
        icon: FaFigma
    },
    {
        name: "Bootstrap",
        color: "blueViolet",
        icon: FaBootstrap
    },
    {
        name: "React",
        color: "aqua",
        icon: FaReact
    },
    {
        name: "Redux",
        color: "darkOrchid",
        icon: SiRedux
    },
    {
        name: "Postman",
        color: "darkOrange",
        icon: SiPostman
    },
    {
        name: "Swagger",
        color: "limeGreen",
        icon: SiSwagger
    },
    {
        name: "PostgreSql",
        color: "SteelBlue",
        icon: SiPostgresql
    },
    {
        name: "Mongo DB",
        color: "LimeGreen",
        icon: SiMongodb
    },
    {
        name: "Jest",
        color: "indianRed",
        icon: SiJest
    },
    {
        name: "Cypress",
        color: "seagreen",
        icon: SiCypress
    },
    {
        name: "GitHub",
        color: "white",
        icon: FaGithub
    },
    {
        name: "Jira",
        color: "royalblue",
        icon: FaJira
    },
    {
        name: "Firebase",
        color: "gold",
        icon: SiFirebase
    },
];
const stellarTools = ['Typescript', 'JavaScript', 'React', 'Redux ToolKit', 'WebSocket', 'Jest', 'Cypress', 'GitHub'];
export const stellarProject = {
    header: "Stellar Burger",
    tools: stellarTools
};
const tennisTools = ['Typescript', 'JavaScript', 'React', 'Redux ToolKit', "React Hook Form", "Yup", "Adaptive Layout", "Firebase", "i18next", 'GitHub'];
export const tennisProject = {
    header: "Tennis League",
    tools: tennisTools,
}
const shopTools = ['Typescript', 'JavaScript', 'React', 'Redux ToolKit', "React Hook Form", "Adaptive Layout", "Postman", "Clean Architecture", 'GitHub'];
export const shopProject = {
    header: "Furniture Shop 3legant",
    tools: shopTools,
}
const promoTools = ['Typescript', 'JavaScript', 'React', "i18next", "Adaptive Layout", 'GitHub']
export const promoProject = {
    header: "Personal Web Site",
    tools: promoTools,
}