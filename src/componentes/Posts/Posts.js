import Post from "./Post"

export default function Posts() {
    const posts = [
        {user: "meowed",
        user_profile: "./assets/img/meowed.svg",
        midia: "./assets/img/gato-telefone.svg",
        midia_alt: "Imagem de um gato olhando para um celular ligado",
        liked_by: "respondeai",
        liked_by_profile: "./assets/img/respondeai.svg",
        likes_number: 101.523},
        {user: "barked",
        user_profile: "./assets/img/barked.svg",
        midia: "./assets/img/dog.svg",
        midia_alt: "Imagem de um cachorro dormindo",
        liked_by: "adorable_animals",
        liked_by_profile: "./assets/img/adorable_animals.svg",
        likes_number: 99.159}
    ]

    return (
        <div className="posts">
            { posts.map(post => <Post post_details={post} />) }
        </div>
    )
}
