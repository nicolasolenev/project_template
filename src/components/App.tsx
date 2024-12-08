import '@mantine/core/styles.css'

import { Container, MantineProvider } from '@mantine/core'
import React, { FC } from 'react'

import { IBlocks } from '@/types/elma.types'

import { theme } from '../theme'
import { StepperComponent } from './StepperComponent'

interface Props {
  data: IBlocks
  changeHandler: (data: IBlocks) => void
}

export const App: FC<Props> = ({ data, changeHandler }) => {
  return (
    <MantineProvider theme={theme}>
      <Container mt='sm' mb='sm'>
        <StepperComponent data={data} changeHandler={changeHandler} />
      </Container>
    </MantineProvider>
  )
}
