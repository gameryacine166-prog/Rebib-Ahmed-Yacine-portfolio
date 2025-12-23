// ====== THEME TOGGLE WITH LOCALSTORAGE ======
const toggle = document.getElementById("toggleTheme");

// Load theme from LocalStorage
if(localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // Save current theme
  if(document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

// ====== SMOOTH SCROLL FOR ALL ANCHORS ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ====== HERO TEXT ANIMATION ON LOAD ======
const heroText = document.querySelector(".hero-content");
window.addEventListener("load", () => {
  heroText.style.opacity = 0;
  heroText.style.transform = "translateY(30px)";
  setTimeout(() => {
    heroText.style.transition = "all 1s ease";
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
  }, 200);
});

