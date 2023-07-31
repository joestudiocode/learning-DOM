//Event Handling

// const cardFull = document.querySelector(".card");
// const closeRed = document.querySelector(".close");

// closeRed.addEventListener("click", function () {
//   cardFull.style.display = "none";
// });

//Dom Traversal

// const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");
// console.log(close)

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // alert("tombol ke " + i)
//     card[i].style.display = "none";
//     // e.target.parentElement.style.display = "none";
//   });
// }

// close.forEach(function (param) {
//   param.addEventListener("click", function (e) {
//     e.target.parentElement.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

//preventdefault  is the method that works for prevent happening default events from a DOM, example the tag 'a' if we click, then the browser page will be reload, or a form if we click submit button then will be reaload to.


//if use parentElement we can pile it up, up to grandfather

// {
//   ("Method");
//   //parentNOde
//   //parentElement
//   //nextSibling
//   //nextElementSibling ----- use this
//   //previousSibling
//   //previousElementSibling ------ use this
// }


// const cards = document.querySelectorAll('.card');
// card.forEach(function(card) {
//   card.addEventListener('click', function(e) {
//     alert('ok')
//   });
// });

const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
  if(e.target.className == 'close') {
    e.target.parentElement.parentElement.style.display= 'none'
    e.preventDefault();
  }
});
