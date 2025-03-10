 document.addEventListener("DOMContentLoaded", () => {
  const toolList = document.getElementById("tool-list");

  if (!toolList) return; // Exit if tool-list isn't found

  // Fetch data from JSON file
  fetch("tools.json")
    .then(response => response.json())
    .then(tools => {
      displayTools(tools); // Initial display of all tools

      // Search functionality
      document.getElementById("search")?.addEventListener("input", (e) => {
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
    .catch(error => console.error("Error fetching tools:", error));
});

// Function to display tools
function displayTools(filteredTools) {
  const toolList = document.getElementById("tool-list");
  if (!toolList) return;

  toolList.innerHTML = ""; // Clear previous content
  filteredTools.forEach(tool => {
    const card = `
      <div class="col-md-4">
        <div class="card">
          <img src="${tool.logo}" class="card-img-top" alt="${tool.name}" onerror="this.src='logo.png';">
          <div class="card-body">
            <h5 class="card-title">${tool.name}</h5>
            <p class="card-text">${tool.description}</p>
            <a href="${tool.link}" target="_blank" class="btn btn-primary">Visit Tool</a>
          </div>
        </div>
      </div>
    `;
    toolList.innerHTML += card;
  });
}
