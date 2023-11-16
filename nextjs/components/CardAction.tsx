import { ReactNode } from 'react'

import { Button, SxProps, Theme } from '@mui/material'

import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos'

import Card from '@/components/Card'

interface CardActionProps {
  children: ReactNode
  sx?: SxProps<Theme>
  action?: (formData: FormData) => void
}

const CardAction = ({ children, action, sx }: CardActionProps) => {
  return (
    <Card>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} sm={9} sx={sx}>
          {children}
        </Grid2>
        <Grid2
          xs={12}
          sm={3}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'flex-end'}
        >
          <form action={action}>
            <Button color="primary" type="submit">
              <ArrowForwardIcon />
            </Button>
          </form>
        </Grid2>
      </Grid2>
    </Card>
  )
}

export default CardAction
