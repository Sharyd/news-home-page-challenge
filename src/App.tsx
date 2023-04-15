import { useEffect, useState } from 'react'
import { theme } from './theme'
import { Box, Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Navbar from './components/Layout/Navbar'
import Main from './components/Layout/Main'
import useMediaQuery from '@mui/material/useMediaQuery'
function App() {
    const [active, setActive] = useState(false)
    const matches = useMediaQuery('(min-width:680px)')
    useEffect(() => {
        if (matches) setActive(false)
    }, [matches])

    return (
        <ThemeProvider theme={theme}>
            <Container
                sx={{
                    overflow: `${active ? 'hidden' : 'none'}`,
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingTop: { xs: '0', sm: '2rem' },
                }}
                component={'div'}
                maxWidth={'lg'}
            >
                <Navbar setActive={setActive} active={active} />
                <Main />
            </Container>
        </ThemeProvider>
    )
}

export default App
