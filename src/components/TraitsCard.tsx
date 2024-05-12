import "./TraitsCard.css";

interface TraitsCardProps {
  Languages: string;
  PersonalityTraits: string;
  Ideals: string;
  Bonds: string;
  Flaws: string;
  OtherTraits: string;
}

export default function TraitsCard() {
  return (
    <div className="traits-card">
      <div className="traits-container">
        <p className="traits-item">
          <b>Languages:</b>
          <br />
          {`Common, Elvish, Dwarvish`}
        </p>
        <p className="traits-item">
          <b>Personality Traits:</b>
          <br />
          {`I'm a hopeless romantic, always searching for that "special someone."`}
        </p>
        <p className="traits-item">
          <b>Ideals:</b>
          <br />
          {`Beauty. I don't care about the past or the future, only the present.`}
        </p>
        <p className="traits-item">
          <b>Bonds:</b>
          <br />
          {`I'm a sucker for a pretty face.`}
        </p>
        <p className="traits-item">
          <b>Flaws:</b>
          <br />
          {`I have a weakness for the vices of the city, especially hard drink.`}
        </p>
        <p className="traits-item">
          <b>Other Traits:</b>
          <br />
          {`Darkvision, Fey Ancestry, Dwarven Resilience`}
        </p>
      </div>
      <div className="traits-header">LANGUAGES & TRAITS</div>
    </div>
  );
}
