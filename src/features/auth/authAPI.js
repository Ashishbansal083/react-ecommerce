export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "aplication/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const email = loginInfo.email;
      const password = loginInfo.password;
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "aplication/json" },
      });
      const data = await response.json();
      console.log(data);

      resolve({ data });
    } catch (err) {
      reject({ err });
    }
  });
}

export function signOut(userId) {
  return new Promise(async (resolve) => {
    // Todo: on server we will remove user session info
    resolve({ data: "success" });
  });
}
