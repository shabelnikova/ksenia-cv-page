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
import {ISkillIcon} from "./types";

const LANGUAGE = 'language';
export const getLangFromStorage = () => localStorage.getItem(LANGUAGE);

export const setLangInStorage = (lang: string) => localStorage.setItem(LANGUAGE, lang);

export const languages = ['En', 'He']

export const skills: ISkillIcon[] = [
    {
        name: "JavaScript",
        color: "yellow",
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
]