import { CharacterDto, editCharacter } from "../api/ApiService";
import "./CharacterForm.css";

export default function CharacterForm(character: CharacterDto) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // updated character object
    var updatedCharacter: CharacterDto = {
      characterId: character.characterId,
      characterName: (
        document.getElementById("character-name") as HTMLInputElement
      ).value,
      characterRace: (
        document.getElementById("character-race") as HTMLInputElement
      ).value,
      characterClass: (
        document.getElementById("character-class") as HTMLInputElement
      ).value,
      characterLevel: parseInt(
        (document.getElementById("character-level") as HTMLInputElement).value
      ),
      strength: parseInt(
        (document.getElementById("character-strength") as HTMLInputElement)
          .value
      ),
      bonStr: (document.getElementById("bon-str") as HTMLInputElement).checked,
      dexterity: parseInt(
        (document.getElementById("character-dexterity") as HTMLInputElement)
          .value
      ),
      bonDex: (document.getElementById("bon-dex") as HTMLInputElement).checked,
      constitution: parseInt(
        (document.getElementById("character-constitution") as HTMLInputElement)
          .value
      ),
      bonCon: (document.getElementById("bon-con") as HTMLInputElement).checked,
      intelligence: parseInt(
        (document.getElementById("character-intelligence") as HTMLInputElement)
          .value
      ),
      bonInt: (document.getElementById("bon-int") as HTMLInputElement).checked,
      wisdom: parseInt(
        (document.getElementById("character-wisdom") as HTMLInputElement).value
      ),
      bonWis: (document.getElementById("bon-wis") as HTMLInputElement).checked,
      charisma: parseInt(
        (document.getElementById("character-charisma") as HTMLInputElement)
          .value
      ),
      bonCha: (document.getElementById("bon-cha") as HTMLInputElement).checked,
      inspiration: (
        document.getElementById("character-inspiration") as HTMLInputElement
      ).checked,
      proficiencyBonus: parseInt(
        (
          document.getElementById(
            "character-proficiency-bonus"
          ) as HTMLInputElement
        ).value
      ),
      armor: parseInt(
        (document.getElementById("character-armor") as HTMLInputElement).value
      ),
      speed: parseInt(
        (document.getElementById("character-speed") as HTMLInputElement).value
      ),
      currentHp: character.currentHp,
      maxHp: parseInt(
        (document.getElementById("character-max-hp") as HTMLInputElement).value
      ),
      tempHp: parseInt(
        (document.getElementById("character-temp-hp") as HTMLInputElement).value
      ),
      copper: parseInt(
        (document.getElementById("character-copper") as HTMLInputElement).value
      ),
      silver: parseInt(
        (document.getElementById("character-silver") as HTMLInputElement).value
      ),
      gold: parseInt(
        (document.getElementById("character-gold") as HTMLInputElement).value
      ),
      platinum: parseInt(
        (document.getElementById("character-platinum") as HTMLInputElement)
          .value
      ),
      languages: (
        document.getElementById("character-languages") as HTMLInputElement
      ).value,
      personalityTraits: (
        document.getElementById("character-personality") as HTMLInputElement
      ).value,
      ideals: (document.getElementById("character-ideals") as HTMLInputElement)
        .value,
      bonds: (document.getElementById("character-bonds") as HTMLInputElement)
        .value,
      flaws: (document.getElementById("character-flaws") as HTMLInputElement)
        .value,
      otherTraits: (
        document.getElementById("character-traits") as HTMLInputElement
      ).value,
    };

    console.log("Updated character:", updatedCharacter);
    try {
      // Call API to update character
      editCharacter(character.characterId, updatedCharacter);
    } catch (error) {
      console.error("Error updating character:", error);
    }
  };

  return (
    <div className="character-form">
      <h3 className="form-header">Character Information</h3>
      <form className="form-character" method="put">
        <div className="form-group">
          <div className="general-info">
            <label htmlFor="character-name">Character Name</label>
            <input
              type="text"
              id="character-name"
              defaultValue={character?.characterName}
            />
            <label htmlFor="character-race">Race</label>
            <input
              type="text"
              id="character-race"
              defaultValue={character?.characterRace}
            />
            <label htmlFor="character-class">Class</label>
            <input
              type="text"
              id="character-class"
              defaultValue={character?.characterClass}
            />
            <label htmlFor="character-level">Level</label>
            <input
              type="number"
              id="character-level"
              min={1}
              max={20}
              defaultValue={character?.characterLevel}
            />
          </div>
          <div className="ability-scores">
            <label htmlFor="character-strength">Strength</label>
            <input
              type="number"
              id="character-strength"
              min={1}
              max={20}
              defaultValue={character?.strength}
            />
            <input
              type="checkbox"
              id="bon-str"
              defaultChecked={character.bonStr}
            />
            <label htmlFor="character-dexterity">Dexterity</label>
            <input
              type="number"
              id="character-dexterity"
              min={1}
              max={20}
              defaultValue={character?.dexterity}
            />
            <input
              type="checkbox"
              id="bon-dex"
              defaultChecked={character.bonDex}
            />
            <label htmlFor="character-constitution">Constitution</label>
            <input
              type="number"
              id="character-constitution"
              min={1}
              max={20}
              defaultValue={character?.constitution}
            />
            <input
              type="checkbox"
              id="bon-con"
              defaultChecked={character.bonCon}
            />
            <label htmlFor="character-intelligence">Intelligence</label>
            <input
              type="number"
              id="character-intelligence"
              min={1}
              max={20}
              defaultValue={character?.intelligence}
            />
            <input
              type="checkbox"
              id="bon-int"
              defaultChecked={character.bonInt}
            />
            <label htmlFor="character-wisdom">Wisdom</label>
            <input
              type="number"
              id="character-wisdom"
              min={1}
              max={20}
              defaultValue={character?.wisdom}
            />
            <input
              type="checkbox"
              id="bon-wis"
              defaultChecked={character.bonWis}
            />
            <label htmlFor="character-charisma">Charisma</label>
            <input
              type="number"
              id="character-charisma"
              min={1}
              max={20}
              defaultValue={character?.charisma}
            />
            <input
              type="checkbox"
              id="bon-cha"
              defaultChecked={character.bonCha}
            />
          </div>
          <div className="secondary-info">
            <label htmlFor="character-inspiration">Inspiration</label>
            <input
              type="checkbox"
              id="character-inspiration"
              defaultChecked={character.inspiration}
            />
            <label htmlFor="character-proficiency-bonus">
              Proficiency Bonus
            </label>
            <input
              type="number"
              id="character-proficiency-bonus"
              defaultValue={character.proficiencyBonus}
            />
            <label htmlFor="character-armor">Armor Class</label>
            <input
              type="number"
              id="character-armor"
              min={0}
              max={30}
              defaultValue={character.armor}
            />
            <label htmlFor="character-speed">Speed</label>
            <input
              type="number"
              id="character-speed"
              min={0}
              max={255}
              defaultValue={character.speed}
            />
            <label htmlFor="character-max-hp">Maximum Hit Points</label>
            <input
              type="number"
              id="character-max-hp"
              min={0}
              max={400}
              defaultValue={character.maxHp}
            />
            <label htmlFor="character-temp-hp">Temporary Hit Points</label>
            <input
              type="number"
              id="character-temp-hp"
              min={0}
              max={100}
              defaultValue={character.tempHp}
            />
          </div>
          <div className="money">
            <div className="money-input-item">
              <label htmlFor="character-copper">Copper</label>
              <input
                type="number"
                id="character-copper"
                min={0}
                defaultValue={character.copper}
              />
            </div>
            <div className="money-input-item">
              <label htmlFor="character-silver">Silver</label>
              <input
                type="number"
                id="character-silver"
                min={0}
                defaultValue={character.silver}
              />
            </div>
            <div className="money-input-item">
              <label htmlFor="character-gold">Gold</label>
              <input
                type="number"
                id="character-gold"
                min={0}
                defaultValue={character.gold}
              />
            </div>
            <div className="money-input-item">
              <label htmlFor="character-platinum">Platinum</label>
              <input
                type="number"
                id="character-platinum"
                min={0}
                defaultValue={character.platinum}
              />
            </div>
            <div className="traits">
              <label htmlFor="character-languages">Languages</label>
              <input
                id="character-languages"
                defaultValue={character.languages}
              />
              <label htmlFor="character-personality">Personality Traits</label>
              <input
                id="character-personality"
                defaultValue={character.personalityTraits}
              />
              <label htmlFor="character-ideals">Ideals</label>
              <input id="character-ideals" defaultValue={character.ideals} />
              <label htmlFor="character-bonds">Bonds</label>
              <input id="character-bonds" defaultValue={character.bonds} />
              <label htmlFor="character-flaws">Flaws</label>
              <input id="character-flaws" defaultValue={character.flaws} />
              <label htmlFor="character-traits">Other Traits</label>
              <input
                id="character-traits"
                defaultValue={character.otherTraits}
              />
            </div>
            <button className="submit-form-button" onClick={handleSubmit}>
              Submit Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
