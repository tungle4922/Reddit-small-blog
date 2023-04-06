import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./post.css"

const Posts = () => {
    const posts = useSelector((state) =>state.post.posts)
    const tags = ["None", "News", "Mood", "Quotes", "Shitpost"];
    const [allPosts, setAllPosts] = useState([{}])

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                // const res = await axios.get("http://localhost:8080/post")
                const res = await axios.get("https://reddit-small-blog-backend.vercel.app/post")
                setAllPosts(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllPosts();
    },[])

    return ( 
        <section className="post-container">
            {allPosts.slice(0).map((post, idx)=> {
                return (
                    <div className="posts" key={idx}>
                        <p className="posts-title">{post.title}</p>
                        <img alt="" className="post-img" src={post.selectedImgUrl} />
                        <p className={`posts-tags-${tags[post.tag]} posts-tags`}>{tags[post.tag]}</p>
                        <p className="posts-description">{post.description}</p>
                    </div>
                )
            })}
        </section>
     );
}
 
export default Posts;