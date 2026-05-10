const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const navCollapse = document.getElementById("portfolioNav");
const navLinks = document.querySelectorAll("#portfolioNav .nav-link");

if (form && status) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.innerHTML =
          "<p style='color:green;'>Thanks! Your message was sent successfully.</p>";
        form.reset();
      } else {
        status.innerHTML =
          "<p style='color:red;'>Oops! Something went wrong.</p>";
      }
    } catch (error) {
      status.innerHTML =
        "<p style='color:red;'>Network error. Please try again later.</p>";
    }
  });
}

if (navCollapse && window.bootstrap) {
  const mobileNav = new bootstrap.Collapse(navCollapse, { toggle: false });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        mobileNav.hide();
      }
    });
  });
}
