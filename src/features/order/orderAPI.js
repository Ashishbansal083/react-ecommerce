
export function createOrder(order) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/orders',
    {
      method:'POST',
      body:JSON.stringify(order),
      headers:{"content-type":'application/json'}

    })
    const data =  await response.json()
    resolve({data})}
  );
}
export function updateOrder(order) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/orders/'+order.id,
    {
      method:'PATCH',
      body:JSON.stringify(order),
      headers:{"content-type":'application/json'}

    })
    const data =  await response.json()
    resolve({data})}
  );
}


export function fetchAllOrders(pagination) {
  // filter ={"category":["smartphone","laptops"]}
  //sort={_sort:"price",_order:"desc"}
  //pagination={_page=1,_limit:10}
  // ToDo  : on server we will devlelop multivalue filter
  let queryString = '';  
  
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }
  return new Promise(async (resolve) =>{
    //ToDo: we will nmot hard code the server url here
    const response = await fetch('http://localhost:8080/orders?'+queryString) 
    const data = await response.json();
    console.log(data);    
    const totalOrders = response.headers.get('X-Total-Count');
    resolve({data:{orders:data,totalOrders: totalOrders}})}
  );
}