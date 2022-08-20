
import { ContextProvider } from './store'
import './app.less'


const App = ({ children }) => {

  return (
    <ContextProvider>
        {children}
    </ContextProvider>
  )
}

export default App
