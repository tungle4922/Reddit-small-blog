import { useState } from "react";
import "./post.css";
import Input from "../InputFields/Input";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import ImageUpload from "../ImageUpload/ImageUpload";

const MakePosts = (props) => {
  const { setOpen } = props;

  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some descriptions");
  const [selectedIdx, setSelectIdx] = useState(0);
  const [selectedImg, setSelectedImg] = useState("");
  const tags = ["None", "News", "Mood", "Quotes", "Shitpost"];
  // const dispatch = useDispatch();

  const handlePost = async (e) => {
    e.preventDefault();
    setOpen(false);
    const newPost = {
      title: title,
      description: desc,
      tag: selectedIdx,
      selectedImgUrl: selectedImg,
    };
    // dispatch(createPost(newPost));
    try {
      // const res = await axios.post("http://localhost:8080/post", newPost);
      const res = await axios.post("https://redditsmallblog.onrender.com/post", newPost);
      window.location.reload(false);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(selectedImg);

  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <div className="close-wrap">
          <button
            className="close-x"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
          >
            x
          </button>
          <p className="makepost-save" onClick={handlePost}>
            Post
          </p>
        </div>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        label="Title"
        classStyle="makepost-title"
      />
      <Input
        data={desc}
        inputType="textarea"
        setData={setDesc}
        label="Description"
        classStyle="makepost-desc"
      />

      <label>Upload image</label>
      <ImageUpload setSelectedImg={setSelectedImg} />

      <label style={{marginTop: 15}}>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, idx) => {
          return (
            <button
              key={idx}
              className={`${
                selectedIdx === idx
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectIdx(idx)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MakePosts;
