async function getUser(id: number){
	const request = await fetch(`https://reqres.in/api/users/${id}?delau=1`);

	const response = await request.json();

	if(!request.ok) {
		throw new Error(response.error);
	}

	return response.data;
}
