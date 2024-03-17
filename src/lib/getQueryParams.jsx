import { useLocation } from "react-router-dom";

function getQueryParams() {
    const { search } = useLocation(); // Assuming React Router's useLocation hook for getting current location
    const queryParams = new URLSearchParams(search);
    const params = {};

    for (const [key, value] of queryParams.entries()) {
        params[key] = value;
    }

    return params;
}

export default getQueryParams;
