import css from "./Options.module.css";
export default function Options({ options, onUpdate, totalFeedback, onReset }) {
  return (
    <div className={css.btncontainer}>
      {options.map((option) => (
        <button key={option} onClick={() => onUpdate(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
