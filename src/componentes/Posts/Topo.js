export default function Topo(props) {
    return (
        <div className="topo">
            <div className="usuario">
                <img src= {"assets/img/" + props.usuario + ".svg"} alt= {"Imagem de perfil do " + props.usuario} />
                {props.usuario}
            </div>
            <div className="acoes"><ion-icon name="ellipsis-horizontal"></ion-icon></div>
        </div>
    )
}