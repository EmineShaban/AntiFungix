let q = document.getElementsByClassName("q");
let a = document.getElementsByClassName("a");
const onOpen = (e) => {
  if (e.target.classList == "q") {
    console.log(e.target.parentElement.children[1]);
    for (let i = 0; i < a.length; i++) {
      a[i].style.display = "none";
    }
    e.target.parentElement.children[1].style.display = "block";
  }
};
for (let index = 0; index < q.length; index++) {
  q[index].addEventListener("click", onOpen);
}





// review popup
const button = document.getElementsByClassName('submitbtn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault()
  popup.style.display = 'flex';
  form.reset()

})
// button[0].addEventListener('click', (e) => {

// })



// Close popup when the close button is clicked
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});



// order
const closeBtn2 = document.getElementsByClassName('close2');

const order = document.getElementsByClassName('order');
const popupOrder = document.getElementById('popup-order');

console.log(order)

for (let i = 0; i < order.length; i++) {
  order[i].addEventListener('click', (e) => {
    e.preventDefault();
    console.log("order")
    popupOrder.style.display = 'flex';

  })
}

 
// Close popup when the close button is clicked
closeBtn2[0].addEventListener('click', () => {
  popupOrder.style.display = 'none';
});

// Close popup when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === popupOrder) {
    popupOrder.style.display = 'none';
  }
});

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const dropbtn = document.querySelector('.dropbtn');

dropbtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the document
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdownContent.style.display = 'none';
    }
});