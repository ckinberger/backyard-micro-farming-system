function initSearch() {
  const input = document.getElementById("globalSearch");
  const resultsBox = document.getElementById("searchResults");

  if (!input || !resultsBox) return;

  input.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();

    if (query.length < 2) {
      resultsBox.innerHTML = "";
      return;
    }

    const results = search(query);
    renderResults(results);
  });
}

function search(query) {
  const terms = query.split(" ");

  return window.SEARCH_INDEX.map(page => {
    let score = 0;

    const text = (page.title + " " + page.content).toLowerCase();

    terms.forEach(term => {
      if (page.title.toLowerCase().includes(term)) score += 5;
      if (text.includes(term)) score += 1;
    });

    return { ...page, score };
  })
  .filter(p => p.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, 10);
}

function renderResults(results) {
  const box = document.getElementById("searchResults");

  if (results.length === 0) {
    box.innerHTML = "<div class='search-empty'>No results found</div>";
    return;
  }

  box.innerHTML = results.map(r => `
    <a class="search-item" href="${r.url}">
      <div class="search-title">${r.title}</div>
      <div class="search-snippet">${r.content.slice(0, 80)}...</div>
    </a>
  `).join("");
}
