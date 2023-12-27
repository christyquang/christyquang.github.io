const body = document.body;

const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem("portfolio-theme");
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

addThemeClass(getBodyTheme, getBtnTheme);

const isDark = () => body.classList.contains("dark");

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem("portfolio-theme"));
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme"));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);
};

const toggleTheme = () =>
  isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun");

btnTheme.addEventListener("click", toggleTheme);

const displayList = () => {
  const navUl = document.querySelector(".nav__list");

  if (btnHamburger.classList.contains("fa-bars")) {
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
  } else {
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    navUl.classList.remove("display-nav-list");
  }
};

btnHamburger.addEventListener("click", displayList);

const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top");

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};

document.addEventListener("scroll", scrollUp);

window.onload = function () {
  type(
    "Hi! I'm ",
    0,
    "typewriter",
    80,
    fadeIn,
    type,
    "Christy Quang",
    0,
    "typewritername",
    220
  );
};
function type(word, i, elementId, delay, callback, ...args) {
  if (i < word.length) {
    document.getElementById(elementId).innerHTML =
      word.substring(0, i + 1) +
      document.getElementById(elementId).innerHTML.substring(i);
    i++;
    setTimeout(
      type,
      Math.floor(Math.random() * 50 + delay - 25),
      word,
      i,
      elementId,
      delay,
      callback,
      ...args
    );
  } else if (callback) {
    callback(...args);
  }
}

function fadeIn(callback, ...args) {
  document.getElementById("fadeInDesc").className = "about__labels";
  callback(...args);
}

const project1 = document.getElementById("animation__container1");
const project1_description = document.getElementById("animation__container2");

function appear(project, description) {
	project.classList.add("none");
	description.classList.remove("none");
	description.classList.add("hidden");
	description.classList.remove("fade-out");
	description.classList.add("fade");
	description.classList.remove("hidden");
}

function appear2(project, description) {
	description.classList.add("none");
	project.classList.remove("none");
	project.classList.add("hidden");
	project.classList.remove("fade-out");
	project.classList.add("fade");
	project.classList.remove("hidden");
}

project1.addEventListener("click", () => {
  project1.classList.remove("fade");
  project1.classList.add("fade-out");
  setTimeout(appear, 500, project1, project1_description);
});

project1_description.addEventListener("click", () => {
  project1_description.classList.remove("fade");
  project1_description.classList.add("fade-out");
  setTimeout(appear2, 500, project1, project1_description);
});

const project2 = document.getElementById("animation__container3");
const project2_description = document.getElementById("animation__container4");

project2.addEventListener("click", () => {
	project2.classList.remove("fade");
	project2.classList.add("fade-out");
	setTimeout(appear, 500, project2, project2_description);
});
  
project2_description.addEventListener("click", () => {
	project2_description.classList.remove("fade");
	project2_description.classList.add("fade-out");
	setTimeout(appear2, 500, project2, project2_description);
});

const project3 = document.getElementById("animation__container5");
const project3_description = document.getElementById("animation__container6");
  
project3.addEventListener("click", () => {
	project3.classList.remove("fade");
	project3.classList.add("fade-out");
	setTimeout(appear, 500, project3, project3_description);
});
	
project3_description.addEventListener("click", () => {
	project3_description.classList.remove("fade");
  project3_description.classList.add("fade-out");
	setTimeout(appear2, 500, project3, project3_description);
});

const design1 = document.getElementById("animation__container7");
const design1_description = document.getElementById("animation__container8");

design1.addEventListener("click", () => {
  design1.classList.remove("fade");
  design1.classList.add("fade-out");
  setTimeout(appear, 500, design1, design1_description);
});

design1_description.addEventListener("click", () => {
  design1_description.classList.remove("fade");
  design1_description.classList.add("fade-out");
  setTimeout(appear2, 500, design1, design1_description);
});

const design2 = document.getElementById("animation__container9");
const design2_description = document.getElementById("animation__container10");

design2.addEventListener("click", () => {
	design2.classList.remove("fade");
	design2.classList.add("fade-out");
	setTimeout(appear, 500, design2, design2_description);
});
  
design2_description.addEventListener("click", () => {
	design2_description.classList.remove("fade");
	design2_description.classList.add("fade-out");
	setTimeout(appear2, 500, design2, design2_description);
});

const design3 = document.getElementById("animation__container11");
const design3_description = document.getElementById("animation__container12");
  
design3.addEventListener("click", () => {
	design3.classList.remove("fade");
	design3.classList.add("fade-out");
	setTimeout(appear, 500, design3, design3_description);
});
	
design3_description.addEventListener("click", () => {
	design3_description.classList.remove("fade");
  design3_description.classList.add("fade-out");
	setTimeout(appear2, 500, design3, design3_description);
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

    