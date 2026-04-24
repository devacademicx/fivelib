// componente aleatório para fins de teste do tailwind
// será substituído pelos componentes
// próprios do projeto posteriormente
import RegisterForm from "./components/Register"

function App() {
  return (
    //--'min-h-screen' faz com que a div tome todo o espaço da tela--
    //--consultar 'tailwindCSS cheat sheets' para referência rápida--
    //--Note: bg-"primary" e text-"secondary" são os temas definidos no
    //--index.css
    <div className="min-h-screen bg-primary flex flex-col space-y-10 items-center justify-center p-4">
      <RegisterForm/>
    </div>
  )
}

export default App
