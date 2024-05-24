// Event listener for horizontal tab items
document.querySelectorAll(".horizontal_tab div").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".horizontal_tab div")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    alert(`You switched to ${tab.querySelector("p").innerText}`);
  });
});

// Event listener for search filter
document
  .querySelector(".search_filter-search")
  .addEventListener("click", () => {
    let searchTerm = prompt("Enter your search term:");
    if (searchTerm) {
      alert(`Searching for: ${searchTerm}`);
    }
  });

// Event listener for new employee button
document.querySelector(".new_employee").addEventListener("click", () => {
  alert("Redirecting to the new employee form...");
});

// Event listener for export button
document.querySelector(".export").addEventListener("click", () => {
  alert("Exporting data...");
});

// Event listener for filter button
document.querySelector(".filter_button").addEventListener("click", () => {
  alert("Opening filter options...");
});
