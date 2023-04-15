import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import retroPcsImage from '/images/image-retro-pcs.jpg'
import topLaptopsImage from '/images/image-top-laptops.jpg'
import gamingGrowthImage from '/images/image-gaming-growth.jpg'
import Category from './Category'
const Popular = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} gap={3}>
            <Category
                img={retroPcsImage}
                number="01"
                heading="Reviving Retro PCs"
                text="What happens when old PCs are given modern upgrades?"
            />
            <Category
                img={topLaptopsImage}
                number="02"
                heading="Top 10 Laptops of 2022"
                text="Our best picks for various needs and budgets."
            />
            <Category
                img={gamingGrowthImage}
                number="03"
                heading="The Growth of Gaming"
                text="How the pandemic has sparked fresh opportunities."
            />
        </Stack>
    )
}

export default Popular
