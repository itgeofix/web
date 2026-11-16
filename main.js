/* Web3Forms: paste your access key from web3forms.com here. */
const WEB3FORMS_ACCESS_KEY = "5bbf9e48-5b67-423a-b62b-8eb74401febd";

/* Edit contact details here. Leave WhatsApp empty until a real number is supplied. */
const ITGEOFIX_CONTACT = {
  phoneLabel: "551 91 33 03",
  phoneTel: "+995551913303",
  email: "itgeofix@gmail.com",
  whatsappNumber: "",
  facebookUrl: "https://www.facebook.com/profile.php?id=61596451718953"
};

const navItems = [
  ["მთავარი", "index.html"],
  ["IT მომსახურებები", "services.html"],
  ["ავტო მომსახურებები", "auto-services.html"],
  ["ფასები", "pricing.html"],
  ["ჩვენ შესახებ", "about.html"],
  ["კონტაქტი", "contact.html"]
];

const header = `
  <div class="topline"><div class="wrap"><span>IT და ავტო მომსახურება • ორი ცალკე მიმართულება</span></div></div>
  <header class="site-header"><div class="wrap nav-wrap">
    <a class="brand" href="index.html" aria-label="ITGEOFIX — მთავარი"><img class="brand-logo" src="logo.png" alt="ITGEOFIX ლოგო" width="46" height="46"><span><span class="brand-name">ITGEOFIX</span><span class="brand-tag">IT &amp; AUTO SUPPORT</span></span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">მენიუ <span aria-hidden="true">＋</span></button>
    <nav class="primary-nav" id="primary-nav" aria-label="მთავარი ნავიგაცია">
      ${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
      <a class="nav-cta" href="contact.html">შეკვეთის დატოვება</a>
    </nav>
  </div></header>`;

