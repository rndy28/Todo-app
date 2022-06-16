import darkBanner from 'assets/bg-desktop-dark.jpg';
import lightBanner from 'assets/bg-desktop-light.jpg';
import mobileDarkBanner from 'assets/bg-mobile-dark.jpg';
import mobileLightBanner from 'assets/bg-mobile-light.jpg';

export const lightTheme = {
    body: 'hsl(0, 0%, 98%)',
    banner: lightBanner,
    mobileBanner: mobileLightBanner,
    text: 'hsl(235, 19%, 35%)',
    textCompleted: 'hsl(233, 14%, 35%)',
    todoSurface: 'hsl(0, 0%, 98%)',
    border: 'hsl(236, 33%, 92%)',
    optionsText: 'hsl(236, 9%, 61%)',
    optionsText_hover: 'hsl(235, 19%, 35%)',
};
export const darkTheme = {
    body: 'hsl(235, 21%, 11%)',
    banner: darkBanner,
    mobileBanner: mobileDarkBanner,
    text: 'hsl(234, 39%, 85%)',
    textCompleted: 'hsl(233, 14%, 35%)',
    todoSurface: 'hsl(235, 24%, 19%)',
    border: 'hsl(237, 14%, 26%)',
    optionsText: 'hsl(234, 11%, 52%)',
    optionsText_hover: 'hsl(236, 33%, 92%)',
};