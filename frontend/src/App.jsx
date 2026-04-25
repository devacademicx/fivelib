// componente aleatório para fins de teste do tailwind
// será substituído pelos componentes
// próprios do projeto posteriormente

function App() {
  return (
    //--'min-h-screen' faz com que a div tome todo o espaço da tela--
    //--consultar 'tailwindCSS cheat sheets' para referência rápida--
    //--Note: bg-"primary" e text-"secondary" são os temas definidos no
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <h1 className="text-4xl font-bold text-secondary drop-shadow-lg">
        FiveLib
      </h1>
    </div>
  )
}

export default App
