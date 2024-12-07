import React from 'react'
import { StrictMode } from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import { App } from './components/App'

interface Props {
  node: HTMLDivElement
  data: unknown
  dataChangeHandler: (data: unknown) => void
}

const initReactApp = ({ node, data, dataChangeHandler }: Props) => {
  console.log('initReactApp')
  console.log('node', node)
  console.log('data', data)
  console.log('dataChangeHandler', dataChangeHandler)

  const root = createRoot(node)

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

export { initReactApp }
