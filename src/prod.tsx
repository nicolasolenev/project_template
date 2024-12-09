import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './components/App'

interface Props {
  root: HTMLDivElement
  data?: unknown
  changeHandler?: (data: unknown) => void
  // ...
}

const initReactApp = ({ root }: Props) => {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export { initReactApp }
