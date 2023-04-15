import { Box, Divider, Link, Typography, styled } from '@mui/material'
import React from 'react'

interface Props {
    titleOne: string
    titleTwo: string
}

const stylesLink = {
    color: 'offWhite.main',
    '&:hover': {
        color: 'primary.main',
    },
    fontWeight: '700',
    textDecoration: 'none',
    fontSize: '1.2rem',
}

const NewBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.7rem',
    paddingBottom: '2rem',
})

const News = ({ titleOne, titleTwo }: Props) => {
    return (
        <NewBox>
            <Link sx={stylesLink} color={'#fff'} href="#">
                {titleOne}
            </Link>
            <Typography color={'grayishBlue.main'}>{titleTwo}</Typography>
        </NewBox>
    )
}

export default News
