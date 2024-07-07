import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "fc53af6048394ae9bb8aad51170eec92"
    }
})