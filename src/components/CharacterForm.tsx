import "./CharacterForm.css";

export default function CharacterForm() {
  return (
    <div className="character-form">
      <h3 className="form-header">Character Information</h3>
      <form className="form-character" method="post">
        <div className="form-group">
          <div className="general-info">
            <label htmlFor="character-name">Character Name</label>
            <input type="text" id="character-name" />
            <label htmlFor="character-race">Race</label>
            <input type="text" id="character-race" />
            <label htmlFor="character-class">Class</label>
            <input type="text" id="character-class" />
            <label htmlFor="character-level">Level</label>
            <input type="number" id="character-level" min={1} max={20} />
          </div>
          <div className="ability-scores">
            <label htmlFor="character-strength">Strength</label>
            <input type="number" id="character-strength" min={1} max={20} />
            <input type="checkbox" id="bon-str" />
            <label htmlFor="character-dexterity">Dexterity</label>
            <input type="number" id="character-dexterity" min={1} max={20} />
            <input type="checkbox" id="bon-dex" />
            <label htmlFor="character-constitution">Constitution</label>
            <input type="number" id="character-constitution" min={1} max={20} />
            <input type="checkbox" id="bon-con" />
            <label htmlFor="character-intelligence">Intelligence</label>
            <input type="number" id="character-intelligence" min={1} max={20} />
            <input type="checkbox" id="bon-int" />
            <label htmlFor="character-wisdom">Wisdom</label>
            <input type="number" id="character-wisdom" min={1} max={20} />
            <input type="checkbox" id="bon-wis" />
            <label htmlFor="character-charisma">Charisma</label>
            <input type="number" id="character-charisma" min={1} max={20} />
            <input type="checkbox" id="bon-cha" />
          </div>
          <div className="secondary-info">
            <label htmlFor="character-inspiration">Inspiration</label>
            <input type="checkbox" id="character-inspiration" />
            <label htmlFor="character-proficiency-bonus">
              Proficiency Bonus
            </label>
            <input type="number" id="character-proficiency-bonus" />
            <label htmlFor="character-armor">Armor Class</label>
            <input type="number" id="character-armor" min={0} max={30} />
            <label htmlFor="character-speed">Speed</label>
            <input type="number" id="character-speed" min={0} max={255} />
            <label htmlFor="character-current-hp">Current Hit Points</label>
            <input type="number" id="character-current-hp" min={0} max={400} />
            <label htmlFor="character-max-hp">Maximum Hit Points</label>
            <input type="number" id="character-max-hp" min={0} max={400} />
            <label htmlFor="character-temp-hp">Temporary Hit Points</label>
            <input type="number" id="character-temp-hp" min={0} max={100} />
          </div>
          <div className="money">
            <div className="money-input-item">
              <label htmlFor="character-copper">Copper</label>
              <input type="number" id="character-copper" min={0} />
            </div>
            <div className="money-input-item">
              <label htmlFor="character-silver">Silver</label>
              <input type="number" id="character-silver" min={0} />
            </div>
            <div className="money-input-item">
              <label htmlFor="character-gold">Gold</label>
              <input type="number" id="character-gold" min={0} />
            </div>
            <div className="money-input-item">
              <label htmlFor="character-platinum">Platinum</label>
              <input type="number" id="character-platinum" min={0} />
            </div>
            <div className="traits">
              <label htmlFor="character-languages">Languages</label>
              <input id="character-languages" />
              <label htmlFor="character-personality">Personality Traits</label>
              <input id="character-personality" />
              <label htmlFor="character-ideals">Ideals</label>
              <input id="character-ideals" />
              <label htmlFor="character-bonds">Bonds</label>
              <input id="character-bonds" />
              <label htmlFor="character-flaws">Flaws</label>
              <input id="character-flaws" />
              <label htmlFor="character-traits">Other Traits</label>
              <input id="character-traits" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
