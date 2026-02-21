document.addEventListener("DOMContentLoaded", function () {
  const aboutPieces = document.querySelectorAll("#about .piece");
aboutPieces.forEach(piece => {
  setTimeout(() => {
    piece.classList.add("show");
  }, 100); // small delay before first piece
});
  // =========================
  // SECTION SHOW/HIDE
  // =========================
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  function animateSkills() {
    const skills = document.querySelectorAll(".skill-fill");
    skills.forEach(skill => {
      const percent = skill.getAttribute("data-percent");
      if (!document.body.classList.contains("no-anim")) {
        setTimeout(() => {
          skill.style.width = percent; // animated fill
        }, 50);
      } else {
        skill.style.transition = "none";
        skill.style.width = percent; // instant fill
      }
    });
  }

  function resetSkills() {
    const skills = document.querySelectorAll(".skill-fill");
    skills.forEach(skill => skill.style.width = "0");
  }

  function showSection(id) {
    sections.forEach(section => section.classList.remove("active"));
    const activeSection = document.getElementById(id);
    if (activeSection) activeSection.classList.add("active");

    if (id === "skills") animateSkills();
    else resetSkills();
  }

  // Show About on page load
  showSection("about");

  // Navbar click control
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      showSection(targetId);
    });
  });

  // =========================
  // DROPDOWN SYSTEM
  // =========================
  const resumeBtn = document.getElementById("resume-btn");
  const resumeDropdown = document.getElementById("resume-dropdown");
  const settingsBtn = document.getElementById("settings-btn");
  const settingsDropdown = document.getElementById("settings-dropdown");

  resumeBtn.addEventListener("click", e => {
    e.preventDefault();
    resumeDropdown.classList.toggle("show");
    settingsDropdown.classList.remove("show");
  });

  settingsBtn.addEventListener("click", e => {
    e.preventDefault();
    settingsDropdown.classList.toggle("show");
    resumeDropdown.classList.remove("show");
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".nav-dropdown")) {
      resumeDropdown.classList.remove("show");
      settingsDropdown.classList.remove("show");
    }
  });

  // =========================
  // THEME TOGGLE
  // =========================
  document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("light-theme");
  };

  // =========================
  // FONT SIZE
  // =========================
  document.getElementById("font-small").onclick = () => document.body.style.fontSize = "14px";
  document.getElementById("font-medium").onclick = () => document.body.style.fontSize = "16px";
  document.getElementById("font-large").onclick = () => document.body.style.fontSize = "18px";

  // =========================
// ANIMATION TOGGLE FIX
// =========================
const animToggle = document.getElementById("anim-toggle");
if (animToggle) {
  animToggle.addEventListener("click", function () {
    document.body.classList.toggle("no-anim");

    const skills = document.querySelectorAll('.skill-fill');

    if (document.body.classList.contains("no-anim")) {
      animToggle.textContent = "Animation OFF";
      animToggle.style.background = "#ff4d4d";
      animToggle.style.color = "#fff";
      
      // Disable transition
      skills.forEach(skill => skill.style.transition = "none");
    } else {
      animToggle.textContent = "Animation ON";
      animToggle.style.background = "#00c8ff";
      animToggle.style.color = "#111";
      
      // Restore transition
      skills.forEach(skill => skill.style.transition = "width 1s ease-in-out");
    }
  });
}

  // =========================
  // PROJECT ACCORDION
  // =========================
  const accordionBtns = document.querySelectorAll('.accordion-btn');
  accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      if (content.classList.contains('open')) {
        content.classList.remove('open');
      } else {
        document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
        content.classList.add('open');
      }
    });
  });

});
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
