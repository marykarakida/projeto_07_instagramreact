import Post from "./Post"

export default function Posts() {
    const posts = [
        {user: "meowed",
        midia: "./assets/img/gato-telefone.svg",
        midia_alt: "Imagem de um gato olhando para um celular ligado",
        likes_profile: "respondeai",
        likes_number: 101.523},
        {user: "barked",
        midia: "./assets/img/dog.svg",
        midia_alt: "Imagem de um cachorro dormindo",
        likes_profile: "adorable_animals",
        likes_number: 99.159}
    ]

    return (
        <div className="posts">

            { posts.map(post => <Post user={post.user} midia={post.midia} midia_alt={post.midia_alt} likes_profile={post.likes_profile} likes_number={post.likes_number} />) }
        </div>
    )
}
