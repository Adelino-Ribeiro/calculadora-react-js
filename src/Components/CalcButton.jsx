
function CalcButton(props) {
  return (
    <button
      className={props.className}
      onClick={() => props.onClick(props.value)}
      type="button"
    >
      {props.value}
    </button>
  );
}

export default CalcButton;
