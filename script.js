const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const header = document.querySelector(".site-header");

if (header && !document.querySelector(".top-contact-strip")) {
  header.insertAdjacentHTML(
    "beforebegin",
    `<div class="top-contact-strip">
      <div class="container top-contact-inner">
        <div class="top-contact-links">
          <a href="tel:+917737711604">Call: +91-77377 11604</a>
          <a href="mailto:caanshulagiwal@gmail.com">caanshulagiwal@gmail.com</a>
        </div>
        <div class="top-contact-actions">
          <a href="service.html">Find Services</a>
          <a class="strip-cta" href="contact.html">Book Consultation</a>
        </div>
      </div>
    </div>`
  );
}

if (header && !document.querySelector(".update-ribbon")) {
  header.insertAdjacentHTML(
    "afterend",
    `<div class="update-ribbon">
      <div class="container update-ribbon-inner">
        <strong>Latest Updates</strong>
        <div class="update-track" aria-label="Tax and compliance updates">
          <span>GST Returns</span>
          <span>Income Tax Filing</span>
          <span>Audit Support</span>
          <span>Company Compliance</span>
          <span>Business Automation</span>
          <span>Data Analytics</span>
          <span>Investment Planning</span>
        </div>
      </div>
    </div>`
  );
}

if (toggle && nav) {
  const closeNav = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    const isOpen = nav.classList.contains("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      closeNav();
    }
  });
}

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

