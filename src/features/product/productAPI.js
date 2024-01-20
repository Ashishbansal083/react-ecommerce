export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //ToDo: we will nmot hard code the server url here
    const response = await fetch('http://localhost:8080/products')
    const data =  await response.json()
    resolve({data})}
  );
}
export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    //ToDo: we will nmot hard code the server url here
    const response = await fetch('http://localhost:8080/products/'+id)
    const data =  await response.json()
    resolve({data})}
  );
}

export function fetchProductsByFilter(filter,sort,pagination) {
  // filter ={"category":["smartphone","laptops"]}
  //sort={_sort:"price",_order:"desc"}
  //pagination={_page=1,_limit:10}
  // ToDo  : on server we will devlelop multivalue filter
  let queryString = '';
  for(let key in filter){    
    const categoryValues = filter[key];
    if(categoryValues.length>0){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }
  console.log(pagination)
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }
  return new Promise(async (resolve) =>{
    //ToDo: we will nmot hard code the server url here
    const response = await fetch('http://localhost:8080/products?'+queryString) 
    const data = await response.json()
    const totalItems = await response.headers.get('X-Total-Count')
    resolve({data:{products:data,totalItems:+totalItems}})}
  );
}
export function fetchCategories() {
  return new Promise(async (resolve) =>{
    //ToDo: we will nmot hard code the server url here
    const response = await fetch('http://localhost:8080/categories')
    const data =  await response.json()
    resolve({data})}
  );
}
export function fetchBrands() {
  return new Promise(async (resolve) =>{
    //ToDo: we will nmot hard code the server url here
    const response = await fetch('http://localhost:8080/brands')
    const data =  await response.json()
    resolve({data})}
  );
}