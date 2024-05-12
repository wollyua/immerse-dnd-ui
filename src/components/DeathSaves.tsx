import "./DeathSaves.css";

export default function DeathSaves() {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle("checked");
    }
  };
  return (
    <div className="death-saves-container">
      <div className="death-saves-content">
        <form className="death-saves-block" id="success">
          <div className="death-saves-block-header">Successes </div>
          <div className="death-saves-block-content">
            <input type="checkbox" id="s1" name="options" />
            <input type="checkbox" id="s2" name="options" />
            <input type="checkbox" id="s3" name="options" />
          </div>
        </form>
        <form className="death-saves-block" id="failure">
          <div className="death-saves-block-header">Failures </div>
          <div className="death-saves-block-content">
            <input type="checkbox" id="f1" name="options" />
            <input type="checkbox" id="f2" name="options" />
            <input type="checkbox" id="f3" name="options" />
          </div>
        </form>
      </div>
      <div className="death-saves-header">DEATH SAVES</div>
    </div>
  );
}
