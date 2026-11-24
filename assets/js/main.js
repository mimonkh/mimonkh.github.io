(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var root = document.documentElement;
  var state = { lang: root.lang === "ar" ? "ar" : "en", filter: "all" };

  /* ── helpers ─────────────────────────────────────────── */
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string" || Array.isArray(v)) return v;
    return v[state.lang] != null ? v[state.lang] : v.en;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel) { return document.querySelector(sel); }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var ICON = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6.5 9 6.5 9-6.5"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    web: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19"/><path d="M12 2.5a14.5 14.5 0 0 1 0 19 14.5 14.5 0 0 1 0-19Z"/></svg>',
    dashboard: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.5" height="9" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="5" rx="1.5"/><rect x="13.5" y="11" width="7.5" height="10" rx="1.5"/><rect x="3" y="15" width="7.5" height="6" rx="1.5"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.8v16.4a1 1 0 0 0 1.5.86l13.6-8.2a1 1 0 0 0 0-1.72L7.5 2.94A1 1 0 0 0 6 3.8Z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
    moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
  };

  function sectionHead(num, title, sub) {
    return '<header class="section__head">' +
      '<p class="section__num">' + num + '</p>' +
      '<h2 class="section__title">' + esc(t(title)) + "</h2>" +
      (sub ? '<p class="section__sub">' + esc(t(sub)) + "</p>" : "") +
      "</header>";
  }

  function cvMenu(extraClass) {
    var items = D.profile.cv.map(function (c) {
      return '<a href="' + esc(c.href) + '" download>' + ICON.download + "<span>" + esc(t(c.label)) + "</span></a>";
    }).join("");
    return '<details class="dropdown ' + (extraClass || "") + '">' +
      '<summary class="btn btn--ghost">' + ICON.download + "<span>" + esc(t(D.ui.downloadCv)) + "</span>" + ICON.chevron + "</summary>" +
      '<div class="dropdown__menu">' + items + "</div></details>";
  }

  function socials() {
    var p = D.profile, out = [];
    out.push('<a class="social" href="' + esc(p.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + ICON.github + "</a>");
    if (p.linkedin) out.push('<a class="social" href="' + esc(p.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + ICON.linkedin + "</a>");
    out.push('<a class="social" href="mailto:' + esc(p.email) + '" aria-label="Email">' + ICON.mail + "</a>");
    out.push('<a class="social" href="https://wa.me/' + esc(p.whatsapp) + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + ICON.chat + "</a>");
    return out.join("");
  }

  /* ── sections ────────────────────────────────────────── */
  function renderChrome() {
    var n = D.ui.nav;
    $("#nav").innerHTML = ["skills", "experience", "projects", "background", "contact"].map(function (id) {
      return '<a href="#' + id + '" data-nav="' + id + '">' + esc(t(n[id])) + "</a>";
    }).join("");
    document.querySelectorAll('[data-bind="name"]').forEach(function (el) { el.textContent = t(D.profile.name); });
    var lb = $("#langBtn");
    lb.textContent = t(D.ui.switchLang);
    lb.setAttribute("lang", state.lang === "ar" ? "en" : "ar");
    var tb = $("#themeBtn");
    tb.setAttribute("aria-label", t(D.ui.theme));
    tb.title = t(D.ui.theme);
    tb.innerHTML = root.getAttribute("data-theme") === "dark" ? ICON.sun : ICON.moon;
    document.title = t(D.profile.name) + " — " + t(D.profile.role);
  }

  function renderHero() {
    var p = D.profile;
    $("#top").innerHTML =
      '<div class="hero__text">' +
        '<p class="eyebrow"><span class="dot"></span>' + esc(t(p.role)) + "</p>" +
        '<h1 class="hero__name">' + esc(t(p.name)) + "</h1>" +
        '<p class="hero__lead">' + esc(t(p.lead)) + "</p>" +
        '<div class="hero__cta">' +
          '<a class="btn btn--primary" href="#projects"><span>' + esc(t(D.ui.viewWork)) + "</span>" + ICON.arrow + "</a>" +
          cvMenu() +
        "</div>" +
        '<div class="hero__meta">' +
          '<span class="meta">' + ICON.pin + esc(t(p.location)) + "</span>" +
          '<span class="socials">' + socials() + "</span>" +
        "</div>" +
      "</div>" +
      '<div class="hero__visual">' +
        '<figure class="portrait"><img src="' + esc(p.photo) + '" alt="' + esc(t(p.name)) + '" width="560" height="700"></figure>' +
        '<div class="codecard" dir="ltr" aria-hidden="true">' +
          '<div class="codecard__bar"><i></i><i></i><i></i><span>stack.ts</span></div>' +
          "<pre><code>" +
            '<span class="k">export const</span> stack = {\n' +
            '  api:  [<span class="s">"Node.js"</span>, <span class="s">"Laravel"</span>, <span class="s">"Go"</span>],\n' +
            '  db:   [<span class="s">"PostgreSQL"</span>, <span class="s">"MySQL"</span>],\n' +
            '  ops:  [<span class="s">"Linux"</span>, <span class="s">"Docker"</span>, <span class="s">"Nginx"</span>],\n' +
            '  apps: [<span class="s">"Flutter"</span>, <span class="s">"React"</span>],\n' +
            "};" +
          "</code></pre>" +
        "</div>" +
      "</div>";
  }

  function renderStats() {
    $("#stats").innerHTML = D.stats.map(function (s) {
      return '<div class="stat"><span class="stat__value">' + esc(s.value) + '</span><span class="stat__label">' + esc(t(s.label)) + "</span></div>";
    }).join("");
  }

  function renderSkills() {
    var groups = D.skills.map(function (g) {
      var meter = "";
      for (var i = 1; i <= 3; i++) meter += '<i class="' + (i <= g.level ? "on" : "") + '"></i>';
      var items = g.items.map(function (it) {
        return '<li><span class="skill__name">' + esc(it.name) + '</span><span class="skill__note">' + esc(t(it.note)) + "</span></li>";
      }).join("");
      return '<article class="card skillgroup skillgroup--' + g.level + '">' +
        '<div class="skillgroup__head"><h3>' + esc(t(g.title)) + '</h3><span class="meter" aria-hidden="true">' + meter + "</span></div>" +
        "<ul>" + items + "</ul></article>";
    }).join("");
    var tools = D.tools.map(function (x) { return '<span class="chip">' + esc(x) + "</span>"; }).join("");
    $("#skills").innerHTML = sectionHead("01", D.ui.skillsTitle, D.ui.skillsSub) +
      '<div class="skills">' + groups + "</div>" +
      '<div class="toolbox"><span class="toolbox__label">' + esc(t(D.ui.alsoUse)) + '</span><div class="chips">' + tools + "</div></div>";
  }

  function renderExperience() {
    var items = D.experience.map(function (e) {
      var pts = t(e.points).map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
      return '<li class="job">' +
        '<div class="job__when">' + esc(t(e.period)) + "</div>" +
        '<div class="job__body">' +
          '<h3 class="job__role">' + esc(t(e.role)) + ' <span class="job__at">· ' + esc(t(e.company)) + "</span></h3>" +
          '<p class="job__place">' + esc(t(e.place)) + "</p>" +
          '<ul class="job__points">' + pts + "</ul>" +
        "</div></li>";
    }).join("");
    $("#experience").innerHTML = sectionHead("02", D.ui.experienceTitle) + '<ol class="timeline">' + items + "</ol>";
  }

  function projectCard(p) {
    var links = p.links.map(function (l) {
      return '<a class="plink" href="' + esc(l.href) + '" target="_blank" rel="noopener">' + ICON[l.type] + "<span>" + esc(t(D.ui.link[l.type])) + "</span></a>";
    }).join("");
    if (!links && p.private) links = '<span class="plink plink--muted">' + ICON.lock + "<span>" + esc(t(D.ui.privateSystem)) + "</span></span>";
    var tech = p.tech.map(function (x) { return '<span class="chip chip--sm">' + esc(x) + "</span>"; }).join("");
    return '<article class="card project' + (p.featured ? " project--featured" : "") + '" style="--h:' + p.hue + '">' +
      '<div class="project__top"><span class="badge" dir="ltr">' + esc(p.badge) + "</span>" +
        '<div><h4 class="project__name">' + esc(t(p.name)) + '</h4><p class="project__where">' + esc(t(p.where)) + "</p></div>" +
        (p.featured ? '<span class="featured-tag">' + esc(t(D.ui.featured)) + "</span>" : "") + "</div>" +
      '<p class="project__desc">' + esc(t(p.desc)) + "</p>" +
      '<div class="chips">' + tech + "</div>" +
      (links ? '<div class="project__links">' + links + "</div>" : "") +
      "</article>";
  }

  function projectGroup(title, list, note) {
    var shown = list.filter(function (p) { return state.filter === "all" || p.keys.indexOf(state.filter) !== -1; });
    var body = shown.length
      ? '<div class="grid">' + shown.map(projectCard).join("") + "</div>"
      : '<p class="empty">' + esc(t(D.ui.noMatch)) + "</p>";
    return '<div class="pgroup"><div class="pgroup__head"><h3>' + esc(t(title)) +
      ' <span class="count">' + shown.length + "</span></h3>" +
      (note ? '<span class="pgroup__note">' + note + "</span>" : "") + "</div>" + body + "</div>";
  }

  function renderProjects() {
    var filters = D.filters.map(function (f) {
      return '<button type="button" class="filter" data-filter="' + f.key + '" aria-pressed="' + (state.filter === f.key) + '">' + esc(t(f.label)) + "</button>";
    }).join("");
    var also = state.filter === "all"
      ? '<p class="also"><span>' + esc(t(D.alsoWorkedOn.title)) + ":</span> " + D.alsoWorkedOn.items.map(esc).join(" · ") + "</p>"
      : "";
    var note = esc(t(D.ui.personalNote));
    $("#projects").innerHTML = sectionHead("03", D.ui.projectsTitle, D.ui.projectsSub) +
      '<div class="filters" role="group" aria-label="' + esc(t(D.ui.filterLabel)) + '">' + filters + "</div>" +
      projectGroup(D.ui.clientWork, D.clientProjects) + also +
      projectGroup(D.ui.personalWork, D.personalProjects, note);
  }

  function renderBackground() {
    function list(arr) {
      return "<ul class=\"facts\">" + arr.map(function (x) {
        return '<li><span class="facts__title">' + esc(t(x.title || x.name)) + '</span><span class="facts__sub">' + esc(t(x.org || x.level)) + "</span></li>";
      }).join("") + "</ul>";
    }
    $("#background").innerHTML = sectionHead("04", D.ui.backgroundTitle) +
      '<div class="bg">' +
        '<article class="card"><h3 class="card__title">' + esc(t(D.ui.education)) + "</h3>" + list(D.education) + "</article>" +
        '<article class="card"><h3 class="card__title">' + esc(t(D.ui.certifications)) + "</h3>" + list(D.certifications) + "</article>" +
        '<article class="card"><h3 class="card__title">' + esc(t(D.ui.languages)) + "</h3>" + list(D.languages) + "</article>" +
      "</div>";
  }

  function renderContact() {
    var p = D.profile;
    $("#contact").innerHTML =
      '<div class="contact card">' +
        '<div class="contact__text">' +
          '<p class="section__num">05</p>' +
          '<h2 class="section__title">' + esc(t(D.ui.contactTitle)) + "</h2>" +
          '<p class="section__sub">' + esc(t(D.ui.contactSub)) + "</p>" +
          '<div class="hero__cta">' +
            '<a class="btn btn--primary" href="mailto:' + esc(p.email) + '">' + ICON.mail + "<span>" + esc(t(D.ui.emailMe)) + "</span></a>" +
            '<a class="btn btn--ghost" href="https://wa.me/' + esc(p.whatsapp) + '" target="_blank" rel="noopener">' + ICON.chat + "<span>" + esc(t(D.ui.whatsapp)) + "</span></a>" +
            cvMenu("dropdown--up") +
          "</div>" +
        "</div>" +
        '<ul class="contact__list">' +
          '<li><span class="contact__icon">' + ICON.mail + '</span><a href="mailto:' + esc(p.email) + '" dir="ltr">' + esc(p.email) + "</a>" +
            '<button type="button" class="copy" data-copy="' + esc(p.email) + '" aria-label="' + esc(t(D.ui.copy)) + '">' + ICON.copy + "</button></li>" +
          '<li><span class="contact__icon">' + ICON.chat + '</span><a href="https://wa.me/' + esc(p.whatsapp) + '" target="_blank" rel="noopener" dir="ltr">' + esc(p.phone) + "</a></li>" +
          '<li><span class="contact__icon">' + ICON.github + '</span><a href="' + esc(p.github) + '" target="_blank" rel="noopener" dir="ltr">' + esc(p.github.replace("https://", "")) + "</a></li>" +
          (p.linkedin ? '<li><span class="contact__icon">' + ICON.linkedin + '</span><a href="' + esc(p.linkedin) + '" target="_blank" rel="noopener" dir="ltr">LinkedIn</a></li>' : "") +
          '<li><span class="contact__icon">' + ICON.pin + "</span><span>" + esc(t(p.location)) + "</span></li>" +
        "</ul>" +
      "</div>";
  }

  function renderFooter() {
    $("#footer").innerHTML = "<span>© " + new Date().getFullYear() + " " + esc(t(D.profile.name)) + "</span><span>" + esc(t(D.ui.rights)) + "</span>";
  }

  function renderAll() {
    renderChrome(); renderHero(); renderStats(); renderSkills();
    renderExperience(); renderProjects(); renderBackground(); renderContact(); renderFooter();
  }

  /* ── interactions ────────────────────────────────────── */
  document.addEventListener("click", function (e) {
    var f = e.target.closest("[data-filter]");
    if (f) {
      state.filter = f.getAttribute("data-filter");
      renderProjects();
      var again = document.querySelector('[data-filter="' + state.filter + '"]');
      if (again) again.focus({ preventScroll: true });
      return;
    }
    var c = e.target.closest("[data-copy]");
    if (c && navigator.clipboard) {
      navigator.clipboard.writeText(c.getAttribute("data-copy")).then(function () {
        c.classList.add("is-done");
        c.setAttribute("aria-label", t(D.ui.copied));
        setTimeout(function () { c.classList.remove("is-done"); c.setAttribute("aria-label", t(D.ui.copy)); }, 1600);
      });
    }
    document.querySelectorAll("details.dropdown[open]").forEach(function (d) {
      if (!d.contains(e.target)) d.removeAttribute("open");
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") document.querySelectorAll("details.dropdown[open]").forEach(function (d) { d.removeAttribute("open"); });
  });

  $("#langBtn").addEventListener("click", function () {
    state.lang = state.lang === "ar" ? "en" : "ar";
    root.lang = state.lang;
    root.dir = state.lang === "ar" ? "rtl" : "ltr";
    save("lang", state.lang);
    renderAll();
    observeNav();
  });

  $("#themeBtn").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    save("theme", next);
    renderChrome();
    observeNav();
  });

  /* reveal sections on scroll */
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { ro.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* highlight the current section in the nav */
  var navObserver;
  function observeNav() {
    if (!("IntersectionObserver" in window)) return;
    if (navObserver) navObserver.disconnect();
    navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        document.querySelectorAll("[data-nav]").forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("data-nav") === en.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["skills", "experience", "projects", "background", "contact"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });
  }

  renderAll();
  observeNav();
})();
