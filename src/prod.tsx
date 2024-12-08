import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './components/App'
import { IBlocks } from './types/elma.types'

interface Props {
  root: HTMLDivElement
  data: IBlocks
  changeHandler: (data: IBlocks) => void
}

const reactRender = ({ root, data, changeHandler }: Props) => {
  createRoot(root).render(
    <StrictMode>
      <App data={data} changeHandler={changeHandler} />
    </StrictMode>,
  )
}

export { reactRender }
