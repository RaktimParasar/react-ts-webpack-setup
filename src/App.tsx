import { useState } from 'react'

import './App.css'
import reactlogo from './assets/react.svg'
import tslogo from './assets/typescript.svg'

const App = () => {
  const [count, setCount] = useState<number>(0)

  const handleCount = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactlogo} className="logo" alt="React logo" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tslogo} className="logo" alt="Typescript logo" />
        </a>
      </div>
      <div>
        <h1>React + Typescript</h1>
        <p>A starter setup for React with TypeScript and Webpack. </p>
      </div>
      <div>
        {process.env.NODE_ENV} {process.env.name}
      </div>
      <button onClick={handleCount}>count {count}</button>
    </>
  )
}

export default App
