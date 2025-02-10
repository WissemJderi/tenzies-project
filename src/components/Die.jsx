import PropTypes from "prop-types";

function Die(props) {
  return (
    <>
      <button
        style={
          props.isHeld
            ? { backgroundColor: "#59e391" }
            : { backgroundColor: "white" }
        }
        onClick={() => props.hold(props.id)}
        aria-pressed={props.isHeld}
        aria-label={`Die with value ${props.value}, ${
          props.isHeld ? "held" : "not held"
        } `}
      >
        {props.value}
      </button>
    </>
  );
}

Die.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isHeld: PropTypes.bool.isRequired,
  hold: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Die;
