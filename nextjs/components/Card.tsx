import { ReactNode } from 'react'

import { Box } from '@mui/material'

interface CardProps {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <Box
      sx={{
        borderLeft: '4px solid',
        borderColor: 'primary.main',
        p: 2,
        boxShadow: 1,
        backgroundColor: 'primary.contrastText',
      }}
    >
      {children}
    </Box>
  )
}

export default Card
