document.addEventListener("DOMContentLoaded", function () {
    const jsonUrl = "https://github.com/000saddamahmad/custom-ai-too/blob/main/tools.json"; // Update with your actual JSON URL
    const toolListContainer = document.getElementById("tool-list");
    const searchInput = document.getElementById("search");
    const categoryItems = document.querySelectorAll(".dropdown-item");

    let tools = [];

    // Fetch JSON data from GitHub
    async function fetchTools() {
        try {
            const response = await fetch(jsonUrl);
            tools = await response.json();
            displayTools(tools);
        } catch (error) {
            console.error("Error loading tools:", error);
            toolListContainer.innerHTML = "<p>Failed to load tools. Please try again later.</p>";
        }
    }

    // Display tools dynamically
    function displayTools(filteredTools) {
        if (!toolListContainer) return;
        toolListContainer.innerHTML = ""; // Clear previous content

        filteredTools.forEach((tool, index) => {
            const card = `
                <div class="col-md-4 tool-item">
                    <div class="tool-card-inner">
                        <span class="tool-number">${index + 1}.</span>
                        <img src="${tool.logo || 'default-logo.png'}" alt="${tool.name}" class="tool-logo" onerror="this.src='default-logo.png';">
                        <span class="tool-name">${tool.name}</span>
                        <a href="${tool.link}" target="_blank" class="visit-btn">Visit</a>
                    </div>
                </div>
            `;
            toolListContainer.innerHTML += card;
        });
    }

    // Search Functionality
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredTools = tools.filter(tool =>
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm)
            );
            displayTools(filteredTools);
        });
    }

    // Category Filter Functionality
    categoryItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;
            const filteredTools = category === "all"
                ? tools
                : tools.filter(tool => tool.category === category);
            displayTools(filteredTools);
        });
    });

    // Fetch and display tools on load
    fetchTools();
});






