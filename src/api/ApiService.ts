import axios from 'axios';

export interface UserPropsRequest {
    UserName: string;
    Password: string;
    Email: string;
}

export interface UpdateHpRequest {
    currentHp: number,
    tempHp: number
}

export interface CharacterDto {
    CharacterID: string;
    CharacterName: string;
    CharacterRace: string;
    CharacterClass: string;
    CharacterLevel: number;
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
    bonStr: boolean;
    bonDex: boolean;
    bonCon: boolean;
    bonInt: boolean;
    bonWis: boolean;
    bonCha: boolean;
    Inspiration: boolean;
    ProficiencyBonus: number;
    Armor: number;
    Speed: number;
    CurrentHP: number;
    MaxHP: number;
    TempHP: number;
    Copper: number;
    Silver: number;
    Gold: number;
    Platinum: number;
    Languages: string;
    PersonalityTraits: string;
    Ideals: string;
    Bonds: string;
    Flaws: string;
    OtherTraits: string;
}

export interface AttackDto {
    AttackID: string;
    AttackName: string;
    AttackRange: number;
    DiceNumber: number;
    DiceType: number;
    DamageType: string;
}

export interface InventoryDto {
    ItemID: string;
    ItemName: string;
    ItemDescription: string;
    Quantity: number;
}

const api = axios.create({
    baseURL: "https://localhost:7207",
});

export const getPreviews = (UserId: string) => {
    return api.get(`/Character/GetPreviews/${UserId}`);
}

export const getCharacter = (CharacterId: string) => {
    return api.get(`/Character/Get/${CharacterId}`);
}

export const getInventory = (CharacterId: string) => {
    return api.get(`/InventoryItem/Get/${CharacterId}`);
}

export const getAttacksList = (CharacterID: string) => {
    return api.get(`/Attack/Get/${CharacterID}`);
}

export const getUser = (UserName: string) => {
    return api.get(`/User/Get/${UserName}`);
}

export const createCharacter = (UserId: string) => {
    return api.post(`/User/Get/${UserId}`);
}

export const addAttack = (attack:AttackDto) => {
    return api.post(`/Attack/Add`, attack);
}

export const addInventoryItem = (inventoryItem: InventoryDto) => {
    return api.post(`/InventoryItem/Add`, inventoryItem);
}

export const createUser = (user: UserPropsRequest) => {
    return api.post(`/User/Create`, user);
}

export const editCharacter = (CharacterId: string, character: CharacterDto) => {
    return api.put(`/Character/Edit/${CharacterId}`, character);
}

export const updateHP = (CharacterId: string, hpRequest: UpdateHpRequest) => {
    return api.put(`/CurrentHp/Edit/${CharacterId}`, hpRequest);
}

export const deleteAttack = (AttackId: string) => {
    return api.delete(`/Attack/Delete/${AttackId}`);
}

export const deleteInventoryItem = (InventoryItemId: string) => {
    return api.delete(`/InventoryItem/Delete/${InventoryItemId}`);
}

export const deleteUser = (UserName: string) => {
    return api.delete(`/User/Delete/${UserName}`);
}

export const deleteCharacter = (CharacterId: string) => {
    return api.delete(`/Character/Delete/${CharacterId}`);
}