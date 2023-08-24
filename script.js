let sub = document.querySelector(".sub");
let color = document.querySelector(".color");
let counterdiv = document.querySelector(".counter-div");
let head = document.querySelector(".head");

sub.addEventListener("click", function () {
  let randomcolor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomcolor;
  color.textContent = "#" + randomcolor;
  head.style.color = "#" + randomcolor;
  // let randomcolor = Math.random().toString(16).substring(2,8);

  console.log(randomcolor);
});
