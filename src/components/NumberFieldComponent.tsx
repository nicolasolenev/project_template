import { NumberInput } from '@mantine/core'
import React, { FC } from 'react'

export const NumberFieldComponent: FC = () => {
  return (
    <NumberInput
      label='You cannot enter number less than 0 or greater than 100'
      placeholder='You cannot enter number less than 0 or greater than 100'
      clampBehavior='strict'
      min={0}
      max={100}
      suffix='%'
    />
  )
}
