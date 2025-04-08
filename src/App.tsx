import CabecalhoContador from "./Containers/Cabecalho"
import GlobalStyle from './styled.tsx'
import BodyCounter from "./Containers/Corpo/index.tsx"

function App() {

  return (
    <>
      <GlobalStyle/>
      <CabecalhoContador/>
      <BodyCounter/>
    </>
  )
}

export default App
