export default function Usuario(props) {
    const {username, name, pic} = props;

    return (
        <div className="usuario">
            <img src={pic} alt={"Imagem de perfil do(a) " + username} />
            <div className="texto">
                <strong>{username} </strong>
                {name}
            </div>
        </div>
    )
}