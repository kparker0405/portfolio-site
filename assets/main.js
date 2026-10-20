
    const sidebar = document.getElementById("projectSidebar");
    const content = document.getElementById("projectContent");
    const buttonContainer = document.getElementById("projectNavButton");
    const openButton = document.getElementById("openProjectNav");
    const sectionLinks = document.querySelectorAll(".project-section-link");
    const sections = document.querySelectorAll(".project-section");

    function openProjectNav() {
        sidebar.style.display = "block";
        content.className = "w3-col l9 m8 s12";
        buttonContainer.style.display = "none";

        openButton.setAttribute("aria-expanded", "true");

        updateActiveSection();
    }

    function closeProjectNav() {
        sidebar.style.display = "none";
        content.className = "w3-col l12 m12 s12";
        buttonContainer.style.display = "block";

        openButton.setAttribute("aria-expanded", "false");
        openButton.focus();
    }

    function updateActiveSection() {
        const navigationOffset = 100;
        let activeSectionId = sections[0]?.id;

        sections.forEach(function (section) {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= navigationOffset) {
                activeSectionId = section.id;
            }
        });

        sectionLinks.forEach(function (link) {
            const targetId = link.getAttribute("href").substring(1);
            const isActive = targetId === activeSectionId;

            link.classList.toggle("w3-theme-d3", isActive);
            link.classList.toggle("w3-text-white", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            sidebar.style.display === "block"
        ) {
            closeProjectNav();
        }
    });

  openButton.setAttribute("aria-expanded", "true");
updateActiveSection();
