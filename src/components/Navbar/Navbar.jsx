import './Navbar.css';
import PropTypes from 'prop-types';

function Navbar({ options }) {
  return (
    <nav data-testid="nav" className={'navbar'}>
      <ul data-testid="ul" className='navbar ul'>
        {options && options.length > 0 && options.map((option, index) => (
          <li key={index} className='navbar li'>
            <a href={option.path} className="link">{option.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  children: PropTypes.node // Adding children prop with a default value of null
};

export default Navbar;
