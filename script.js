"use strict";

const containers = document.querySelectorAll(".container");
const cardHidden = document.querySelectorAll(".card-hidden");
let count = 0;
let temp;
let tempArr = [];

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("click", function () {
    temp = cardHidden[i];
    temp.classList.add("hidden");

    tempArr.push(temp);

    if (count <= 2) {
      temp.classList.add("hidden");
    } else {
      count = 0;
      tempArr = [];
    }
    if (tempArr.length == 3) {
      if (tempArr[0].id === tempArr[1].id) {
        console.log("if");
        tempArr[0].classList.add("hidden");
        tempArr[1].classList.add("hidden");
        tempArr[0].remove();
        tempArr[1].remove();
        reset();
      } else {
        console.log("else");
        tempArr[0].classList.remove("hidden");
        tempArr[1].classList.remove("hidden");
        tempArr[2].classList.add("hidden");
        reset();
      }
    }
    count++;
  });
}
function reset() {
  tempArr = [];
  tempArr.push(temp);
  count = 0;
}
