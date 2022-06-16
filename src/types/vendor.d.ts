// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        body: string,
        banner: string,
        mobileBanner: string,
        text: string,
        textCompleted: string,
        todoSurface: string,
        border: string,
        optionsText: string,
        optionsText_hover: string,
        state: 'light' | 'dark'
    }
}