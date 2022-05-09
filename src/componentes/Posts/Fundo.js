import React from "react";

export default function Fundo(props) {
    const {liked_by, liked_by_profile, number} = props;

    function likePost (e) {
        const conteudo = e.currentTarget.closest(".post").querySelector(".conteudo");
        const heartOutline = e.currentTarget.parentNode.querySelector("ion-icon:nth-of-type(1)");
        const heart = e.currentTarget.parentNode.querySelector("ion-icon:nth-of-type(2)");
        conteudo.classList.add("conteudo-liked")
        heartOutline.classList.toggle("hide")
        heart.classList.toggle("hide")

        if (e.currentTarget === heart) {
            conteudo.classList.remove("conteudo-liked")
        }

    }

    return (
        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon onClick={likePost} class="md hydrated" name="heart-outline"></ion-icon>
                    <ion-icon onClick={likePost} class="md hydrated liked hide" name="heart"></ion-icon>
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