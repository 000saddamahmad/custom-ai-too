const toolList = document.getElementById("tool-list");

// Fetch tools data from JSON file
async function fetchTools() {
  try {
    const response = await fetch("/tools.json"); // Adjust the path if needed
    if (!response.ok) {
      throw new Error("Failed to fetch tools data");
    }
    const tools = await response.json();
    return tools;
  } catch (error) {
    console.error("Error fetching tools:", error);
    return [];
  }
}

// Display tools
function displayTools(filteredTools) {
  if (!toolList) return; // Exit if tool-list isn’t found (e.g., on non-tool pages)
  toolList.innerHTML = "";
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

// Initialize the page
async function initialize() {
  const tools = await fetchTools();

  // Only run search and filter logic on the index page
  if (document.getElementById("search")) {
    // Search functionality
    document.getElementById("search").addEventListener("input", (e) => {
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

    // Initial display of all tools
    displayTools(tools);
  }
}

// Run the initialization function
initialize();

// Hide splash screen after load
window.addEventListener('load', function() {
  const splashScreen = document.getElementById('splash-screen');
  if (splashScreen) splashScreen.style.display = 'none';
});



