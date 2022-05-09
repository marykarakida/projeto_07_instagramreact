export default function Suggestion(props) {
    const {username, pic, reason} = props
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={pic} alt={"Imagem de perfil do " + username} />
                <div className="texto">
                    <div className="nome">{username}</div>
                    <div className="razao">{reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}