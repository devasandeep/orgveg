var loginText = document.querySelector(".title-text .login");
var loginForm = document.querySelector("form.login");
var loginBtn = document.querySelector("label.login");
var signupBtn = document.querySelector("label.signup");
var signupLink = document.querySelector("form .signup-link a");
console.log("hlo");

function signb(){
    document.querySelector("form.login").style.marginLeft = "-50%";
    document.querySelector(".title-text .login").style.marginLeft = "-50%";
    console.log("hlo");
    document.querySelector("label.signup").click();
  }
function loger(){
    document.querySelector("form.login").style.marginLeft = "0%";
    document.querySelector(".title-text .login").style.marginLeft = "0%";
  console.log("loger");
}
