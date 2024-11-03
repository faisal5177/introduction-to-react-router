import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} =post;

    const navigate = useNavigate ();

    const handleShowDetail = () => {
     navigate(`/post/${id}`);
    }

    return (
        <div className="user">
            <h4>Post of id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Click Me</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;