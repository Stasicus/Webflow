# Animated Counter on Webflow (Odometer.js + ScrollTrigger)
### Animated number counter triggered on scroll — works with any number, no separators

**Scroll into view → numbers count up with a slot-machine digit animation.**

---

## Why GSAP?

GSAP is used only for **ScrollTrigger** — it watches the scroll position and fires the odometer animation only when the element enters the viewport. Without it, the counter would animate immediately on page load, even if the section is at the bottom of the page. Odometer.js handles the digit animation itself; GSAP just controls *when* it starts.

---

## Dependencies

Add to `<head>` or before `</body>`:

```html
<!-- Odometer.js -->
<script src="https://github.hubspot.com/odometer/odometer.js"></script>

<!-- GSAP + ScrollTrigger -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js"></script>
```

---

## HTML structure

**Webflow:** Element Settings → Custom Attributes → `data-end` = your number.

| Attribute | Required | Description |
|-----------|----------|-------------|
| `data-end` | ✅ | The final number the counter animates to |

> ⚠️ `data-end` must be set — without it the script finds nothing and the element stays empty.

In Webflow you only add the `div.odometer` with `data-end`. Everything inside `odometer-inside` is rendered by Odometer automatically on init.

```html
    <!-- Add only this div in Webflow with data-end attribute -->
    <div data-end="70" class="odometer odometer-auto-theme">

      <!-- Everything below is rendered by Odometer automatically -->
      <div class="odometer-inside">

        <!-- Padding digit (hidden by CSS) — keeps digit count stable during animation -->
        <span class="odometer-digit">
          <span class="odometer-digit-spacer">8</span>  <!-- sets slot height, invisible -->
          <span class="odometer-digit-inner">
            <span class="odometer-ribbon">
              <span class="odometer-ribbon-inner">
                <span class="odometer-value">1</span>   <!-- padding value, hidden -->
              </span>
            </span>
          </span>
        </span>

        <!-- Separator mark — hidden by CSS if not needed -->
        <span class="odometer-formatting-mark">,</span>

        <!-- Visible digits (one span per digit) -->
        <span class="odometer-digit">
          <span class="odometer-digit-spacer">8</span>
          <span class="odometer-digit-inner">
            <span class="odometer-ribbon">
              <span class="odometer-ribbon-inner">
                <span class="odometer-value">7</span>
              </span>
            </span>
          </span>
        </span>
        <!-- ...more odometer-digit spans... -->

        <!-- Padding digit (hidden by CSS) -->
        <span class="odometer-digit">...</span>

      </div>
    </div>
</div>
```

---

## CSS

Desktop styles. Add inside a `<style>` tag in Webflow custom code.

```css
/* ── Odometer container ── */
.odometer {
    position: relative;
    left: -0.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--gray--900);
    font-size: 5.38rem;
    line-height: 1.2;
    font-weight: 500;
    --time: 2s;
}

/* ── Digit slot layout ── */
.odometer .odometer-inside {
    gap: .5rem;
}

.odometer .odometer-digit {
    display: inline-block;
    vertical-align: middle;
}

/* Sets the height of each digit slot — invisible but takes space */
.odometer .odometer-digit .odometer-digit-spacer {
    display: block;
    vertical-align: middle;
    visibility: hidden;
}

/* ── Ribbon (the scrolling strip of digits) ── */
.odometer-ribbon {
    position: absolute;
    inset: 0%;
    display: block;
    overflow: hidden;
}

.odometer-ribbon-inner {
    -webkit-backface-visibility: hidden;
}

.odometer-digit-inner {
    position: absolute;
    inset: 0%;
    display: block;
    overflow: hidden;
}

.odometer-value {
    display: block;
}

.odometer .odometer-digit .odometer-value.odometer-last-value {
    position: absolute;
    left: 0;
    right: 0;
}

/* ── Animation transitions ── */
.odometer.odometer-animating-up .odometer-ribbon-inner {
    transition: transform var(--time);
}
.odometer.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
    transform: translateY(-100%);
}
.odometer.odometer-animating-down .odometer-ribbon-inner {
    transform: translateY(-100%);
}
.odometer.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
    transition: transform var(--time);
    transform: translateY(0);
}

/* ── Hide padding digits (first and last) ── */
.odometer .odometer-inside .odometer-digit:first-child,
.odometer .odometer-inside .odometer-digit:last-child {
    display: none;
}

/* ── Hide separator commas/dots ── */
/* Odometer auto-inits with its default format that includes commas.        */
/* Even if the JS format string has no separator, the auto-init runs first  */
/* and bakes comma markup into the DOM before the custom script fires.      */
/* Add this rule if you don't want any separators between digits:           */
.odometer .odometer-formatting-mark {
    display: none;
}
```

---

## JavaScript

```html
<script>
  // ========= ODOMETER / helpers
  function buildOdometerFormat(n) {
    var parts = ['d'];
    var remaining = n;
    while (remaining > 0) {
      var group = Math.min(3, remaining);
      parts.push(new Array(group + 1).join('d'));
      remaining -= group;
    }
    parts.push('d');
    parts.reverse();
    return parts.join('');
  }

  function setupOdometer(el, endNum) {
    var digits = String(endNum).length;
    var paddedStart = '1' + '0'.repeat(digits) + '1';
    var paddedEnd = '1' + String(endNum) + '1';
    var format = buildOdometerFormat(digits);
    var odometer = new Odometer({el: el, value: paddedStart, format: format, duration: 9000});
    odometer.render(paddedStart);
    ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      onEnter: function() { odometer.update(paddedEnd); }
    });
  }

  // ========= ODOMETER / init
  document.querySelectorAll('.odometer').forEach(function(el) {
    var end = parseInt(el.getAttribute('data-end'));
    setupOdometer(el, end);
  });
</script>
```

---

## How the padding trick works

| Step | Value | Visible digits |
|------|-------|---------------|
| paddedStart (`data-end="70"`) | `1001` | `00` (1st and last hidden) |
| paddedEnd | `1701` | `70` ✓ |
| paddedStart (`data-end="14"`) | `1001` | `00` |
| paddedEnd | `1141` | `14` ✓ |

The digit count never changes during animation — no layout jump.

---

## 📌 Based on
[Odometer.js by HubSpot](https://github.hubspot.com/odometer/) — slot-machine digit animation library  
[GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) — scroll-based trigger

---

# Needs help? I am here:
### Upwork: https://www.upwork.com/freelancers/stasicus
### Instagram: https://instagram.com/stasicusen
### Telegram: https://t.me/stasicusucs
