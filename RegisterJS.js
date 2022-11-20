let pwd1 = document.querySelector(".pwd1");
let pwd2 = document.querySelector(".pwd2");
let formInfo = document.querySelector(".form-info");
var agr = document.querySelector(".agr");
let submitBTN = document.querySelector(".submit");
let agrBool = false;
let confermPwBool = false;

agr.addEventListener("click", function () {
  if (agr.checked) {
    agrBool = true;
  } else {
    agrBool = false;
  }
  console.log("agr bool : ", agrBool);
  console.log("confermPwBool : ", confermPwBool);
});

pwd2.onchange = function () {
  if (pwd1.value == pwd2.value) {
    confermPwBool = true;
  } else {
    confermPwBool = false;
  }
};
pwd1.onchange = function () {
  if (pwd1.value == pwd2.value) {
    confermPwBool = true;
  } else {
    confermPwBool = false;
  }
};

document.body.onclick = function () {
  if (confermPwBool == true && agrBool == true && formInfo.value.length != 0) {
    submitBTN.classList.add("active");
    submitBTN.removeAttribute("disabled");
  } else {
    submitBTN.classList.remove("active");
    submitBTN.setAttribute("disabled");
  }
};
