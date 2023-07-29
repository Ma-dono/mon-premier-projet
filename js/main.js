
document.querySelector(".minus-btn").setAttribute("disabled","disabled");
var valuecount

//taking price value in variable
var price = document.getElementById("price").innerText;

//price calculating function
function totalprice() {
    var total = valuecount * price;
    document.getElementById("price").innerText = total
}

//plus button
document.querySelector(".plus-btn").addEventListener("click",function() {
    valuecount = document.getElementById("quantity").value;
    valuecount++;
    document.getElementById("quantity").value = valuecount
    if(valuecount > 1 ){
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled")
    }

    //calling price function
totalprice()

})



//plus button
document.querySelector(".minus-btn").addEventListener("click",function() {
    valuecount = document.getElementById("quantity").value;
    valuecount--;
    document.getElementById("quantity").value = valuecount
    if(valuecount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }
    //calling price function
    totalprice()
})




test2.onclick = remove;

function remove(){
    this.remove
}
    
}