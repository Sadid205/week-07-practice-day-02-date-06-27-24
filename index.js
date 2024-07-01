const ShowAllUser=()=>{
    fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(users=>{
        const parent = document.getElementById("allUser");
        users.forEach((user)=>{
            const div = document.createElement("div");
            div.classList.add("user");
            div.innerHTML = `
             <div class="d-flex justify-content-center">
                <img src="./images/person.png"/>
            </div>
            <div>
                <h5 class="text-secondary fw-bold">Name : <span class="text-uppercase">${user.name.firstname + user.name.lastname}</span></h5>
                <p class="text-secondary-emphasis fw-semibold">Username : ${user.username}</p>
                <h6 class="text-warning">Email : ${user.email}</h6>
                <p class="text-success">Phone : ${user.phone}</p>
            </div>
            <div class="d-flex justify-content-between">
                <div>
                    <p class="text-info text-uppercase fw-bold">City : <span class="text-uppercase">${user.address.city}</span></p>
                    <p class="text-info fw-bold">Street : ${user.address.street}</p>
                </div>
                <div>
                    <p class="text-danger fw-semibold">Number : ${user.address.number}</p>
                    <p class="text-danger fw-semibold">Zipcode : ${user.address.zipcode}</p>
                </div>
            </div>
            <a href="./details.html?userId=${user.id}" class="btn w-100 fw-bold text-dark btn-outline-warning">Details</a>
            `
            parent.appendChild(div);
        })
    })
}

ShowAllUser()