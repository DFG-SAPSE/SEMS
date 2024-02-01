const CallServer = async (url, data, method) => {
	var req;
	if (method == 'POST') {
		req = {
			method: method,
			mode: 'cors',
			body: data ? JSON.stringify(data) : '',
			headers: {
				'Content-Type': 'application/json',
			},
		};
	} else if (method == 'GET') {
		req = {
			method: method,
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		};
	}
	const res = await fetch(url, req);
	return await res.json();
};
export default CallServer;
