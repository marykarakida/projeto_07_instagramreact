import Topo from "./Topo";
import Fundo from "./Fundo";

export default function Post({user, midia, midia_alt, likes_profile, likes_number}) {

    return (
        <div className="post">
            <Topo usuario={user} />

            <div className="conteudo"><img src={midia} alt={midia_alt} /></div>

            <Fundo profile={likes_profile} number={likes_number} />
        </div>
    )
}