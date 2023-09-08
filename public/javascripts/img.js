
let image = document.getElementById("image")
// This line declares a variable ,HTML <img> element on the page with the ID "image".

let text = document.getElementById("p")
// It is assuming that there is an HTML element (e.g., <p>) on the page with the ID "p".


let timeOut;
// It will be used later to store the interval ID when setting up the image rotation timer


// is defined containing multiple image URLs as strings
let images = [
     "https://images.unsplash.com/photo-1589439068658-04641fc79766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZXNob3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
     "https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3Rvcm15JTIwY2xvdWRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
     "https://images.unsplash.com/photo-1613216123334-b5327f5adb86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
     "https://images.unsplash.com/photo-1569021939949-30ccd9e270f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMGFuZCUyMHVtYnJlbGxhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
     "https://images.unsplash.com/photo-1516166328576-82e16a127024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
     "https://images.unsplash.com/photo-1469433791803-c2719135f970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
     "https://images.unsplash.com/photo-1529528744093-6f8abeee511d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
     "https://images.unsplash.com/photo-1524007502914-1e3cd3548376?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
     "https://images.unsplash.com/photo-1492045551784-ece7e6b2e4c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
     "https://images.unsplash.com/photo-1514530963096-e9aa1f285eb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
     "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
     "https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
]

//This ensures that any previous image rotation timer is stopped before setting up a new one
clearInterval(timeOut);
timeOut = setInterval(function () {

     // This random number will be used as an index to select a random image URL and color from the arrays 
     let random = Math.floor(Math.random() * 12);

     //<img> sec ka use element to the randomly selected image URL from the images array.
     image.src = images[random];

     // text.style.color = p[random];
}, 2000)


// to the randomly selected color from the p
var p = [
     "red",
     "yellow",
     "black",
     "green",
     "grey",
     "rgba(0, 0, 0, 0.635)"
]