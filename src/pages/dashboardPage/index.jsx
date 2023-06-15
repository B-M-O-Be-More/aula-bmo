import { useState } from "react"
import { HeaderComponent } from "../../components/headerPage"

export const DashboardPage = () => {

    const [name, setName] = useState("Pedro")

    const [newName, setNewName] = useState("")

    const EventButton = () => {
        setName(newName)
    }

    return(
        <>
            <HeaderComponent />
            <h1>{name}</h1>
            <input type="text" onChange={(e) => setNewName(e.target.value)}/>
            <button onClick={() => EventButton()}>+</button>
        </>
    )
}