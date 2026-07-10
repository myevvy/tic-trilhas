// É o arquivo de entrada do React. A função dele é única e crucial: ele pega o React, pega o componente principal do seu app (App.tsx) e o "conecta" dentro daquela div id="root" do arquivo HTML que vimos ali em cima. Você raramente vai mexer nele depois que o projeto estiver criado.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "react-query";
import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
