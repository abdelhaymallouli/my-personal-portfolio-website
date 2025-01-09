// Render About Section
function renderAbout(about) {
    console.log("About:", about);
  }
  
  // Render Projects Section
  function renderProjects(projects) {
    console.log("Projects:", projects);
  }
  
  // Fetch Data from Server
  async function fetchData() {
    const response = await fetch('http://localhost:3000/api/data');
    const data = await response.json();
    console.log("Fetched Data:", data);
    renderAbout(data.about);
    renderProjects(data.projects);
  }
  
  // Update Data on Server
  async function updateData(updatedData) {
    const response = await fetch('http://localhost:3000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });
    const result = await response.text();
    console.log(result);
  }
  
  // Call Fetch Data to Initialize Page
  fetchData();
  