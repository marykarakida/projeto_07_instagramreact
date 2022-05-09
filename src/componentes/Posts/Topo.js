export default function Topo(props) {
    return (
        <div className="topo">
            <div className="usuario">
                <img src= {props.user_profile} alt= {"Imagem de perfil do(a) " + props.user} />
                {props.user}
            </div>
            <div className="acoes"><ion-icon name="ellipsis-horizontal"></ion-icon></div>
        </div>
    )
}