import { Button, Group, Stepper } from '@mantine/core'
import React, { FC, useState } from 'react'

import { IBlocks } from '@/types/elma.types'

interface Props {
  data: IBlocks
  changeHandler: (data: IBlocks) => void
}

export const StepperComponent: FC<Props> = ({ data, changeHandler }) => {
  const [active, setActive] = useState(0)

  const nextStep = () => {
    setActive(current => (current < 3 ? current + 1 : current))
    changeHandler(data)
  }

  const prevStep = () => {
    setActive(current => (current > 0 ? current - 1 : current))
    changeHandler(data)
  }

  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        allowNextStepsSelect={false}
      >
        {data.map(block => {
          return (
            <Stepper.Step
              key={block.id}
              label={block.name}
              description={block.helper_text}
            >
              {JSON.stringify(block.questions)}
            </Stepper.Step>
          )
        })}
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify='center' mt='xl'>
        <Button variant='default' onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  )
}
