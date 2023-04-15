import React from 'react'
import { ListItemStyled, ListStyled, linkEffect } from './Navbar'
import { Box, ListItemButton, styled } from '@mui/material'

const NavMobile = () => {
    return (
        <>
            <ListStyled
                sx={{
                    display: {
                        xs: 'flex',
                        md: 'hidden',
                        width: 'max',
                        flexDirection: 'column',
                        position: 'absolute',
                        top: '20%',
                        left: '1rem',
                    },
                }}
                disablePadding
            >
                <ListItemStyled disablePadding>
                    <ListItemButton sx={linkEffect} component="a" href="#">
                        Home
                    </ListItemButton>
                </ListItemStyled>
                <ListItemStyled disablePadding>
                    <ListItemButton sx={linkEffect} component="a" href="#">
                        New
                    </ListItemButton>
                </ListItemStyled>
                <ListItemStyled disablePadding>
                    <ListItemButton sx={linkEffect} component="a" href="#">
                        Popular
                    </ListItemButton>
                </ListItemStyled>
                <ListItemStyled disablePadding>
                    <ListItemButton sx={linkEffect} component="a" href="#">
                        Trending
                    </ListItemButton>
                </ListItemStyled>
                <ListItemStyled disablePadding>
                    <ListItemButton sx={linkEffect} component="a" href="#">
                        Categories
                    </ListItemButton>
                </ListItemStyled>
            </ListStyled>
        </>
    )
}

export default NavMobile
