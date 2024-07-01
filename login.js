const loginUser = (event)=>{
    event.preventDefault()
    const username = getValue("username");
    const password = getValue("password");
    // console.log({
    //     username,
    //     password,
    // })
    fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username:username,
            password:password,
        })
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
    .catch((err)=>{
        console.log(err)
    })
}

const getValue = (id)=>{
    const value = document.getElementById(id).value;
    return value;
}