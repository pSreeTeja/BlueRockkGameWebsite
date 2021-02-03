let buttonLogin = document.getElementsByClassName("button")[0];
let buttonSign = document.getElementsByClassName("button")[1];
let body = document.body;
let closeButton = document.getElementsByClassName("closeButton");
let header = document.getElementsByClassName("header")[0];
let footer = document.getElementsByClassName("footer")[0];
let description = document.getElementsByClassName("description")[0];

let mainImg = document.getElementsByClassName("mainImg")[0];

let loginPage = document.getElementsByClassName("loginPage")[0];
let signUpPage = document.getElementsByClassName("signUpPage")[0];

function toggle() {
  footer.classList.toggle("active");
  header.classList.toggle("active");
  description.classList.toggle("active");
  mainImg.classList.toggle("active");
  // loginPage.classList.toggle('active')
  // signUpPage.classList.toggle('active')
}

buttonLogin.addEventListener("click", (event) => {
  toggle();
  loginPage.style.display = "block";
  signUpPage.style.display = "none";

  // loginPage.style.opacity=1;
  // loginPage.style.transition='0.4s';
});
buttonSign.addEventListener("click", (event) => {
  toggle();

  signUpPage.style.display = "block";

  // signUpPage.style.opacity=1;
  // signUpPage.style.transition='0.4s';
});
closeButton[0].addEventListener("click", (event) => {
  loginPage.style.display = "none";
  toggle();

  //   loginPage.style.opacity=0;
});
closeButton[1].addEventListener("click", (event) => {
  toggle();
  signUpPage.style.display = "none";
  // signUpPage.style.opacity=0;
});
