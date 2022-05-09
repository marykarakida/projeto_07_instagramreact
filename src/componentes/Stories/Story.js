export default function Story(props) {
    const {name, profile_pic} = props;

    return (
        <div className="story">
            <div className="imagem"><img src={profile_pic} alt={"Imagem de perfil do" + name} /></div>
            <div className="usuario">{name}</div>
        </div>
    )
}