import axios from "./axios";
import headerConfig from "./headerConfig";

const imagePostRequest = (endpoint, requestBody, onSuccess, access_token, setLoading, setError) => {
    setLoading && setLoading(true);
    setError && setError(null);
    const bodyFormData = new FormData();
    for (const [key, value] of Object.entries(requestBody)) {
        bodyFormData.append(key, value);
    }
    axios.post(endpoint, bodyFormData, headerConfig(access_token, true))
        .then((res) => {
            const success = res.data.success
            if (success) onSuccess(res)
            else setError && setError(res.data.message)
            // console.log(res)
        })
        .catch(err => console.log(err))
        .then(() => setLoading && setLoading(false))
}

export default imagePostRequest;