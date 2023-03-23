"use strict";

const nav = document.querySelector(".nav");
const sections = document.querySelectorAll(".section");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const loginWindow = document.querySelector(".login-window");
const innerLoginWindow = document.querySelector(".login-window__login");
const innerRegisterWindow = document.querySelector(".login-window__register");

const btnHome = document.querySelector(".btn-home");
const btnLogin = document.querySelector("#btn-login");
const btnWLogin = document.querySelector(".header-login");
const btnWRegister = document.querySelector(".header-register");

// Sağ alt köşedeki açılış ekranına giden buton
btnHome.addEventListener("click", (e) => {
  e.preventDefault();
  header.scrollIntoView({ behavior: "smooth" });
});

//Sectionların görünüm animasyonu
const sectionAnim = function () {
  const observeAnim = function (entries, observe) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observe.unobserve(entry.target);
  };

  const observeAnimOptions = {
    root: null,
    threshold: 0.08,
  };

  const observeAnimSeem = new IntersectionObserver(
    observeAnim,
    observeAnimOptions
  );

  sections.forEach((sec) => {
    sec.classList.add("section--hidden");
    observeAnimSeem.observe(sec);
  });
};
sectionAnim();

//nav link geçiş animasyonu
const navLinkAnim = function () {
  const login = function (e) {
    overlay.classList.remove("hidden");
    loginWindow.classList.remove("hidden");

    addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        overlay.classList.add("hidden");
        loginWindow.classList.add("hidden");
      }
    });
  };

  nav.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const sec = document.querySelector(`.${e.target.id}`);
    sec.scrollIntoView({ behavior: "smooth" });
  });
};
navLinkAnim();

//Giriş'e tıklanırsa login ekranı için gerekli kodlar
btnLogin.addEventListener("click", function (e) {
  overlay.classList.remove("hidden");
  loginWindow.classList.remove("hidden");

  addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.classList.add("hidden");
      loginWindow.classList.add("hidden");
    }
  });
});

//Giriş ve Kayıt olma ekranları geçiş
const loginAndRegisterWindow = function () {
  btnWLogin.addEventListener("click", (e) => {
    e.preventDefault();
    btnWRegister.style.background = "var(--color-gray)";
    btnWLogin.style.background = "var(--color-light-gold--2)";
    innerLoginWindow.classList.remove("hidden");
    innerRegisterWindow.classList.add("hidden");
  });
  btnWRegister.addEventListener("click", (e) => {
    e.preventDefault();
    btnWLogin.style.background = "var(--color-gray)";
    btnWRegister.style.background = "var(--color-light-gold--2)";
    innerRegisterWindow.classList.remove("hidden");
    innerLoginWindow.classList.add("hidden");
  });
};
loginAndRegisterWindow();
