import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './Aside'
import FormaDaPagina from './formaDaPagina'
import ParteDireita from './ParteDireita'
import Rodape from './Rodape'
import Cabecalho from './cabecalho' 

function App() {
  return (
  <>
    <FormaDaPagina>
        <Cabecalho></Cabecalho>
         <main className="conteudo-principal">
          <A />
          <ParteDireita /> 
        </main>
        <Rodape></Rodape> 
    </FormaDaPagina>
  </>
  )
}

export default App