import React from 'react'
import { Button as ButtonMui } from '@mui/material'

interface Props {
    children: React.ReactNode
}

const Button = ({ children }: Props) => {
    return (
        <ButtonMui
            sx={{
                '&:hover': {
                    color: 'offWhite.main',
                    bgcolor: 'veryDarkBlue.main',
                },
                marginRight: 'auto',
                color: 'offWhite.main',
                bgcolor: 'secondary.main',
                padding: '0.5rem 2rem',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '2px',
                borderRadius: '0',
            }}
        >
            {children}
        </ButtonMui>
    )
}

export default Button
