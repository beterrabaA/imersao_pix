import { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'

import { Box } from '@mui/material'

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import Navbar from '@/components/Navbar/Navbar'


export const metadata: Metadata = {
  title: 'Codepix title',
  description: 'Codepix description',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar/>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              mx: ['16px', '120px'],
              my: ['80px', '120px'],
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
