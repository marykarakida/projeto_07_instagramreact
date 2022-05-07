import Stories from "./Stories/Stories";
import Posts from "./Posts/Posts";

export default function Esquerda() {
    return (
        <div className="esquerda">
            <Stories />
            <Posts />
        </div>
    )
}