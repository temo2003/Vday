// $(document).ready(function(){
//     $(".container").mouseenter(function(){
//         $(".card").stop().animate({
//             top:"-90px"
//         }, "slow");
//     }).mouseleave(function(){
//         $(".card").stop().animate({
//           top:0
//         }, "slow");
//     });
// });


let card = document.getElementById("card1")
let button = document.getElementById("click")


button.addEventListener("click", function(){
        // card.style.top = "0"
        card.classList.add("active")
})






