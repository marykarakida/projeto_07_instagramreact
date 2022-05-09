import React from "react";

import Topo from "./Topo";
import Fundo from "./Fundo";

export default function Post(props) {
    const {user, user_profile, midia, midia_alt, liked_by, liked_by_profile, likes_number} = props.post_details;

    const [heartType, setHeartType] = React.useState("heart-outline");
    const [heartClass, setHeartClass] = React.useState("");

    function likeConteudo() {
        setHeartType("heart");
        setHeartClass("liked");
    }

    function likeHeart(event) {
        if (event.currentTarget.classList.contains("liked")) {
            setHeartType("heart-outline");
            setHeartClass("");
        } else {
            setHeartType("heart");
            setHeartClass("liked");
        }
    }

    return (
        <div className="post">
            <Topo user={user} user_profile={user_profile}/>

            <div onClick={likeConteudo} className="conteudo"><img src={midia} alt={midia_alt} /></div>

            <Fundo liked_by={liked_by} liked_by_profile={liked_by_profile} number={likes_number} heart_type={heartType} heart_class={heartClass} like_heart={likeHeart} />
        </div>
    )
}