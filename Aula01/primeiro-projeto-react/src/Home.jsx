

function Home() {
  function cliqueiNoBotao() {
    console.log("botao foi clicado")
  }
  return (
    <div>
      <h1>Lista de Compras</h1>
      <input placeholder="produto" />
      <button onClick={cliqueiNoBotao}>Adicionar</button>
    </div>
  )
}

export default Home
