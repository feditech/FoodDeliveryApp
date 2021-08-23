let dishcard = document.getElementById("allrestaurant")
dishcard.innerHTML=""

firebase.database().ref(`restaurant`)
.on("child_added",(data)=>{

    console.log(data.val())

    // for(var key in data.val())
    // console.log(key)
    // console.log(data.val())

        // let card = ` <div class="card" style="width: 18rem;">
        //                   <img height=200px width=100%  src="${data.val().Picurl}" alt="...">
        //                   <div class="card-body">
        //                     <h5   class="card-title">${data.val().Dishname}</h5>
        //                     <h6  >Rs: ${data.val().Dishprice} </h6>
        //                     <h6>Delivery: ${data.val().Deliverytype} </h6>
        //                     <h6>Category: ${data.val().Category} </h6>
        //                   </div>
        //                 </div>`   
                        
        //                 dishcard.innerHTML += card;
   
})


let logout = ()=>{
    firebase.auth().signOut()
    .then((res) =>{
        window.location = "userlogin.html"
    } )
}
