const CallServer = async (url, data, method) => {
    let req = {
        method: method,
        mode: "cors",
        body: data ? JSON.stringify(data) : "",
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    if (method == "POST"){
        req["body"] = data ? JSON.stringify(data) : "";
    }
    const res = await fetch(url, req);    
    return await res.json();
}
export default CallServer;