const footer = `
  <footer class="site-footer"><div class="wrap">
    <div class="footer-grid">
      <div><a class="brand" href="index.html"><img class="brand-logo" src="logo.png" alt="ITGEOFIX ლოგო" width="46" height="46"><span><span class="brand-name">ITGEOFIX</span><span class="brand-tag">IT &amp; AUTO SUPPORT</span></span></a><p class="footer-copy">კომპიუტერული და ავტო მომსახურებები — ორი ცალკე მიმართულება.</p></div>
      <div><div class="footer-title">საიტის რუკა</div><div class="footer-links">${navItems.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</div></div>
      <div><div class="footer-title">კონტაქტი</div><div class="footer-links"><span data-phone-label>${ITGEOFIX_CONTACT.phoneLabel}</span><a href="mailto:${ITGEOFIX_CONTACT.email}">${ITGEOFIX_CONTACT.email}</a><a href="contact.html">შეკვეთის ფორმა</a><span data-social="facebook">Facebook</span></div></div>
    </div>
    <div class="footer-bottom"><span>© <span data-year></span> ITGEOFIX</span><span>საბოლოო ფასი მომსახურების დაწყებამდე თანხმდება.</span></div>
  </div></footer>
  <button class="back-top" type="button" aria-label="გვერდის დასაწყისში დაბრუნება">↑</button>`;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#site-header")?.insertAdjacentHTML("afterbegin", header);
  document.querySelector("#site-footer")?.insertAdjacentHTML("afterbegin", footer);
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  document.querySelectorAll("[data-phone-label]").forEach(el => {
    const link = document.createElement("a");
    link.href = `tel:${ITGEOFIX_CONTACT.phoneTel}`;
    link.textContent = ITGEOFIX_CONTACT.phoneLabel;
    link.style.color = "inherit";
    el.replaceChildren(link);
  });
  document.querySelectorAll("[data-whatsapp-label]").forEach(el => {
    if (/^\d{8,15}$/.test(ITGEOFIX_CONTACT.whatsappNumber)) el.textContent = ITGEOFIX_CONTACT.whatsappNumber;
  });
  document.querySelectorAll("[data-social='facebook']").forEach(el => {
    const url = ITGEOFIX_CONTACT.facebookUrl;
    if (!/^https:\/\//i.test(url)) return;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Facebook გვერდი ↗";
    el.replaceWith(link);
  });

  const ICONS = {
    tel: '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/>',
    mail: '<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/>',
    fb: '<path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>'
  };
  const addIcon = (sel, key) => document.querySelectorAll(sel).forEach(a => {
    if (a.querySelector(".contact-icon")) return;
    a.insertAdjacentHTML("afterbegin", `<svg class="contact-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">${ICONS[key]}</svg>`);
  });
  addIcon('a[href^="tel:"]', "tel");
  addIcon('a[href^="mailto:"]', "mail");
  addIcon('a[href*="facebook.com"]', "fb");

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".primary-nav a").forEach(link => {
    if (link.getAttribute("href") === current) link.setAttribute("aria-current", "page");
  });

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    nav?.classList.toggle("open", open);
    toggle.innerHTML = open ? 'დახურვა <span aria-hidden="true">−</span>' : 'მენიუ <span aria-hidden="true">＋</span>';
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  }));

  const backTop = document.querySelector(".back-top");
  const updateTop = () => backTop?.classList.toggle("visible", window.scrollY > 420);
  window.addEventListener("scroll", updateTop, { passive: true });
  updateTop();
  backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const open = item?.classList.toggle("open");
      button.setAttribute("aria-expanded", String(Boolean(open)));
    });
  });

  const search = document.querySelector("#service-search");
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll("[data-service-card]")];
  const empty = document.querySelector(".empty-state");
  let activeCategory = "all";
  const filterCards = () => {
    const query = (search?.value || "").trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const category = card.dataset.category || "";
      const haystack = card.textContent.toLocaleLowerCase();
      const show = (activeCategory === "all" || category === activeCategory) && haystack.includes(query);
      card.hidden = !show;
      if (show) visible++;
    });
    if (empty) empty.style.display = visible ? "none" : "block";
  };
  search?.addEventListener("input", filterCards);
  filterButtons.forEach(button => button.addEventListener("click", () => {
    activeCategory = button.dataset.filter || "all";
    filterButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    filterCards();
  }));

  const form = document.querySelector("#request-form");
  const message = document.querySelector("#form-message");
  const whatsappLink = document.querySelector("#whatsapp-link");
  const serviceSelect = document.querySelector("#service");
  const serviceParam = new URLSearchParams(location.search).get("service");
  if (serviceSelect && serviceParam) {
    const matchingOption = [...serviceSelect.options].find(option => option.value === serviceParam);
    if (matchingOption) serviceSelect.value = serviceParam;
  }
  if (whatsappLink && /^\d{8,15}$/.test(ITGEOFIX_CONTACT.whatsappNumber)) {
    const phone = ITGEOFIX_CONTACT.whatsappNumber;
    const text = encodeURIComponent("გამარჯობა, მსურს ITGEOFIX-ის მომსახურების შესახებ შეკითხვის დასმა.");
    whatsappLink.href = `https://wa.me/${phone}?text=${text}`;
    whatsappLink.style.display = "inline-flex";
  }
  form?.addEventListener("submit", async event => {
    event.preventDefault();
    if (!form.reportValidity()) {
      if (message) {
        message.className = "form-message error";
        message.textContent = "გთხოვთ, შეავსოთ სავალდებულო ველები სწორად.";
      }
      return;
    }
    const button = form.querySelector('button[type="submit"]');
    const data = new FormData(form);
    data.set("access_key", WEB3FORMS_ACCESS_KEY);
    data.set("subject", "ახალი მოთხოვნა საიტიდან — ITGEOFIX");
    data.set("from_name", "ITGEOFIX საიტი");
    if (button) button.disabled = true;
    if (message) { message.className = "form-message"; message.textContent = "იგზავნება..."; }
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      if (message) { message.className = "form-message success"; message.textContent = "მოთხოვნა გაიგზავნა! მალე დაგიკავშირდებით."; }
    } catch (e) {
      if (message) { message.className = "form-message error"; message.textContent = "გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან ან დაგვირეკეთ: " + ITGEOFIX_CONTACT.phoneLabel; }
    } finally {
      if (button) button.disabled = false;
    }
  });
});
