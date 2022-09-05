import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
    
        colors: {
            white: string,
            backgorund: string,
            baseCard: string,
            baseInput: string,
            baseButton: string,
            baseHover: string,
            baseLabel: string,
            baseText: string,
            baseSubtitle: string,
            baseTitle: string,
        
            yellow: string,
            yellowLight: string,
            yellowDark: string,
        
            purple: string,
            purpleLight: string,
            purpleDark: string,
        },
    }
}