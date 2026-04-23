
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop redirect
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        status.innerHTML = "<p style='color:green;'>Thanks! Your message was sent successfully.</p>";
        form.reset();
      } else {
        status.innerHTML = "<p style='color:red;'>Oops! Something went wrong.</p>";
      }
    } catch (error) {
      status.innerHTML = "<p style='color:red;'>Network error. Please try again later.</p>";
    }
  });
