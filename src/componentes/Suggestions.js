import Suggestion from "./Suggestion"

export default function Suggestions () {
    const sugestoes = [
        {username: "bad.vibes.memes",
        profile_pic: "./assets/img/bad.vibes.memes.svg"},
        {username: "chibirdart",
        profile_pic: "./assets/img/chibirdart.svg"},
        {username: "razoesparaacreditar",
        profile_pic: "./assets/img/razoesparaacreditar.svg"},
        {username: "adorable_animals",
        profile_pic: "./assets/img/adorable_animals.svg"},
        {username: "smallcutecats",
        profile_pic: "./assets/img/smallcutecats.svg"}
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            { sugestoes.map(sugestao => <Suggestion username={sugestao.username} pic={sugestao.profile_pic}/>) }
        </div>
    )
}