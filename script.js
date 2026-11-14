document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#arac-arama");
  const clearButton = document.querySelector("#arac-arama-temizle");
  const countOutput = document.querySelector("#arac-sayaci");
  const noResultsMessage = document.querySelector("#sonuc-yok");
  const cards = [...document.querySelectorAll("article h3")].map((heading) => ({
    card: heading.closest("article"),
    title: heading.textContent.trim().toLocaleLowerCase("tr-TR"),
  }));

  if (
    !(searchInput instanceof HTMLInputElement) ||
    !(clearButton instanceof HTMLButtonElement) ||
    !(countOutput instanceof HTMLElement) ||
    !(noResultsMessage instanceof HTMLElement) ||
    cards.some(({ card }) => !(card instanceof HTMLElement))
  ) {
    return;
  }

  const updateResults = () => {
    const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
    let visibleCount = 0;

    cards.forEach(({ card, title }) => {
      const isMatch = title.includes(query);
      card.hidden = !isMatch;
      if (isMatch) {
        visibleCount += 1;
      }
    });

    countOutput.textContent = `${visibleCount} kart gösteriliyor`;
    noResultsMessage.hidden = visibleCount !== 0;
  };

  searchInput.addEventListener("input", updateResults);

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    updateResults();
    searchInput.focus();
  });

  updateResults();
});
