import {IconType} from "react-icons";

export interface ISkillIcon {
    name: string
    color: string
    icon: IconType
}
export interface ISkillItem {
    area: string,
    skills: string[]
}