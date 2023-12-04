import React from "react";
import FeedSearch from "./FeedSearch";
import FeedResults from "./FeedResults";

const feedContent = [
    {
        image: "https://picsum.photos/50/50",
        header: "Lorem ipsum",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, nisi? Deleniti omnis neque iure, eos animi sequi voluptates eum   esse repudiandae facilis quaerat. Reprehenderit eaque hic adipisci reiciendis soluta laborum.",
    },
    {
        image: "https://picsum.photos/50/50",
        header: "Lorem ipsum",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, nisi? Deleniti omnis neque iure, eos animi sequi voluptates eum   esse repudiandae facilis quaerat. Reprehenderit eaque hic adipisci reiciendis soluta laborum."
    },
    {
        image: "https://picsum.photos/50/50",
        header: "Lorem ipsum",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, nisi? Deleniti omnis neque iure, eos animi sequi voluptates eum   esse repudiandae facilis quaerat. Reprehenderit eaque hic adipisci reiciendis soluta laborum."
    },
    {
        image: "https://picsum.photos/50/50",
        header: "Lorem ipsum",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, nisi? Deleniti omnis neque iure, eos animi sequi voluptates eum   esse repudiandae facilis quaerat. Reprehenderit eaque hic adipisci reiciendis soluta laborum."
    }
]

function Feed() {
    return (
        <React.Fragment>
            <FeedSearch />
            {feedContent.map((post, index) => (
                <FeedResults
                    image={post.image}
                    header={post.header}
                    paragraph={post.paragraph}
                    key={index}
                />
            ))}
        </React.Fragment>
    )
}

export default Feed;