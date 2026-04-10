# Counter on Webflow (PureCounter.js)
### Lightweight number counter triggered on scroll — no dependencies, works with any number

**Scroll into view → numbers count up from 0 to the target value. Supports integers, decimals, and currency.**

---

## How it works

PureCounter.js watches each element with IntersectionObserver. When the element enters the viewport, it counts from `start` to `end` over the set `duration`.

This implementation uses `d-num` as a custom data attribute — no class juggling, no IDs. Each element gets a unique auto-generated attribute so multiple counters work independently on the same page.

---

## Dependency

Add before `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js"></script>
```

---

## HTML structure

Each counter is any element with a `d-num` attribute set to the target number:

```html
<span d-num="483934"></span>
<span d-num="118543"></span>
<span d-num="30"></span>
```

**Webflow:** Element Settings → Custom Attributes → add `d-num` = your number.

---

## JavaScript

```html
<script src="https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js"></script>

<script>
  // ========= NUMBER / counter init
  document.querySelectorAll('[d-num]').forEach(function(el, index) {
    var endValue = parseFloat(el.getAttribute('d-num'));
    var uniqueAttr = 'd-num-id-' + index;
    el.setAttribute(uniqueAttr, '');

    new PureCounter({
      selector: '[' + uniqueAttr + ']',
      start: 0,
      end: endValue,
      duration: 2,
      delay: 10,
      once: true,
      repeat: false,
      decimals: 0,
      legacy: true,
      filesizing: false,
      currency: false,
      separator: false
    });
  });
</script>
```

---

## PureCounter options

| Option | Default | Description |
|--------|---------|-------------|
| `start` | `0` | Starting value |
| `end` | from `d-num` | Target value |
| `duration` | `2` | Animation duration in seconds |
| `delay` | `10` | Delay between each step (ms) |
| `once` | `true` | Animate only once |
| `decimals` | `0` | Decimal places (e.g. `2` → `1,844.50`) |
| `separator` | `false` | Thousands separator — set `true` to enable |
| `currency` | `false` | Currency prefix (e.g. `'$'`) |

---

## Counter vs Odometer — when to use which

| | PureCounter (`counter.md`) | Odometer (`counter-odometer.md`) |
|---|---|---|
| **Animation** | number ticks up | slot-machine digit ribbons |
| **Dependencies** | PureCounter only | Odometer + GSAP + ScrollTrigger |
| **Separator** | built-in option | auto-calculated format string |
| **Weight** | lighter | heavier |
| **Visual style** | simple count-up | mechanical / dramatic |

---

## 📌 Based on

[PureCounter.js by Srexi](https://github.com/srexi/purecounterjs) — lightweight scroll counter library

---

# Needs help? I am here:
### Upwork: https://www.upwork.com/freelancers/stasicus
### Instagram: https://instagram.com/stasicusen
### Telegram: https://t.me/stasicusucs
