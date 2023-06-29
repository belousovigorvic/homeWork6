import {useEffect, useState} from "react"
import {getFetchData} from "../api/api"

const useFetch = (url, dependencies) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const data = await getFetchData(url)
            setData(data)
            setLoading(false)
        }
        getData()
    }, [dependencies])


    return {data, loading}
}
export default useFetch