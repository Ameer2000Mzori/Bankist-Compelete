// imports
import accountsDataObj from "./createAccountLogic.js";
// selecting elements
const loginEmailInput = document.getElementById("login-Email-Input");
const loginPasswordInput = document.getElementById("login-Password-Input");
const submitLoginBtn = document.getElementsByClassName("submit-Login-Btn")[0];
const notificationMessageEl = document.getElementsByClassName(
  "notification-Message"
)[0];
const loginEl = document.getElementsByClassName("login")[0];

// functions
const loginToAccount = () => {
  let loginUserEmail = loginEmailInput.value;
  let loginUserPass = loginPasswordInput.value;

  const matchingObject = accountsDataObj.find(
    (obj) => obj.userName === loginUserEmail && obj.userPass === loginUserPass
  );

  matchingObject ? userFound(matchingObject) : userNotFoundNoty();
};

// user found function
const userFound = (matchingObject) => {
  console.log("this user is found!");
  console.log("the user data is :", matchingObject);
  userFoundNoty();
};

const userNotFoundNoty = () => {
  notificationMessageEl.style.backgroundColor = "red";
  notificationMessageEl.textContent = "USER NOT FOUND";
  notificationMessageEl.classList.add("active");
  userNoty();
  cleanInputs(loginEmailInput, loginPasswordInput);
};

// account created
const userFoundNoty = () => {
  notificationMessageEl.style.backgroundColor = "green";
  notificationMessageEl.style.color = "black";
  notificationMessageEl.textContent = "LOGGED IN";
  notificationMessageEl.classList.add("active");
  userNoty();
  cleanInputs(loginEmailInput, loginPasswordInput);
};

let nitoCount = 0;
// start userFindNoty
const userNoty = () => {
  let startNitificationInterval = setInterval(() => {
    if (nitoCount < 15) {
      nitoCount++;
    } else {
      nitoCount = 0;
      notificationMessageEl.classList.remove("active");
      clearInterval(startNitificationInterval);
    }
  }, 100);
};

// clean up the inputs function
const cleanInputs = (loginEmailInput, loginPasswordInput) => {
  loginEmailInput.value = "";
  loginPasswordInput.value = "";
  loginEl.classList.remove("active");
};

// eventlinsters
submitLoginBtn.addEventListener("click", loginToAccount);