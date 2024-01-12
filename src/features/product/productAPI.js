export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //ToDo: we will nmot hard code the server url here
    const response = await fetch('http://localhost:8080/products')
    const data =  await response.json()
    resolve({data})}
  );
}
