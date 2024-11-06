import { useParams } from "react-router-dom";

function SingleService() {
  const { id } = useParams();
  return <div>SingleService</div>;
}

export default SingleService;
