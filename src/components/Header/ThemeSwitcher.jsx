import css from './ThemeSwitcher.module.css';
import useLocalStorage from 'use-local-storage';

const ThemeSwitcher = () => {

const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

const switchTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme (newTheme)
    }
    
    

return (
<button className={css.btn_theme_switcher} onClick={switchTheme}></button>
);
};


export default ThemeSwitcher;