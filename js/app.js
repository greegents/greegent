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

  function currentPageId() {
    var fromBody = document.body.getAttribute("data-page");
    if (fromBody) return fromBody;
    var file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!file || file === "/") file = "index.html";
    var match = cfg.nav.find(function (item) {
      return item.href.toLowerCase() === file;
    });
    return match ? match.id : "home";
  }

  var pageId = currentPageId();

  setText("[data-company]", cfg.companyName);
  setText("[data-legal]", cfg.legalName);
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

  document.querySelectorAll("[data-phone-link]").forEach(function (el) {
    el.setAttribute("href", telHref(cfg.contact.phone));
  });
  document.querySelectorAll("[data-email-link]").forEach(function (el) {
    el.setAttribute("href", "mailto:" + cfg.contact.email);
  });

  function navMarkup(extraClass) {
    return cfg.nav
      .map(function (item) {
        var active = item.id === pageId ? " is-active" : "";
        var current = item.id === pageId ? ' aria-current="page"' : "";
        return (
          '<li><a class="' +
          extraClass +
          active +
          '" href="' +
          item.href +
          '"' +
          current +
          ">" +
          item.label +
          "</a></li>"
        );
      })
      .join("");
  }

  var tabs = document.querySelector("[data-nav]");
  if (tabs) tabs.innerHTML = navMarkup("tab-link");

  var footerNav = document.querySelector("[data-footer-nav]");
  if (footerNav) footerNav.innerHTML = navMarkup("footer-link");

  var stats = document.querySelector("[data-stats]");
  if (stats) {
    stats.innerHTML = cfg.stats
      .map(function (s) {
        return "<div><dt>" + s.value + "</dt><dd>" + s.label + "</dd></div>";
      })
      .join("");
  }

  var homeLinks = document.querySelector("[data-home-links]");
  if (homeLinks) {
    homeLinks.innerHTML = cfg.homeLinks
      .map(function (item) {
        return (
          '<a class="jump-card" href="' +
          item.href +
          '"><h3>' +
          item.title +
          "</h3><p>" +
          item.text +
          "</p><span>Open tab →</span></a>"
        );
      })
      .join("");
  }

  function cards(target, items, className) {
    var root = document.querySelector(target);
    if (!root) return;
    root.innerHTML = items
      .map(function (item) {
        return (
          '<article class="' +
          className +
          '"><h3>' +
          item.title +
          "</h3><p>" +
          item.text +
          "</p></article>"
        );
      })
      .join("");
  }

  cards("[data-services]", cfg.services, "card");
  cards("[data-esd]", cfg.esdProducts, "product");
  cards("[data-support]", cfg.support, "support-card");

  var process = document.querySelector("[data-process]");
  if (process) {
    process.innerHTML = cfg.process
      .map(function (item) {
        return (
          "<li><span class='step'>" +
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

  var index = cfg.nav.findIndex(function (item) {
    return item.id === pageId;
  });
  var pager = document.querySelector("[data-pager]");
  if (pager && index !== -1) {
    var prev = cfg.nav[index - 1];
    var next = cfg.nav[index + 1];
    pager.innerHTML =
      (prev
        ? '<a class="pager-link" href="' + prev.href + '"><span>Previous tab</span><strong>' + prev.label + "</strong></a>"
        : "<span></span>") +
      (next
        ? '<a class="pager-link pager-next" href="' + next.href + '"><span>Next tab</span><strong>' + next.label + "</strong></a>"
        : "<span></span>");
  }

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var body =
        "Name: " +
        data.get("name") +
        "\nEmail: " +
        data.get("email") +
        "\nNeed: " +
        data.get("need") +
        "\n\n" +
        (data.get("notes") || "");
      var href =
        "mailto:" +
        encodeURIComponent(cfg.contact.email) +
        "?subject=" +
        encodeURIComponent("XYZ enquiry from " + data.get("name")) +
        "&body=" +
        encodeURIComponent(body);
      window.location.href = href;
    });
  }
})();
