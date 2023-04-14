import { useState } from "react";

function PostForm({ setNewPost }) {
  const [title, setTitle] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  const [imageFiles, setImageFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleInput = (e) => {
    setTitle(e.currentTarget.value);
  };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   e.preventDefault();
    //   const formData = new FormData();
    //   formData.append("post[title]", title);
    //   if (photoFile) {
    //     formData.append("post[photo]", photoFile);
    //   }

    //   const response = await fetch("/api/posts", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   if (response.ok) {
    //     const post = await response.json();
    //     setTitle("");
    //     setPhotoFile(null);
    //     setNewPost(post);
    //   }
    //   setTitle("");
    // };
    // const handleFile = ({ currentTarget }) => {
    //     const file = currentTarget.files[0];
    //   // const file = currentTarget.files;
    //   setPhotoFile(file);
    //   if (file) {
    //     const fileReader = new FileReader();
    //     fileReader.readAsDataURL(file);
    //     fileReader.onload = () => setPhotoUrl(fileReader.result);
    //   } else setPhotoUrl(null);
    // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", title);
    if (photoFile) {
      formData.append("post[photo]", photoFile);
    }

     // <-- ADD THESE LINES

    //  imageFiles.forEach((image) => {
    //    formData.append("post[images][]", image);
    //  });
for (let i = 0; i < imageFiles.length; i++) {
  formData.append("post[images][]", imageFiles[i]);
}

    const response = await fetch("/api/posts", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const post = await response.json();
      setTitle("");
      setPhotoFile(null);
      setNewPost(post);

      setTitle("");

      setImageFiles([]);
      setImageUrls([]);
    }
  };


  const handleFiles = ({ currentTarget }) => {
    const files = currentTarget.files;

    setImageFiles(files);
    if (files.length !== 0) {
      let filesLoaded = 0;
      const urls = [];
      Array.from(files).forEach((file, index) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          urls[index] = fileReader.result;
          if (++filesLoaded === files.length) setImageUrls(urls);
        };
      });
    } else setImageUrls([]);
  };
  let preview = null;
  if (photoUrl) preview = <img src={photoUrl} alt="" />;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="post-title">Title of Post</label>
      <input
        type="text"
        id="post-title"
        value={title}
        onChange={handleInput}
        required
      />
      {/* <input type="file" onChange={handleFiles} multiple /> */}
      <input type="file" onChange={handleFiles} multiple />
      <h3>Image preview</h3>
      {preview}
      <button>Make a new Post!</button>
    </form>
  );
}

export default PostForm;
