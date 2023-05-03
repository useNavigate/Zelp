import "./loading.css"
const Loading =()=>{
    // debugger
    return (
      <div className="loadingScreen">
        <h1>Loading!</h1>
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </div>

    );
}

export default Loading
