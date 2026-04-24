async function loadNav() {
  const navContainer = document.getElementById("nav");

  if (!navContainer) return;

  const res = await fetch("/backyard-micro-farming-system/assets/nav.html");
  const html = await res.text();

  navContainer.innerHTML = html;

  highlightActiveLink();
}

function highlightActiveLink() {
  const links = document.querySelectorAll(".site-nav a");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (currentPath.includes(href.replace("/backyard-micro-farming-system", ""))) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", loadNav);

async function loadNav() {
  const navContainer = document.getElementById("nav");
  if (!navContainer) return;

  const res = await fetch("/backyard-micro-farming-system/assets/nav.html");
  const html = await res.text();

  navContainer.innerHTML = html;

  setupSearch();
  highlightActiveLink();
}

function setupSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  input.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    const links = document.querySelectorAll("a");

    links.forEach(link => {
      const text = link.textContent.toLowerCase();

      if (query === "") {
        link.style.display = "";
      } else {
        link.style.display = text.includes(query) ? "" : "none";
      }
    });
  });
}

function highlightActiveLink() {
  const links = document.querySelectorAll(".site-nav a");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (currentPath.includes(href.replace("/backyard-micro-farming-system", ""))) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", loadNav);
