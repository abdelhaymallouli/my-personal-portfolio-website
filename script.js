    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

// Change of my Age auto
    function calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        
        let age = today.getFullYear() - birth.getFullYear();
        const hasBirthdayPassed = today.getMonth() > birth.getMonth() || 
                                  (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

        if (!hasBirthdayPassed) {
            age--; 
        }

        document.getElementById("year").textContent = age;
    }

    calculateAge("2006-02-05");


    async function loadProjects() {
        try {
            const response = await fetch('project.json'); // Load JSON file
            const projects = await response.json();
            const portfolioGrid = document.querySelector('.portfolio-grid');
            portfolioGrid.innerHTML = ""; // Clear existing content

            projects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.classList.add("portfolio-item");

                projectCard.innerHTML = `
                    <a href="${project.url}" target="_blank">
                        <img src="${project.image}" alt="${project.name}">
                        <h3>${project.name}</h3>
                        <p>${project.description}</p>
                    </a>
                `;

                portfolioGrid.appendChild(projectCard);
            });
        } catch (error) {
            console.error("Error loading projects:", error);
        }
    }

    loadProjects();

// contact Section
document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    const data = {};
  
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    console.log('Form Data Submitted:', data);
  
    alert('Your message has been successfully submitted!');
    this.reset();
  });

  

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent Successfully!');
  });