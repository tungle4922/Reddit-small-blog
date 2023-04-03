import React, { useState } from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import axios from "axios";

const ImageUpload = (props) => {
  const { setSelectedImg } = props;
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "skafyqrl"); // replace with your upload preset
    await axios
      .post(
        `https://api.cloudinary.com/v1_1/daeg8bpax/image/upload`, // replace with your cloud name
        formData
      )
      .then((response) => {
        setSelectedImg(response.data.secure_url);   // save image url after upload
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit" style={{padding: "3px 5px"}}>Upload</button>
      </form>
      <CloudinaryContext cloudName="daeg8bpax">
        {/* replace with your cloud name */}
        {image && (
          <Image publicId={image.name}>
            <Transformation width="300" crop="scale" />
          </Image>
        )}
      </CloudinaryContext>
    </div>
  );
};

export default ImageUpload;
