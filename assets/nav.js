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
