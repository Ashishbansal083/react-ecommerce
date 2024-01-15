export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //ToDo: we will nmot hard code the server url here
    const response = await fetch('http://localhost:8080/products')
    const data =  await response.json()
    resolve({data})}
  );
}

export function fetchProductsByFilter(filter) {
  // ToDo  : on server we will devlelop multivalue filter
  let queryString = ''
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }
  return new Promise(async (resolve) =>{
    //ToDo: we will nmot hard code the server url here
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data =  await response.json()
    resolve({data})}
  );
}
