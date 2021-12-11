const getURLQuery = (query) => {
    const href = window.location.href
    const url = new URL(href)
    const params = url.searchParams;
    const value = params.get(query);
    return value
}

export default getURLQuery