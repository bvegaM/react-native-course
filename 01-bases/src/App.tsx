// import { BasicFunctions } from './typescript/BasicFunctions'
// import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { BasicTypes } from './typescript/BasicTypes'

import { LoginPage } from "./components/LoginPage"
import { AuthProvider } from "./context/AuthContext"

import reactLogo from './assets/react.svg'
// import { Counter } from "./components/Counter"

function App() {

  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react w-40 h-40" alt="React logo"/>
        </a>
        <h1 className='text-4xl mb-5'>React + Typescript</h1>

        {/* <BasicTypes /> */}
        {/* <ObjectLiterals/> */}
        {/* <BasicFunctions/>  */}
        {/* <Counter/> */}
        <LoginPage />
      </div>
    </AuthProvider>

  )
}

export default App
