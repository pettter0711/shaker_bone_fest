const fetchApi = async (root) => {
    try {
        let response = await fetch(root);
        let data = await response.json();
        return data ? data : [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

export { fetchApi };
