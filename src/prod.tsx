import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './components/App'

interface Props {
  node: HTMLDivElement // root Node
  data?: unknown
  dataChangeHandler?: (data: unknown) => void
  // ...
}

const initReactApp = ({ node }: Props) => {
  createRoot(node).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export { initReactApp }
