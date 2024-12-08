import { TextInput } from '@mantine/core'
import React, { FC } from 'react'

export const TextInputComponent: FC = () => {
  return (
    <TextInput
      label='Input label'
      description='Input description'
      placeholder='Input placeholder'
      type='text'
    />
  )
}
