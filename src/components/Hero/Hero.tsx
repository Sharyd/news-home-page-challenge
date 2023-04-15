import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import imageWeb from '/images/image-web-3-desktop.jpg'
import imageWebMobile from '/images/image-web-3-mobile.jpg'
import Button from '../UI/Button'
const Hero = () => {
    return (
        <Stack direction={'column'} width={'100%'} justifyItems={'start'}>
            <Box
                sx={{ display: { xs: 'none', md: 'block' }, maxWidth: '750px' }}
            >
                <img
                    style={{
                        maxWidth: '100%',
                    }}
                    src={imageWeb}
                    alt="image web"
                />
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <img
                    style={{
                        maxWidth: '100%',
                    }}
                    src={imageWebMobile}
                    alt="image web"
                />
            </Box>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                gap={{ xs: 5, md: 10 }}
                paddingTop={3}
            >
                <Typography variant="h1" fontWeight={800} fontSize={'3rem'}>
                    The Bright Future of Web 3.0?
                </Typography>
                <Stack
                    direction={'column'}
                    sx={{ justifyContent: 'space-between' }}
                    gap={3}
                >
                    <Typography>
                        We dive into the next evolution of the web that claims
                        to put the power of the platforms back into the hands of
                        the people. But is it really fulfilling its promise?
                    </Typography>
                    <Button>Read more</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Hero
