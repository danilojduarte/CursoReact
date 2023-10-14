import { useRef } from 'react'
import { useState } from 'react'



function Home() {
  const inputRef = useRef()

  function cliqueiNoBotao() {
    produtos.push(inputRef.current.value)
  }
  return (
    <div>
      <h1>Lista de Compras</h1>
      <input placeholder="produto" ref={inputRef}/>
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      {
        produtos.map((produto) => (
          <div>{produto}</div>
        ))}
    </div>
  )
}

export default Home
