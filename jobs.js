const jobs = [
  {
    id: 1,
    company: "TechNova Bangladesh Ltd.",
    position: "Frontend Developer (React)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳80,000 - ৳120,000",
    description: "Develop modern, responsive web interfaces using React and Tailwind CSS.",
    status: "All"
  },
  {
    id: 2,
    company: "CodeCrafters BD",
    position: "Web Designer",
    location: "Chattogram, Bangladesh",
    type: "Part-time",
    salary: "৳40,000 - ৳60,000",
    description: "Design user-friendly websites and landing pages for local and international clients.",
    status: "All"
  },
  {
    id: 3,
    company: "Orange Solutions Ltd.",
    position: "Data Analyst",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳90,000 - ৳140,000",
    description: "Analyze business data and create insightful dashboards and reports.",
    status: "All"
  },
  {
    id: 4,
    company: "CloudWare Systems",
    position: "Backend Engineer (Java)",
    location: "Sylhet, Bangladesh",
    type: "Full-time",
    salary: "৳100,000 - ৳160,000",
    description: "Build secure and scalable backend services using Java, Spring Boot, and SQL.",
    status: "All"
  },
  {
    id: 5,
    company: "UX Lab BD",
    position: "UI/UX Designer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳70,000 - ৳110,000",
    description: "Design intuitive user experiences and high-quality UI components.",
    status: "All"
  },
  {
    id: 6,
    company: "NextGen Software",
    position: "JavaScript Developer",
    location: "Remote (Bangladesh)",
    type: "Full-time",
    salary: "৳85,000 - ৳130,000",
    description: "Work with modern JavaScript frameworks to build scalable web applications.",
    status: "All"
  },
  {
    id: 7,
    company: "Startup Hive BD",
    position: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    salary: "৳95,000 - ৳150,000",
    description: "Develop end-to-end features using React, Node.js, and MSSQL.",
    status: "All"
  },
  {
    id: 8,
    company: "Innovate IT Ltd.",
    position: "Senior Software Engineer",
    location: "Rajshahi, Bangladesh",
    type: "Full-time",
    salary: "৳120,000 - ৳180,000",
    description: "Lead development teams and design enterprise-level software solutions.",
    status: "All"
  }
];

let activeTab = "All";

const jobsContainer = document.getElementById("jobsContainer");

function renderJobs() {

  jobsContainer.innerHTML = "";

  const filtered = jobs.filter(job => {
    if (activeTab === "All") return true;
    return job.status === activeTab;
  });

  document.getElementById("sectionCount").innerText = filtered.length + " jobs";

  if (filtered.length === 0) {
    jobsContainer.innerHTML = `
      <div class="jobs">
    <img src="./image/jobs.png">
        <h3>No jobs available</h3>
        <p>Check back soon for new job opportunities</p>
      </div>
    `;
    return;
  }

  filtered.forEach(job => {

    const card = document.createElement("div");
    card.className = "job-card";

    const statusClass = job.status.toLowerCase();

    card.innerHTML = `
      <button class="btn-delete"><img src="./image/delete.png"></button>
      <h3>${job.company}</h3>
      <p><strong>${job.position}</strong></p>
      <p class="meta">${job.location} • ${job.type} • ${job.salary}</p>
      <span class="status ${statusClass}">${job.status === "All" ? "NOT APPLIED" : job.status.toUpperCase()}</span>
      <p>${job.description}</p>
      <div class="buttons">
        <button class="btn-interview">Interview</button>
        <button class="btn-rejected">Rejected</button>
      </div>
    `;
    card.querySelector(".btn-interview").onclick = () => {
      job.status = job.status === "Interview" ? "All" : "Interview";
      updateDashboard();
      renderJobs();
    };
    card.querySelector(".btn-rejected").onclick = () => {
      job.status = job.status === "Rejected" ? "All" : "Rejected";
      updateDashboard();
      renderJobs();
    };
    card.querySelector(".btn-delete").onclick = () => {
      const index = jobs.findIndex(j => j.id === job.id);
      jobs.splice(index, 1);
      updateDashboard();
      renderJobs();
    };

    jobsContainer.appendChild(card);
  });
}
function updateDashboard() {
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = jobs.filter(j => j.status === "Interview").length;
  document.getElementById("rejectedCount").innerText = jobs.filter(j => j.status === "Rejected").length;
}
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    activeTab = tab.dataset.tab;
    renderJobs();
  };
});

updateDashboard();
renderJobs();
