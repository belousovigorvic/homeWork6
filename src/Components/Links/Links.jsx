import useFetch from "../../hooks/useFetch.js";
import {Link} from "react-router-dom";

const Links = () => {

    const URL = "https://jsonplaceholder.typicode.com/posts";

    const {data} = useFetch(URL);

    return (
        <div>
            {data.map((item) => (
                <Link className='link' key={item.id} to={`/${item.id}`}>
                    {item.id}
                </Link>
            ))}
        </div>
    );
};
export default Links