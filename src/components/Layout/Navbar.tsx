import {
    AppBar,
    Box,
    styled,
    List,
    ListItem,
    ListItemButton,
    Stack,
} from '@mui/material'
import logo from '/images/logo.svg'
import iconMenu from '/images/icon-menu.svg'
import iconMenuClose from '/images/icon-menu-close.svg'
import { theme } from '../../theme'
import NavMobile from './NavMobile'
import { useState } from 'react'

const NavBoxBackdrop = styled(Box)({
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '105vh',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    zIndex: 10,
    gap: '10px',
})

export const NavBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0rem',

    gap: '10px',

    justifyContent: 'space-between',
})
export const ListStyled = styled(List)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
})
export const ListItemStyled = styled(ListItem)({
    letterSpacing: '0.5px',
    textDecoration: 'none',
})

export const linkEffect = {
    color: 'darkGrayishBlue.main',
    '&:hover': {
        color: 'secondary.main',
    },
}

interface Props {
    active: boolean
    setActive: (active: boolean) => void
}

const Navbar = ({ active, setActive }: Props) => {
    return (
        <>
            {active && <NavBoxBackdrop />}
            <AppBar
                position={`${active ? 'absolute' : 'sticky'}`}
                sx={{
                    boxShadow: 'none',
                    height: `${active ? '105vh' : 70}`,
                    width: `${active ? '70%' : '100%'}`,
                    backgroundColor: '#fff',
                }}
            >
                <NavBox>
                    {!active && (
                        <Box>
                            <img src={logo} alt="logo" />
                        </Box>
                    )}
                    {!active && (
                        <Box
                            onClick={() => setActive(true)}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                cursor: 'pointer',
                            }}
                        >
                            <img src={iconMenu} alt="menu icon" />
                        </Box>
                    )}
                    {active && (
                        <Box
                            onClick={() => setActive(false)}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                cursor: 'pointer',
                                position: 'absolute',
                                right: '2rem',
                                top: '2rem',
                            }}
                        >
                            <img src={iconMenuClose} alt="menu icon close" />
                        </Box>
                    )}
                    {active && <NavMobile />}

                    <ListStyled
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                        disablePadding
                    >
                        <ListItemStyled disablePadding>
                            <ListItemButton
                                sx={linkEffect}
                                component="a"
                                href="#"
                            >
                                Home
                            </ListItemButton>
                        </ListItemStyled>
                        <ListItemStyled disablePadding>
                            <ListItemButton
                                sx={linkEffect}
                                component="a"
                                href="#"
                            >
                                New
                            </ListItemButton>
                        </ListItemStyled>
                        <ListItemStyled disablePadding>
                            <ListItemButton
                                sx={linkEffect}
                                component="a"
                                href="#"
                            >
                                Popular
                            </ListItemButton>
                        </ListItemStyled>
                        <ListItemStyled disablePadding>
                            <ListItemButton
                                sx={linkEffect}
                                component="a"
                                href="#"
                            >
                                Trending
                            </ListItemButton>
                        </ListItemStyled>
                        <ListItemStyled disablePadding>
                            <ListItemButton
                                sx={linkEffect}
                                component="a"
                                href="#"
                            >
                                Categories
                            </ListItemButton>
                        </ListItemStyled>
                    </ListStyled>
                </NavBox>
            </AppBar>
        </>
    )
}

export default Navbar
