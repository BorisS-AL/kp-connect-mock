/* ============================================================================
   KP CONNECT — interactive behavior
   1) Configurator: review-only toggles that swap a class on <html>.
   2) Mobile nav (hamburger).
   3) Stat counter animation (skips while target is 0 so "00+" stays).
   4) Generic tabs/toggles for content panels (Services, etc.).
   The configurator is a review aid only; none of this is required by Drupal.
   ============================================================================ */
(function(){
  "use strict";
  var root = document.documentElement;

  /* --- 1) Configurator --------------------------------------------------- */
  var MAP = { version:{ a:"", b:"v-b" }, density:{ light:"", dense:"dense" } };
  document.querySelectorAll(".configurator button").forEach(function(btn){
    btn.addEventListener("click", function(){
      var set = btn.dataset.set, val = btn.dataset.val;
      Object.values(MAP[set]).forEach(function(c){ if(c) root.classList.remove(c); });
      if (MAP[set][val]) root.classList.add(MAP[set][val]);
      document.querySelectorAll('.configurator button[data-set="'+set+'"]')
        .forEach(function(b){ b.classList.toggle("on", b === btn); });
    });
  });

  /* --- 2) Mobile nav ----------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav){
    toggle.addEventListener("click", function(){
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* --- 3) Stat counters -------------------------------------------------- */
  var counters = document.querySelectorAll("[data-target]");
  if ("IntersectionObserver" in window && counters.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting) return;
        var el = e.target, target = parseInt(el.dataset.target,10) || 0, suffix = el.dataset.suffix || "";
        io.unobserve(el);
        if (target <= 0) return;
        var n = 0, step = Math.max(1, Math.ceil(target/40));
        var t = setInterval(function(){
          n += step; if(n>=target){ n=target; clearInterval(t); }
          el.textContent = n + suffix;
        }, 25);
      });
    }, { threshold:0.4 });
    counters.forEach(function(c){ io.observe(c); });
  }

  /* --- 4) Generic tabs / toggles ----------------------------------------
     Container [data-tabs] holds buttons [data-tab="key"] + panels
     [data-panel="key"]. Click shows the matching panel. */
  document.querySelectorAll("[data-tabs]").forEach(function(group){
    // scope to THIS group only (supports nested tab groups)
    var btns = Array.prototype.filter.call(group.querySelectorAll("[data-tab]"),
      function(b){ return b.closest("[data-tabs]") === group; });
    var panels = Array.prototype.filter.call(group.querySelectorAll("[data-panel]"),
      function(p){ return p.closest("[data-tabs]") === group; });
    btns.forEach(function(b){
      b.addEventListener("click", function(){
        var key = b.getAttribute("data-tab");
        btns.forEach(function(x){ x.classList.toggle("on", x===b); });
        panels.forEach(function(p){ p.hidden = (p.getAttribute("data-panel")!==key); });
      });
    });
  });
})();
