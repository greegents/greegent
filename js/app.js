/* Fills every page from js/site-config.js. Normal text edits go in that file. */
(function () {
  var cfg = window.SITE_CONFIG;
  if (!cfg) return;

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.textContent = value;
    });
  }

  function telHref(phone) {
    return "tel:" + String(phone).replace(/[^\d+]/g, "");
  }

  function accentClass(name) {
    return name ? " accent-" + name : "";
  }

  function currentPageId() {
    var fromBody = document.body.getAttribute("data-page");
    if (fromBody) return fromBody;
    var file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!file || file === "/") file = "index.html";
    var match = cfg.nav.filter(function (item) {
      return item.href.toLowerCase() === file;
    })[0];
    return match ? match.id : "home";
  }

  var pageId = currentPageId();

  setText("[data-company]", cfg.companyName);
  setText("[data-legal]", cfg.legalName);
  setText("[data-promise]", cfg.promise);
  setText("[data-tagline]", cfg.tagline);
  setText("[data-intro]", cfg.intro);
  setText("[data-person-name]", cfg.contact.personName);
  setText("[data-person-role]", cfg.contact.role);
  setText("[data-phone]", cfg.contact.phone);
  setText("[data-email]", cfg.contact.email);
  setText("[data-hours]", cfg.contact.hours);
  setText("[data-address]", cfg.contact.address);
  setText("[data-city]", cfg.contact.city);
  setText("[data-footer-note]", cfg.footerNote);
  setText("[data-year]", String(new Date().getFullYear()));

  document.querySelectorAll("[data-phone-link]").forEach(function (el) {
    el.setAttribute("href", telHref(cfg.contact.phone));
  });
  document.querySelectorAll("[data-email-link]").forEach(function (el) {
    el.setAttribute("href", "mailto:" + cfg.contact.email);
  });

  /* ---------- photos ---------- */
  var imgs = cfg.images || {};
  document.querySelectorAll("[data-img]").forEach(function (el) {
    var photo = imgs[el.getAttribute("data-img")];
    if (!photo) return;
    el.setAttribute("src", photo.src);
    el.setAttribute("alt", photo.alt || "");
  });

  var gallery = document.querySelector("[data-gallery]");
  if (gallery && imgs.gallery) {
    gallery.innerHTML = imgs.gallery
      .map(function (photo) {
        return '<figure class="photo-frame"><img src="' + photo.src + '" alt="' + photo.alt + '" /></figure>';
      })
      .join("");
  }

  /* ---------- navigation ---------- */
  function navMarkup(extraClass) {
    return cfg.nav
      .map(function (item) {
        var active = item.id === pageId ? " is-active" : "";
        var current = item.id === pageId ? ' aria-current="page"' : "";
        return (
          '<li><a class="' + extraClass + active + '" href="' + item.href + '"' + current + ">" + item.label + "</a></li>"
        );
      })
      .join("");
  }

  var tabs = document.querySelector("[data-nav]");
  if (tabs) tabs.innerHTML = navMarkup("tab-link");

  var footerNav = document.querySelector("[data-footer-nav]");
  if (footerNav) footerNav.innerHTML = navMarkup("footer-link");

  /* ---------- numbers and outcomes ---------- */
  var stats = document.querySelector("[data-stats]");
  if (stats) {
    stats.innerHTML = cfg.stats
      .map(function (s) {
        return "<div class='stat'><dt>" + s.value + "</dt><dd>" + s.label + "</dd></div>";
      })
      .join("");
  }

  var outcomes = document.querySelector("[data-outcomes]");
  if (outcomes && cfg.outcomes) {
    outcomes.innerHTML = cfg.outcomes
      .map(function (item) {
        return (
          "<div class='outcome" + accentClass(item.accent) + "'><strong>" + item.value + "</strong><p>" + item.label + "</p></div>"
        );
      })
      .join("");
  }

  /* ---------- card grids ---------- */
  function cards(target, items, className) {
    var root = document.querySelector(target);
    if (!root || !items) return;
    root.innerHTML = items
      .map(function (item) {
        var photo = item.image ? '<img src="' + item.image + '" alt="" />' : "";
        var points = item.points
          ? "<ul class='card-points'>" +
            item.points
              .map(function (point) {
                return "<li>" + point + "</li>";
              })
              .join("") +
            "</ul>"
          : "";
        return (
          '<article class="' +
          className +
          accentClass(item.accent) +
          '">' +
          photo +
          '<div class="card-body"><h3>' +
          item.title +
          "</h3><p>" +
          item.text +
          "</p>" +
          points +
          "</div></article>"
        );
      })
      .join("");
  }

  cards("[data-services]", cfg.services, "card");
  cards("[data-industries]", cfg.industries, "card card-compact");
  cards("[data-esd]", cfg.esdProducts, "card card-compact");
  cards("[data-support]", cfg.support, "card card-compact");
  cards("[data-differentiators]", cfg.differentiators, "card card-plain");

  var homeLinks = document.querySelector("[data-home-links]");
  if (homeLinks) {
    homeLinks.innerHTML = cfg.homeLinks
      .map(function (item) {
        var photo = item.image ? '<img src="' + item.image + '" alt="" />' : "";
        return (
          '<a class="jump-card' +
          accentClass(item.accent) +
          '" href="' +
          item.href +
          '">' +
          photo +
          '<div class="card-body"><h3>' +
          item.title +
          "</h3><p>" +
          item.text +
          '</p><span class="card-link">Open ' +
          item.title +
          "</span></div></a>"
        );
      })
      .join("");
  }

  var process = document.querySelector("[data-process]");
  if (process) {
    process.innerHTML = cfg.process
      .map(function (item) {
        return (
          "<li class='step-item" +
          accentClass(item.accent) +
          "'><span class='step-number'>" +
          item.step +
          "</span><h3>" +
          item.title +
          "</h3><p>" +
          item.text +
          "</p></li>"
        );
      })
      .join("");
  }

  /* ---------- quote and closing call to action ---------- */
  if (cfg.quote) {
    setText("[data-quote-text]", cfg.quote.text);
    setText("[data-quote-author]", cfg.quote.author);
    setText("[data-quote-org]", cfg.quote.org);
  }

  if (cfg.cta) {
    setText("[data-cta-heading]", cfg.cta.heading);
    setText("[data-cta-text]", cfg.cta.text);
    setText("[data-cta-button]", cfg.cta.button);
  }

  /* ---------- previous / next tab ---------- */
  var index = -1;
  cfg.nav.forEach(function (item, i) {
    if (item.id === pageId) index = i;
  });
  var pager = document.querySelector("[data-pager]");
  if (pager && index !== -1) {
    var prev = cfg.nav[index - 1];
    var next = cfg.nav[index + 1];
    pager.innerHTML =
      (prev
        ? '<a class="pager-link" href="' + prev.href + '"><span>Previous</span><strong>' + prev.label + "</strong></a>"
        : "<span></span>") +
      (next
        ? '<a class="pager-link pager-next" href="' + next.href + '"><span>Next</span><strong>' + next.label + "</strong></a>"
        : "<span></span>");
  }

  /* ---------- mobile menu ---------- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var shell = document.querySelector(".site-header");
  if (toggle && shell) {
    toggle.addEventListener("click", function () {
      var open = shell.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- contact form opens the visitor's mail app ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var body =
        "Name: " +
        data.get("name") +
        "\nCompany: " +
        (data.get("company") || "") +
        "\nEmail: " +
        data.get("email") +
        "\nIndustry: " +
        (data.get("industry") || "") +
        "\nNeed: " +
        data.get("need") +
        "\n\n" +
        (data.get("notes") || "");
      window.location.href =
        "mailto:" +
        encodeURIComponent(cfg.contact.email) +
        "?subject=" +
        encodeURIComponent("Enquiry from " + data.get("name")) +
        "&body=" +
        encodeURIComponent(body);
    });
  }
})();
