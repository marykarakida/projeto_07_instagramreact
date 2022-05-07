import Story from "./Story"

export default function Stories() {
    const stories = [
        {name: "9gag",
        profile_pic: "./assets/img/9gag.svg"},
        {name: "meowed",
        profile_pic: "./assets/img/meowed.svg"},
        {name: "barked",
        profile_pic: "./assets/img/barked.svg"},
        {name: "nathanwpylestrangeplanet",
        profile_pic: "./assets/img/nathanwpylestrangeplanet.svg"},
        {name: "wawawicomics",
        profile_pic: "./assets/img/wawawicomics.svg"},
        {name: "respondeai",
        profile_pic: "./assets/img/respondeai.svg"},
        {name: "filomoderna",
        profile_pic: "./assets/img/filomoderna.svg"},
        {name: "memeriagourmet",
        profile_pic: "./assets/img/memeriagourmet.svg"},
    ]

    return (
        <div className="stories">
            { stories.map(story => <Story name={story.name} profile_pic={story.profile_pic}/>) }
            <div className="setinha"><ion-icon name="chevron-forward-circle"></ion-icon></div>
        </div>
    )
}
