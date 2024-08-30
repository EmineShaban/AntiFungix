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