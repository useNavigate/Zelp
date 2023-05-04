import  {useRef } from "react";

const UploadImage =({setShowModal,handleFiles})=>{
    const myButton = useRef();

    const handleClick=(e)=>{
        e.currentTarget.value = null;

    }
    return (
      <div>
        <h1>image uploading here </h1>
        <div
          className="photoButton"
          onClick={() => myButton.current.click()}
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          Choose image
        </div>
        <input
          ref={myButton}
          className="submitButton"
          type="file"
          style={{ display: "none" }}
          onChange={handleFiles}
          multiple
          onClick={(e) => (e.currentTarget.value = null)}
        />
        <button onClick={() => setShowModal(false)}>close</button>
      </div>
    );
}

export default UploadImage
