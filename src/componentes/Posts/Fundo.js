import React from "react";

export default function Fundo(props) {
    const {liked_by, liked_by_profile, number, heart_type, heart_class, like_heart} = props;

    return (
        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon onClick={like_heart} class={"md hydrated " + heart_class} name={heart_type}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={liked_by_profile} alt= {"Imagem de perfil do(a) " + liked_by} />
                <div className="texto">
                    Curtido por <strong>{liked_by}</strong> e <strong>outras {number} pessoas</strong>
                </div>
            </div>
        </div>
    )
}