import {useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";


const OnePost = () => {
    const params = useParams();
    const {data} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.number}`, params.number);

    return (
        <div>
            {params.number}
            <h2>{data.body}</h2>
        </div>
    );
};

export default OnePost;