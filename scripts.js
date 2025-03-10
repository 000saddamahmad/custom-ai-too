document.addEventListener("DOMContentLoaded", () => {
  const toolList = document.getElementById("tool-list");
  const searchInput = document.getElementById("search");

  if (!toolList) return; // Exit if tool-list isn't found

  fetch("https://cors-anywhere.herokuapp.com/https://github.com/000saddamahmad/custom-ai-too/blob/main/tools.json") // Update this URL
    .then(response => response.json())
    .then(tools => {
      displayTools(tools); // Initial display

      // Search functionality
      searchInput?.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTools = tools.filter(tool =>
          tool.name.toLowerCase().includes(searchTerm) ||
          tool.description.toLowerCase().includes(searchTerm)
        );
        displayTools(filteredTools);
      });

      // Category filter functionality
      document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          const category = e.target.dataset.category;
          const filteredTools = category === "all"
            ? tools
            : tools.filter(tool => tool.category === category);
          displayTools(filteredTools);
        });
      });
    })
    .catch(error => {
      console.error("Error fetching tools:", error);
      toolList.innerHTML = `<p class="error-message">Failed to load tools. Please try again later.</p>`;
    });
});

// Function to display tools
function displayTools(tools) {
  const toolList = document.getElementById("tool-list");
  if (!toolList) return;

  if (tools.length === 0) {
    toolList.innerHTML = `<p class="no-results">No tools found.</p>`;
    return;
  }

  const cards = tools.map(tool => `
    <div class="card">
      <img src="${tool.logo}" alt="${tool.name}" onerror="this.src='logo.png';">
      <div class="card-content">
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <a href="${tool.link}" target="_blank">Visit Tool</a>
      </div>
    </div>
  `).join("");

  toolList.innerHTML = cards;
}
