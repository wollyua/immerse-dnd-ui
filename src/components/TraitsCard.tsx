import "./TraitsCard.css";

interface TraitsCardProps {
  Languages: string;
  PersonalityTraits: string;
  Ideals: string;
  Bonds: string;
  Flaws: string;
  OtherTraits: string;
}

export default function TraitsCard(props: TraitsCardProps) {
  return (
    <div className="traits-card">
      <div className="traits-container">
        <p className="traits-item">
          <b>Languages:</b>
          <br />
          {props.Languages}
        </p>
        <p className="traits-item">
          <b>Personality Traits:</b>
          <br />
          {props.PersonalityTraits}
        </p>
        <p className="traits-item">
          <b>Ideals:</b>
          <br />
          {props.Ideals}
        </p>
        <p className="traits-item">
          <b>Bonds:</b>
          <br />
          {props.Bonds}
        </p>
        <p className="traits-item">
          <b>Flaws:</b>
          <br />
          {props.Flaws}
        </p>
        <p className="traits-item">
          <b>Other Traits:</b>
          <br />
          {props.OtherTraits}
        </p>
      </div>
      <div className="traits-header">LANGUAGES & TRAITS</div>
    </div>
  );
}
