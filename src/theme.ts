import { createTheme } from '@mui/material'

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 680,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
    palette: {
        primary: {
            main: 'hsl(35, 77%, 62%)',
        },
        secondary: {
            main: 'hsl(5, 85%, 63%)',
        },
        offWhite: {
            main: 'hsl(36, 100%, 99%)',
        },
        grayishBlue: {
            main: 'hsl(233, 8%, 79%)',
        },
        darkGrayishBlue: {
            main: 'hsl(236, 13%, 42%)',
        },
        veryDarkBlue: {
            main: 'hsl(240, 100%, 5%)',
        },
    } as any,
})
