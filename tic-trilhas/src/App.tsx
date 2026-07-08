import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './app/components/Header.tsx'
import Home from './app/view/Home.tsx'

function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center items-center bg-gray-200 min-h-screen">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
