import React from "react";

export default function Fundo(props) {
    const [profile, number] = props;

    const [liked, setLike] = React.useState("")
    const [heart, setHeart] = React.useState("heart-outline");

    function likePost () {
        if (heart === "heart-outline") {
            setLike("liked")
            setHeart("heart")
        } else {
            setLike("")
            setHeart("heart-outline")
        }
    }

    return (
        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon onClick={likePost} class={"md hydrated " + liked} name={heart}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={"assets/img/" + profile + ".svg"} alt= {"Imagem de perfil do " + profile} />
                <div className="texto">
                    Curtido por <strong>{profile}</strong> e <strong>outras {number} pessoas</strong>
                </div>
            </div>
        </div>
    )
}