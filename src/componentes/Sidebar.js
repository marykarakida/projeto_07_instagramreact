import Suggestions from "./Suggestions/Suggestions";
import User from "./User"

export default function Sidebar() {
    const user = {username: "catanacomics", name:"Catana", profile_pic: "./assets/img/catanacomics.svg"};
    
    return (
        <div className="sidebar">
            <User username={user.username} name={user.name} pic={user.profile_pic}/>
            <Suggestions />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}