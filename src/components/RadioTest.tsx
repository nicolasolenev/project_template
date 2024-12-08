import { Radio, Stack } from '@mantine/core'
import React, { FC } from 'react'

export const RadioTest: FC = () => {
  return (
    <Stack>
      <Radio checked={false} onChange={() => {}} label='Default radio' />
      <Radio checked onChange={() => {}} label='Checked radio' />
      <Radio
        checked
        variant='outline'
        onChange={() => {}}
        label='Outline checked radio'
      />
      <Radio disabled label='Disabled radio' />
      <Radio
        disabled
        checked
        onChange={() => {}}
        label='Disabled checked radio'
      />
    </Stack>
  )
}
