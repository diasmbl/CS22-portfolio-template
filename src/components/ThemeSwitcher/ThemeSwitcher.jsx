import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ darkClassName }) => {
  // Check the user's preferred color scheme
  const prefersDarkMode = useMemo(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }, []);

  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  // Apply the selected theme (dark or light) when the component mounts
  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply the selected theme by adding/removing a class to the body element
  const applyTheme = (isDark) => {
    document.body.classList.toggle(darkClassName, isDark);
  };

  return (
    <div>
      <button data-testid="themeSwitcherButton" className="btn" onClick={toggleTheme}>
        {isDarkMode ? 'To Light Mode' : 'To Dark Mode'}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
  darkClassName: 'dark',
};

export default ThemeSwitcher;
