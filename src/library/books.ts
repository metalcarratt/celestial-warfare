import { Skill } from "./skills"

export enum Book {
    CRAFTING_LEVEL_1 = 'Crafting Level 1',
    HERBALISM_1 = 'Growing Herbs 1',
    APOTHECARY_1 = 'Making potions 1',
    VITALITY_PILL = 'Vitality Pill',
    SHIELD_BOOK = 'Crafting Shields',
    FORMATIONS_1 = 'Formations Level 1',
    BEAST_TAMING_1 = 'Beast Taming 1'
}

export interface BookType {
    name: Book,
    prerequisites: Skill[],
    skill: Skill
}

export const CraftingLevel1 : BookType = {
    name: Book.CRAFTING_LEVEL_1,
    prerequisites: [],
    skill: Skill.CRAFTING_1
}

export const HerbalismLevel1 : BookType = {
    name: Book.HERBALISM_1,
    prerequisites: [],
    skill: Skill.HERBALISM_1
}

export const ApothecaryLevel1 : BookType = {
    name: Book.APOTHECARY_1,
    prerequisites: [],
    skill: Skill.APOTHECARY_1
}

export const VitalityPillBook : BookType = {
    name: Book.VITALITY_PILL,
    prerequisites: [Skill.APOTHECARY_1],
    skill: Skill.VITALITY_PILL
}

export const ShieldBook : BookType = {
    name: Book.SHIELD_BOOK,
    prerequisites: [Skill.CRAFTING_1],
    skill: Skill.SHIELD
}

export const FormationsLevel1 : BookType = {
    name: Book.FORMATIONS_1,
    prerequisites: [],
    skill: Skill.FORMATIONS_1
}

export const BeastTamingLevel1 : BookType = {
    name: Book.BEAST_TAMING_1,
    prerequisites: [],
    skill: Skill.BEAST_TAMING_1
}

export const allBooks = [
    CraftingLevel1,
    HerbalismLevel1,
    ApothecaryLevel1,
    VitalityPillBook,
    ShieldBook,
    FormationsLevel1,
    BeastTamingLevel1
]