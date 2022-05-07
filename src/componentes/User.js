export default function Usuario() {
    const usuario = {username: "catanacomics", name:"Catana", profile_pic: "./assets/img/catanacomics.svg"};

    return (
        <div className="usuario">
            <img src={usuario.profile_pic} alt={"Imagem de perfil do " + usuario.username} />
            <div className="texto">
                <strong>{ usuario.username} </strong>
                {usuario.name}
            </div>
        </div>
    )
}