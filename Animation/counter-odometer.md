# Animated Counter on Webflow (Odometer.js + ScrollTrigger)
### Animated number counter triggered on scroll — works with any number, auto-formats thousands separators

**Scroll into view → numbers count up with a slot-machine digit animation. Separator commas are added automatically based on the number length.**

---

## How it works

Odometer.js renders each digit as a vertical "ribbon" that scrolls up/down to animate between values. The trick used here:

- A `1` is added as a prefix and suffix to the number string → `"1" + number + "1"`
- These outer digits are hidden by CSS (`display: none` on first/last child)
- Only the middle digits are visible — this keeps the DOM stable regardless of the number

The `buildOdometerFormat()` function auto-calculates the correct format string (e.g. `'ddd,dddd'`) based on how many digits the number has, so thousands separators appear in the right position automatically.

---

## Dependencies

Add to `<head>` or before `</body>`:

```html
<!-- Odometer.js -->
<script src="https://github.hubspot.com/odometer/odometer.js"></script>

<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
```

---

## HTML structure

Each counter is a single `div` with class `odometer` and a `data-end` attribute.  
No inner HTML needed — Odometer renders everything automatically.

```html
<div class="odometer" data-end="483934"></div>
<div class="odometer" data-end="118543"></div>
<div class="odometer" data-end="30"></div>
```

### data attributes

| Attribute | Required | Description |
|-----------|----------|-------------|
| `data-end` | ✅ | The final number the counter animates to |
| `data-sep` | optional | Thousands separator. Default: `,` — use `data-sep="."` for European style |

**Webflow:** Element Settings → Custom Attributes → add `data-end` = your number.

---

## CSS

```html
<style>
.odometer {
    --time: 2s;
    --odometer-easing: ease;
    vertical-align: middle
}

.odometer .odometer-inside {
    gap: .5rem
}

@media (max-width:479px) {
    .odometer .odometer-inside {
        gap: .2rem
    }
}

.odometer .odometer-digit {
    display: inline-block;
    vertical-align: middle
}

.odometer .odometer-digit .odometer-digit-spacer {
    display: block;
    vertical-align: middle;
    visibility: hidden
}

.odometer .odometer-digit .odometer-value.odometer-last-value {
    position: absolute;
    left: 0;
    right: 0
}

.odometer-ribbon-inner {
    -webkit-backface-visibility: hidden
}

.odometer.odometer-animating-up .odometer-ribbon-inner {
    -webkit-transition: -webkit-transform var(--time);
    -moz-transition: -moz-transform var(--time);
    -ms-transition: -ms-transform var(--time);
    -o-transition: -o-transform var(--time);
    transition: transform var(--time)
}

.odometer.odometer-animating-up.odometer-animating .odometer-ribbon-inner {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%)
}

.odometer.odometer-animating-down .odometer-ribbon-inner {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%)
}

.odometer.odometer-animating-down.odometer-animating .odometer-ribbon-inner {
    -webkit-transition: -webkit-transform var(--time);
    -moz-transition: -moz-transform var(--time);
    -ms-transition: -ms-transform var(--time);
    -o-transition: -o-transform var(--time);
    transition: transform var(--time);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0)
}

/* Hide the 1-prefix and 1-suffix digits */
.odometer .odometer-inside .odometer-digit:last-child,
.odometer .odometer-inside .odometer-digit:nth-child(1) {
    display: none
}
</style>
```

---

## JavaScript

```html
<script src="https://github.hubspot.com/odometer/odometer.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>

<script>
  // ========= ODOMETER / helpers
  function buildOdometerFormat(n, sep) {
    sep = sep || ',';
    var parts = ['d'];
    var remaining = n;
    while (remaining > 0) {
      var group = Math.min(3, remaining);
      if (parts.length > 1) parts.push(sep);
      parts.push(new Array(group + 1).join('d'));
      remaining -= group;
    }
    parts.push('d');
    parts.reverse();
    return parts.join('');
  }

  function setupOdometer(el, endNum, sep) {
    sep = sep || ',';
    var digits = String(endNum).length;
    var paddedStart = '1' + '0'.repeat(digits) + '1';
    var paddedEnd = '1' + String(endNum) + '1';
    var format = buildOdometerFormat(digits, sep);
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
    var sep = el.getAttribute('data-sep') || ',';
    setupOdometer(el, end, sep);
  });
</script>
```

---

## Format auto-calculation examples

| Number | Digits | Format built | Result |
|--------|--------|-------------|--------|
| `30` | 2 | `'dddd'` | `30` |
| `526` | 3 | `'ddddd'` | `526` |
| `1,844` | 4 | `'dd,dddd'` | `1,844` |
| `11,844` | 5 | `'ddd,dddd'` | `11,844` |
| `500,000` | 6 | `'dddd,dddd'` | `500,000` |
| `1,000,000` | 7 | `'dd,ddd,dddd'` | `1,000,000` |

No manual format string needed — just change `data-end`.

---

## 📌 Based on
[Odometer.js by HubSpot](https://github.hubspot.com/odometer/) — slot-machine digit animation library  
[GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) — scroll-based trigger

---

# Needs help? I am here:
### Upwork: https://www.upwork.com/freelancers/stasicus
### Instagram: https://instagram.com/stasicusen
### Telegram: https://t.me/stasicusucs
