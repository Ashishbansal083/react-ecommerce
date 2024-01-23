export function createUser(userData) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users',
    {
      method:'post',
      body:JSON.stringify(userData),
      headers:{"content-type":'aplication/json'}

    })
    const data =  await response.json()
    resolve({data})}
  );
}
