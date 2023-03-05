import { createContext, useContext } from 'react'

const MyContext = createContext(null)
const AnotherContext = createContext(null)

const AppNew = () => {

    return(
        <MyContext.Provider value="Another Click">
            <Form />
        </MyContext.Provider>
    )
}
const Welcome = ({title,children }) => {

    return(
        <div>
            <h1>{title}</h1>
            {children}
        </div>
)
}

const Form = () => {
    return(
        <Welcome title="Welcome">
            <Button />
        </Welcome>
    )
}

const Button = () => {
    const someVal = useContext(AnotherContext)

    return(
        <button>{someVal}</button>
        )
}


export default AppNew