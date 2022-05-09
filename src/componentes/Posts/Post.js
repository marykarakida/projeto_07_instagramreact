import React from "react";

import Topo from "./Topo";
import Fundo from "./Fundo";

export default function Post(props) {
    const {user, user_profile, midia, midia_alt, liked_by, liked_by_profile, likes_number} = props.post_details

    function likePost(e) {
        const conteudo = e.currentTarget;
        const heartOutline = e.currentTarget.closest(".post").querySelector(".fundo ion-icon:nth-of-type(1)");
        const heart = e.currentTarget.closest(".post").querySelector(".fundo ion-icon:nth-of-type(2)");
 
        if (!conteudo.classList.contains("conteudo-liked")) {
            heartOutline.classList.toggle("hide")
            heart.classList.toggle("hide")
            conteudo.classList.add("conteudo-liked")
        } 
    }

    return (
        <div className="post">
            <Topo user={user} user_profile={user_profile}/>

            <div onClick={likePost} className="conteudo"><img src={midia} alt={midia_alt} /></div>

            <Fundo liked_by={liked_by} liked_by_profile={liked_by_profile} number={likes_number} />
        </div>
    )
}