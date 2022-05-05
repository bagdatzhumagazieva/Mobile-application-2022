import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ text, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{text}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

// CSS in JS
// const headerStyle = {
//     color: '#fff',
//     backgroundColor: '#000',
//     margin: '0 auto',
//     padding: '16px'
// }

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

Header.defaultProps = {
  text: "To Do App",
};

export default Header;
