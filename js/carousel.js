const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger){
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

const typingElement = document.querySelector(".typing");

if(typingElement){

    const text =
    "Web Designer | Student | Future Developer";

    let i = 0;

    function type(){

        if(i < text.length){

            typingElement.innerHTML += text.charAt(i);
            i++;

            setTimeout(type, 80);
        }
    }

    type();
}

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// load saved theme
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});