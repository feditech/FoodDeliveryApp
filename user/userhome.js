let dishcard = document.getElementById("allrestaurant")






// let resUid =[]
// firebase.database().ref(`restaurant`)
//     .on("child_added",(data)=>{
//         console.log(data.val())
//     resUid.push(data.val().Uid)
// })



  
firebase.database().ref(`restaurant`)
.on("child_added",(data)=>{
    console.log(data.val())
        let card = ` <div class="card" style="width: 18rem;">
                          <img height=200px width=100%  src="${data.val().profilepic}" alt="...">
                          <div class="card-body">
                            <h5   class="card-title">${data.val().Restaurantname}</h5>
                            <h6  >City: ${data.val().City} </h6>
                            <h6>Country: ${data.val().Country} </h6>
                          </div>
                        </div>`   
                        
                        dishcard.innerHTML += card;
   
})


let logout = ()=>{
    firebase.auth().signOut()
    .then((res) =>{
        window.location = "userlogin.html"
    } )
}
