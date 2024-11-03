import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} =post;
    return (
        <div className="user">
            <h4>Post of id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Click Me</button></Link>
        </div>
    );
};

export default Post;