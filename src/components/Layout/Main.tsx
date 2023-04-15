import { Box, Grid, Paper, Stack, styled } from '@mui/material'
import React from 'react'

import Hero from '../Hero/Hero'
import New from '../New/New'
import Popular from '../Popular/Popular'

const Main = () => {
    return (
        <Stack direction={'column'} component={'main'} gap={8}>
            <Stack
                sx={{
                    paddingTop: '2rem',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: '2rem',
                }}
            >
                <Hero />
                <New />
            </Stack>
            <Popular />
        </Stack>
    )
}

export default Main
