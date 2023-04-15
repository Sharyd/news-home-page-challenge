import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import News from './News'

const New = () => {
    return (
        <Box
            sx={{ backgroundColor: 'veryDarkBlue.main' }}
            padding={3}
            paddingBottom={0}
        >
            <Typography
                paddingBottom={3}
                color={'primary'}
                fontWeight={'700'}
                variant="h3"
            >
                New
            </Typography>
            <News
                titleOne="Hydrogen VS Electric Cars"
                titleTwo="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <Divider
                sx={{ marginBottom: '2rem' }}
                color={'#fff'}
                orientation="horizontal"
            />
            <News
                titleOne="The Downsides of AI Artistry"
                titleTwo="What are the possible adverse effects of on-demand AI image generation?"
            />
            <Divider
                sx={{ marginBottom: '2rem' }}
                color={'#fff'}
                orientation="horizontal"
            />
            <News
                titleOne="Is VC Funding Drying Up?"
                titleTwo="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            />
        </Box>
    )
}

export default New
