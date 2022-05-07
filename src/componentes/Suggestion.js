export default function Suggestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.pic} alt={"Imagem de perfil do " + props.username} />
                <div className="texto">
                    <div className="nome">{props.username}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}