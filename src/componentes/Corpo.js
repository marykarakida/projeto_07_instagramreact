import Esquerda from "./Esquerda"
import Sidebar from "./Sidebar"

export default function Corpo() {
    return (
        <div className="corpo">
            <Esquerda />
            <Sidebar />
        </div>
    )
}