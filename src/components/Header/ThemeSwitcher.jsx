
// import css from './ThemeSwither.module.css'
// import theme from './ThemeSwitcher'

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setDarkTheme, setLightTheme } from './actions';

// const ThemeSwitcher = () => {
//   const darkTheme = useSelector((state) => state.themeReducer.darkTheme);
//   const dispatch = useDispatch();

//   const handleThemeSwitch = () => {
//     if (darkTheme) {
//       dispatch(setLightTheme());
//       localStorage.removeItem('theme');
//     } else {
//       dispatch(setDarkTheme());
//       localStorage.setItem('theme', 'dark');
//     }
//   };

//   return (
//     <button className={`btn_theme_switcher ${darkTheme ? 'dark-mode' : ''}`} onClick={handleThemeSwitch}>
//       Toggle Theme
//     </button>
//   );
// };

// export default ThemeSwitcher;
// class ThemeSwitcher extends Component {
//   handleClick = (e) => {
//     e.preventDefault();
//     theme(); 
//   }

//   render() {
//     return (
//       <div>
//         <button className='btn_theme_switcher' onClick={this.handleClick}></button>
//       </div>
//     );
//   }
// }


// export default ThemeSwitcher;


import React from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'; 


const setDarkTheme = () => ({
  type: 'SET_DARK_THEME',
});

const setLightTheme = () => ({
  type: 'SET_LIGHT_THEME',
});


const initialState = {
  darkTheme: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DARK_THEME':
      return {
        ...state,
        darkTheme: true,
      };
    case 'SET_LIGHT_THEME':
      return {
        ...state,
        darkTheme: false,
      };
    default:
      return state;
  }
};


const ThemeSwitcher = () => {
  const darkTheme = useSelector((state) => state.themeReducer.darkTheme);
  const dispatch = useDispatch();

  const handleThemeSwitch = () => {
    if (darkTheme) {
      dispatch(setLightTheme());
      localStorage.removeItem('theme');
    } else {
      dispatch(setDarkTheme());
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button className={`btn_theme_switcher ${darkTheme ? 'dark-mode' : ''}`} onClick={handleThemeSwitch}>
      Переключить тему
    </button>
  );
};


const rootReducer = combineReducers({
  themeReducer,
});
const store = createStore(rootReducer);


export default () => (
  <Provider store={store}>
    <ThemeSwitcher />
  </Provider>
);

