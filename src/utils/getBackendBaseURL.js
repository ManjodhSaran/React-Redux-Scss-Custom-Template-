import testing, { BACKEND_URL, local, LOCAL_BACKEND_URL, TESTING_BACKEND_URL } from "../env";

const getBackendBaseURL = () => {
    if (local)
        return LOCAL_BACKEND_URL
    else if (testing)
        return TESTING_BACKEND_URL

    return BACKEND_URL
}

export default getBackendBaseURL