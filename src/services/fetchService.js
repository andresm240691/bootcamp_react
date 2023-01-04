export const getAllUsers = async() =>{
    try{
        let response = await fetch("https://reqres.in/api/users");
        console.log("RESPNSE", response);
        return response.json()
    }catch(error){
        console.log(`FETCH ERROR: ${error}`);
        return {}
    }
}

export const getAllPageUsers = async(page) =>{
    try{
        let response = await fetch(`https://reqres.in/api/users?page=${page}`);
        console.log("RESPNSE", response);
        return response.json()
    }catch(error){
        console.log(`FETCH ERROR: ${error}`);
        return {}
    }
    
}

export const getUserDetail = async(id) =>{
    try{
        let response = await fetch(`https://reqres.in/api/users/${id}`);
        console.log("RESPNSE", response);
        return response.json()
    }catch(error){
        console.log(`FETCH ERROR: ${error}`);
        return {}
    }
}

export const login = async(email, passsowrd) =>{
    let  body = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    };
    console.log(body);
    let response = await fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        // cache: 'no-cache',
        // headers:{
        //     'Content-type': 'application/json'
        // },
        body: body,
        // mode: 'no-cors',
        // credentials:"omit"
    });
    return response.json();
}