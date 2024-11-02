import { useParams } from "react-router-dom";

function SingleBlog() {
  const { id } = useParams();
  return <div>SingleBlog</div>;
}

export default SingleBlog;
