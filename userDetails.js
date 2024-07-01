const showUserDetails=()=>{
    const param = new URLSearchParams(window.location.search).get("userId")
    fetch(`https://fakestoreapi.com/users/${param}`)
    .then(res=>res.json())
    .then(data=>{
        const parent = document.getElementById("user-details");
        parent.innerHTML = `
         <div class="col-md-3 d-flex justify-content-center align-items-center text-center">
            <img style="width: 400px;" src="./images/person.png" alt="image">
        </div>
        <div class="col-md-9 d-flex align-items-center justify-content-between row">
            <div class="col-md-3 text-center">
                <h6>Name : <span class="text-uppercase">${data.name.firstname} ${data.name.lastname}</span></h6>
                <h6>Email : ${data.email}</h6>
                <p>Username : ${data.username}</p>
                <h6>Phone : ${data.phone}</h6>
            </div>
            <div class="col-md-2 text-center">
                <h6 class="text-center fw-semibold text-dark">Geo Location</h6>
                <p>Latitude:<span class="fw-semibold text-dark">${data.address.geolocation.lat}</span></p>
                <p>Longitude:<span class="fw-semibold text-dark">${data.address.geolocation.long}</span></p>
            </div>
            <div class="col-md-3 text-center">
                <h5 class="text-center text-dark fw-semibold">Address</h5>
                <h6>City :<span class="fw-bold text-dark">${data.address.city}</span></h6>
                <p>Street : <span class="fw-bold text-dark">${data.address.street}</span></p>
                <p>Number : <span class="fw-bold text-dark">${data.address.number}</span></p>
                <p>ZipCode : <span class="fw-bold text-dark">${data.address.zipcode}</span></p>
            </div>
        </div>
        `
    })
}

showUserDetails()