import PropTypes from "prop-types";

function Die(props) {
  return (
    <>
      <button>{props.value}</button>
    </>
  );
}

Die.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Die;
