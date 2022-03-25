import {ClipLoader} from "react-spinners";

function Loading(props) {

  return (
    <div className="loading">
      <ClipLoader loading={props.loading} size={props.size} />
    </div>
  )
}

export default Loading;