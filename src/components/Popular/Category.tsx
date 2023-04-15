import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'

interface Props {
    img: string
    number: string
    heading: string
    text: string
}

const stylesLink = {
    color: 'veryDarkBlue.main',
    '&:hover': {
        color: 'secondary.main',
    },
    fontWeight: '700',

    textDecoration: 'none',
    fontSize: '1.1rem',
}

const Category = ({ img, number, heading, text }: Props) => {
    return (
        <Stack
            direction={{ xs: 'row', sm: 'column', md: 'row' }}
            gap={{ xs: 3, sm: 1, md: 3 }}
        >
            <Box>
                <img
                    style={{ width: '100px' }}
                    src={img}
                    alt="image-retro-pcs"
                />
            </Box>
            <Stack direction={'column'} gap={1}>
                <Typography
                    color={'grayishBlue.main'}
                    variant="h2"
                    fontSize={'2rem'}
                    fontWeight={700}
                >
                    {number}
                </Typography>
                <Link sx={stylesLink} href="#" fontWeight={700}>
                    {heading}
                </Link>
                <Typography>{text}</Typography>
            </Stack>
        </Stack>
    )
}

export default Category
