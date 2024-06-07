import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./modules/HomePage.tsx";
import "bootstrap/dist/css/bootstrap.css";
import CharactersListPage, {
  CharactersListPageProps,
} from "./modules/CharactersListPage.tsx";
import CharacterSheetPage, {
  CharacterSheetProps,
} from "./modules/CharacterSheetPage";
import LoginPage from "./modules/LoginPage.tsx";

let testData: CharacterSheetProps = {
  CharacterID: "9e56db51-a03e-4b36-9691-014f43eedc45",
  CharacterName: "Eligos",
  CharacterRace: "Baalzebul Tiefling",
  CharacterClass: "Warlock 11",
  CharacterLevel: 11,
  Strength: 9,
  Dexterity: 14,
  Constitution: 14,
  Intelligence: 12,
  Wisdom: 12,
  Charisma: 20,
  bonStr: false,
  bonDex: true,
  bonCon: false,
  bonInt: false,
  bonWis: false,
  bonCha: true,
  Inspiration: true,
  ProficiencyBonus: 4,
  Armor: 15,
  Speed: 30,
  CurrentHP: 60,
  MaxHP: 60,
  TempHP: 0,
  Copper: 309,
  Silver: 472,
  Gold: 40,
  Platinum: 0,
  Languages: "Common, Infernal",
  PersonalityTraits: "I am a devil, I am a demon.",
  Ideals: "I will kill all humans.",
  Bonds: "I am bound to the demon lord Baalzebul.",
  Flaws: "I am a demon.",
  OtherTraits: "I am a demon.",
  Attacks: [
    {
      AttackName: "Greatsword",
      AttackRange: 5,
      DiceNumber: 2,
      DiceType: 6,
      DamageType: "Slashing",
    },
    {
      AttackName: "Longbow",
      AttackRange: 40,
      DiceNumber: 1,
      DiceType: 8,
      DamageType: "Piercing",
    },
    {
      AttackName: "Dagger",
      AttackRange: 20,
      DiceNumber: 1,
      DiceType: 4,
      DamageType: "Piercing",
    },
    {
      AttackName: "Fireball",
      AttackRange: 15,
      DiceNumber: 8,
      DiceType: 6,
      DamageType: "Fire",
    },
    {
      AttackName: "Lightning Bolt",
      AttackRange: 10,
      DiceNumber: 8,
      DiceType: 6,
      DamageType: "Lightning",
    },
  ],
  InventoryItems: [
    {
      ItemName: "Eldritch Blast",
      ItemDescription: "1d10 force damage",
    },
    {
      ItemName: "Hex",
      ItemDescription: "1d6 necrotic damage",
    },
    {
      ItemName: "Agonizing Blast",
      ItemDescription: "1d10 force damage",
    },
    {
      ItemName: "Thirsting Blade",
      ItemDescription: "1d8 slashing damage",
    },
    {
      ItemName: "Bread",
      ItemDescription: "",
    },
  ],
};

const charactersList: CharactersListPageProps = {
  characters: [
    {
      ID: "e1d72bcf-9eca-427f-a8dd-529be2e7c089",
      Name: "Eligos",
      Race: "Baalzebul Tiefling",
      Class: "Warlock",
      Level: 11,
      Strength: 9,
      Dexterity: 14,
      Constitution: 14,
      Intelligence: 12,
      Wisdom: 12,
      Charisma: 20,
    },
    {
      ID: "43846a2a-4db6-4f48-bb35-25c84a141cec",
      Name: "Bill Morris",
      Race: "High Elf",
      Class: "Warrior",
      Level: 4,
      Strength: 19,
      Dexterity: 15,
      Constitution: 15,
      Intelligence: 10,
      Wisdom: 8,
      Charisma: 9,
    },
    {
      ID: "f01c32c1-2989-4666-ab10-ffb25fcac890",
      Name: "Rick Sanchez",
      Race: "Human",
      Class: "Warlock",
      Level: 5,
      Strength: 10,
      Dexterity: 10,
      Constitution: 18,
      Intelligence: 14,
      Wisdom: 8,
      Charisma: 15,
    },
    {
      ID: "8a7b7cff-d5ca-4bb8-a0d1-7f086f68da6b",
      Name: "Fatus",
      Race: "Orc",
      Class: "Warrior",
      Level: 2,
      Strength: 18,
      Dexterity: 10,
      Constitution: 18,
      Intelligence: 10,
      Wisdom: 8,
      Charisma: 8,
    },
    {
      ID: "0d9eeb8c-ea51-43ca-886d-23c2ebc9eeab",
      Name: "Mardock",
      Race: "High Elf",
      Class: "Paladin",
      Level: 6,
      Strength: 10,
      Dexterity: 14,
      Constitution: 11,
      Intelligence: 14,
      Wisdom: 17,
      Charisma: 15,
    },
  ],
};

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/my-characters",
    element: <CharactersListPage {...charactersList} />,
  },
  { path: "/my-character", element: <CharacterSheetPage {...testData} /> },
  { path: "/login", element: <LoginPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
