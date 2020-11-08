
const themes = {
    DEFAULT_THEME: 'dark-theme',
    LIGHT_THEME: 'light-theme',
    RED_THEME: 'red-theme',
    DARK_THEME: 'dark-theme'
};

const toogleThemeDarkLight = () => {
    const currentTheme = getTheme();
    setTheme(currentTheme == themes.LIGHT_THEME ? themes.DARK_THEME : themes.LIGHT_THEME);
}

const getTheme = () => {
    return getSavedTheme() || getOSTheme() || themes.DEFAULT_THEME;
}

const setTheme = (theme = getTheme()) => {
    const clases = document.body.classList;
    clases.remove(clases.remove(...[...clases].filter(clase => clase.includes('theme')) || theme));
    clases.add(theme);
    saveTheme(theme);
}

const saveTheme = (theme) => {
    localStorage.setItem('theme', theme);
}

const getOSTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? themes.DARK_THEME : themes.LIGHT_THEME || themes.LIGHT_THEME;
} 

const getSavedTheme = () => {
    return localStorage.getItem('theme');
}

const changeTheme = (option) => {
    setTheme(option.value);
}

(() => {

    setTheme();

})();