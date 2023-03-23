"use strict";

const processRight = document.querySelector(".main__process-right");
const processRightLink = document.querySelectorAll(".main__process-right-link");
const accActivities = document.querySelector(".main__process-pro");
const depositMoney = document.querySelector(".main__process-dep");
const sendMoney = document.querySelector(".main__process-wit");
const mainHead = document.querySelector(".main__head");

const billWindow = document.querySelector(".main__process-bill-left");
const depositWindow = document.querySelector(".main__process-deposit-left");
const withdrawalWindow = document.querySelector(
  ".main__process-withdrawal-left"
);

accActivities.addEventListener("click", (e) => {
  e.preventDefault();
  billWindow.classList.remove("hidden");
  depositWindow.classList.add("hidden");
  withdrawalWindow.classList.add("hidden");
  mainHead.textContent = "Hesap Hareketleri";
});
depositMoney.addEventListener("click", (e) => {
  e.preventDefault();
  billWindow.classList.add("hidden");
  depositWindow.classList.remove("hidden");
  withdrawalWindow.classList.add("hidden");
  mainHead.textContent = "Para Yatır";
});
sendMoney.addEventListener("click", (e) => {
  e.preventDefault();
  billWindow.classList.add("hidden");
  depositWindow.classList.add("hidden");
  withdrawalWindow.classList.remove("hidden");
  mainHead.textContent = "Para Gönder";
});
