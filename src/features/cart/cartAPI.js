export function addToCart(item) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/cart',
    {
      method:'post',
      body:JSON.stringify(item),
      headers:{"content-type":'aplication/json'}

    })
    const data =  await response.json()
    resolve({data})}
  );
}
export function fetchItemByUserId(userId) {
  return new Promise(async (resolve) =>{
    //ToDo: we will nmot hard code the server url here
    const response = await fetch('http://localhost:8080/cart?user='+userId)
    const data =  await response.json()
    resolve({data})}
  );
}
