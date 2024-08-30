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


// const buttons = document.querySelectorAll('.popupbtn');
// const popup = document.getElementById('popup');
// const popupText = document.getElementById('popup-text');
// const closeBtn = document.querySelector('.close');
// const commentForm = document.querySelector('form'); 
// const commentTextarea = document.getElementById('comment'); 

// // Data for each ingredient's popup content
// const content = { comm: 'Thank you for your feedback!'
// };

// // Show popup with content for ingredient buttons
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//       const key = button.getAttribute('data-content');
//       popupText.innerText = content[key];
//       popup.style.display = 'flex';
//   });
// });
// // Show popup with content for form submission
// commentForm.addEventListener('submit', (e) => {
//   e.preventDefault(); 
//   popupText.innerText = content['comm'];
//   popup.style.display = 'flex';

//   commentTextarea.value = '';
// });

// // Close popup when the close button is clicked
// closeBtn.addEventListener('click', () => {
//   popup.style.display = 'none';
// });

// // Close popup when clicking outside of it
// window.addEventListener('click', (e) => {
//   if (e.target === popup) {
//       popup.style.display = 'none';
//   }
// });





