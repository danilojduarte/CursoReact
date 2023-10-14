import { useRef } from 'react'

function Home() {
  const inputRef = useRef()

  function cliqueiNoBotao() {
    console.log(  inputRef.current.value )
  }
  return (
    <div>
      <h1>Lista de Compras</h1>
      <input placeholder="produto" ref={inputRef}/>
      <button onClick={cliqueiNoBotao}>Adicionar</button>
    </div>
  )
}

export default Home
