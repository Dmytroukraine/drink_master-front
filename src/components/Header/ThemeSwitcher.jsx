import css from './ThemeSwitcher.module.css';
import toggleTheme from '../App/App'
import theme from '../App/App'

const ThemeSwitcher = () => {

return (
<button className={css.btn_theme_switcher} onChange={toggleTheme} checked={theme === "dark"}></button>
);
};


export default ThemeSwitcher;