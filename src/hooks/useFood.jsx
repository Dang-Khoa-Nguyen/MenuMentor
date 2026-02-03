import {useState, useEffect} from "react"
import { fetchFood } from "../api/food";

export default function useFood() {
    const [food, setFood] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const res = await fetchFood();
                setFood(res)
                setError(null);
            } catch(e) {
                setError(e);
            } finally {
                setLoading(false)
            }
        }
        load();
    },[]) 

    return {food, loading, error};
}