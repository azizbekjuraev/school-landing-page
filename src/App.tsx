import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const Dashboard = lazy(() => import('./pages'))

function App() {
  return (
    <main className='App relative'>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </main>
  )
}

export default App
