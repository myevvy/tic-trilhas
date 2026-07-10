// É o arquivo de entrada do React. A função dele é única e crucial: ele pega o React, pega o componente principal do seu app (App.tsx) e o "conecta" dentro daquela div id="root" do arquivo HTML que vimos ali em cima. Você raramente vai mexer nele depois que o projeto estiver criado.

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './app/components/Header.tsx'
import Home from './app/view/Home.tsx'
import { SearchProvider } from './app/context/SearchContext'

function App() {
  return (
    <SearchProvider>
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
    </SearchProvider>
  )
}

export default App
