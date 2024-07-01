const addUser = (event)=>{
    event.preventDefault()
    const first_name = getValue("first_name")
    const last_name = getValue("last_name")
    const username = getValue("username")
    const email = getValue("email")
    const password = getValue("password")
    const phone = getValue("phone")
    const city = getValue("city")
    const street = getValue("street")
    const number = getValue("number")
    const zipcode = getValue("zipcode")
    const latitude = getValue("latitude")
    const altitude = getValue("altitude")

    // console.log({
    //     first_name,
    //     last_name,
    //     email,
    //     password,
    //     phone,
    //     city,
    //     street,
    //     number,
    //     zipcode,
    //     latitude,
    //     altitude
    // })
    
    fetch('https://fakestoreapi.com/users',{
        method:"POST",
        body:JSON.stringify(
            {
                email:email,
                username:username,
                password:password,
                name:{
                    firstname:first_name,
                    lastname:last_name
                },
                address:{
                    city:city,
                    street:street,
                    number:number,
                    zipcode:zipcode,
                    geolocation:{
                        lat:latitude,
                        long:altitude
                    }
                },
                phone:phone,
            }
        )
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
}

const getValue = (id)=>{
    const value = document.getElementById(id).value 
    return value
}