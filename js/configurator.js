/* ============================================================================
   KP CONNECT — interactive behavior
   1) Configurator: review-only toggles that swap a class on <html>.
   2) Mobile nav (hamburger).
   3) Stat counter animation (stub — counts to data-target).
   In a component build (React/Vue) #1 becomes state, not classes; same idea.
   NONE of this is required by Drupal; the configurator is a review aid only.
   ============================================================================ */
(function(){
  "use strict";
  var root = document.documentElement;

  /* --- 1) Configurator -------------------------------------------------- */
  // group -> { value: className } ; empty string means "default, no class".
  var MAP = {
    version: { a:"",     b:"v-b"    },
    layout:  { left:"",  center:"center" },
    density: { light:"", dense:"dense"  }
  };
  document.querySelectorAll(".configurator button").forEach(function(btn){
    btn.addEventListener("click", function(){
      var set = btn.dataset.set, val = btn.dataset.val;
      Object.values(MAP[set]).forEach(function(c){ if(c) root.classList.remove(c); });
      if (MAP[set][val]) root.classList.add(MAP[set][val]);
      document.querySelectorAll('.configurator button[data-set="'+set+'"]')
        .forEach(function(b){ b.classList.toggle("on", b === btn); });
    });
  });

  /* --- 2) Mobile nav ---------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav){
    toggle.addEventListener("click", function(){
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* --- 3) Stat counters (stub: animates to data-target on first view) ---- */
  // [CONFIRMED] design calls for animated counters. Real numbers are [STUB].
  var counters = document.querySelectorAll("[data-target]");
  if ("IntersectionObserver" in window && counters.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting) return;
        var el = e.target, target = parseInt(el.dataset.target,10) || 0, suffix = el.dataset.suffix || "";
        var n = 0, step = Math.max(1, Math.ceil(target/40));
        var t = setInterval(function(){
          n += step; if(n>=target){ n=target; clearInterval(t); }
          el.textContent = n + suffix;
        }, 25);
        io.unobserve(el);
      });
    }, { threshold:0.4 });
    counters.forEach(function(c){ io.observe(c); });
  }
})();
