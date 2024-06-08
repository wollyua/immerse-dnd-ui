import axios from 'axios';

export interface UserPropsRequest {
    userName: string;
    userPassword: string;
    userEmail: string;
}

export interface UpdateHpRequest {
    currentHp: number,
    tempHp: number
}

export interface CharacterDto {
    characterId: string;
    characterName: string;
    characterRace: string;
    characterClass: string;
    characterLevel: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    bonStr: boolean;
    bonDex: boolean;
    bonCon: boolean;
    bonInt: boolean;
    bonWis: boolean;
    bonCha: boolean;
    inspiration: boolean;
    proficiencyBonus: number;
    armor: number;
    speed: number;
    currentHp: number;
    maxHp: number;
    tempHp: number;
    copper: number;
    silver: number;
    gold: number;
    platinum: number;
    languages: string;
    personalityTraits: string;
    ideals: string;
    bonds: string;
    flaws: string;
    otherTraits: string;
}

export interface CharacterPreviewDto
{
   characterId: string;
   userId: string;
   characterName: string;
   characterRace: string;
   characterClass: string;
   characterLevel: number;
   strength: number;
   dexterity: number;
   constitution: number;
   intelligence: number;
   wisdom: number;
   charisma: number;
}

export interface AttackDto {
    attackId: string;
    characterId: string;
    attackName: string;
    attackRange: number;
    diceNumber: number;
    diceType: number;
    damageType: string;
}

export interface InventoryDto {
    itemId: string;
    characterId: string;
    itemName: string;
    itemDescription: string;
}

const api = axios.create({
    baseURL: "https://localhost:7207",
});

export const getPreviews = async(UserId: string): Promise<CharacterPreviewDto[]> => {
    const response = await api.get(`/Character/GetPreviews/${UserId}`);
    return response.data as CharacterPreviewDto[];
}

export const getCharacter = async (CharacterId: string): Promise<CharacterDto> => {
    const response = await api.get(`/Character/Get/${CharacterId}`);
    return response.data as CharacterDto;
}

export const getInventory = async(CharacterId: string):Promise<InventoryDto[]> => {
    const response = await api.get(`/InventoryItem/Get/${CharacterId}`);
    return response.data as InventoryDto[];
}

export const getAttacksList = async(CharacterID: string):Promise<AttackDto[]> => {
    const response = await api.get(`/Attack/Get/${CharacterID}`);
    
    return response.data as AttackDto[];
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