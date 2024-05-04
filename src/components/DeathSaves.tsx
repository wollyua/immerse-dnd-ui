import "./DeathSaves.css";

export default function DeathSaves() {
  return (
    <div className="death-saves-container">
      <div className="death-saves-content">
        <div className="death-saves-block">
          <div className="death-saves-block-header">Successes</div>
          <div className="death-saves-block-content">
            <input type="radio" id="success1" name="options" value="option1" />
            <input type="radio" id="success2" name="options" value="option2" />
            <input type="radio" id="success3" name="options" value="option3" />
          </div>
        </div>
        <div className="death-saves-block">
          <div className="death-saves-block-header">Failures</div>
          <div className="death-saves-block-content">
            <input type="radio" id="failure1" name="options" value="failure1" />
            <input type="radio" id="failure2" name="options" value="failure2" />
            <input type="radio" id="failure3" name="options" value="failure3" />
          </div>
        </div>
      </div>
      <div className="death-saves-header">DEATH SAVES</div>
    </div>
  );
}
