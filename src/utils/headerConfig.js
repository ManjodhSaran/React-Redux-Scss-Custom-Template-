const headerConfig = (access_token, formdata) => {
    return {
        headers: {
            "Accept": "application/json",
            "Content-Type": !formdata ? "application/json" : "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Authorization": `Bearer ${access_token}`
        }
    }
};
export default headerConfig