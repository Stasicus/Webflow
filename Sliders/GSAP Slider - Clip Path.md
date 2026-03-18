# GSAP Slider
### GSAP-based custom slider for Webflow — no Swiper, no plugins needed

**Full-screen hero slider with diagonal clip-path slide transitions and masked text reveal animation using GSAP SplitText.**

---

## Dependencies

- **GSAP** (with SplitText plugin) — must be connected before the script
- No jQuery, no Swiper required

---

## HTML Structure

Each `.hero_slider-item` is a slide. Add `d-hero-split` attribute to any text element you want animated.

```html
<div class="hero_slider-wrap">
  <div class="hero_slider-list">

    <div class="hero_slider-item">
      <div class="hero_slider-body">
        <h1 d-hero-split class="text-size-160">Slide Title</h1>
        <h2 d-hero-split class="text-size-160">Slide subtitle</h2>
      </div>
      <img class="hero_slider-img" src="..." />
    </div>

    <div class="hero_slider-item">
      <div class="hero_slider-body">
        <h2 d-hero-split class="text-size-160">Slide Title 2</h1>
        <h2 d-hero-split class="text-size-160">Slide subtitle 2</h2>
      </div>
      <img class="hero_slider-img" src="..." />
    </div>

    <!-- add more .hero_slider-item as needed -->

  </div>
</div>
```

> `d-hero-split` — custom attribute (not a class). Add to any text element inside a slide.

---

## CSS

```css
.hero_slider-wrap {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero_slider-list {
  height: 100%;
  display: flex; 
}

.hero_slider-item {
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  overflow: hidden;
  position: relative; /* needed for absolute body inside */
}

.hero_slider-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* optional: text overlay positioning */
.hero_slider-body {
  position: absolute;
  z-index: 2;
  bottom: 3rem;
  left: 3rem;
}
```

> **Key rule:** `.hero_slider-list` must have `height: 100%` — otherwise it collapses to 0 when JS makes slides `position: absolute`.

---

## CDN

Add to `<head>` or before `</body>` — **must be above your script**:

```html
<!-- GSAP Core -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<!-- GSAP SplitText -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/SplitText.min.js"></script>
```

---

## JavaScript

Place inside `<body>` (after GSAP scripts):

```html
<script>
// ========== HERO SLIDER
const SLIDE_DELAY = 4000; // ms between slides

const slides      = Array.from(document.querySelectorAll('.hero_slider-item'));
let   currIdx     = 0;
let   isAnimating = false;
const splitMap    = new Map(); // stores split.lines per element

// stack slides (override flex layout)
gsap.set('.hero_slider-list', { position: 'relative' });
slides.forEach(s => gsap.set(s, { position: 'absolute', top: 0, left: 0, width: '100%' }));
gsap.set(slides[0], { zIndex: 1 });

// get lines for a slide (safe — returns [] if not split yet)
function getLines(slide) {
  const lines = [];
  slide.querySelectorAll('[d-hero-split]').forEach(el => {
    if (splitMap.has(el)) lines.push(...splitMap.get(el).lines);
  });
  return lines;
}

// SplitText: wait for fonts before splitting
document.fonts.ready.then(() => {
  document.querySelectorAll('[d-hero-split]').forEach(el => {
    const split = new SplitText(el, { type: 'lines' });
    // wrap each line in overflow:hidden mask for reveal effect
    split.lines.forEach(line => {
      const mask = document.createElement('div');
      mask.style.overflow = 'hidden';
      line.parentNode.insertBefore(mask, line);
      mask.appendChild(line);
    });
    splitMap.set(el, split);
  });

  // initial state: first slide visible, rest hidden
  slides.forEach((slide, i) => {
    gsap.set(getLines(slide), { yPercent: i === 0 ? 0 : 100, opacity: i === 0 ? 1 : 0 });
  });
});

// slide transition
function goTo(nextIdx, forwards) {
  if (isAnimating) return;
  isAnimating = true;

  const currEl    = slides[currIdx];
  const nextEl    = slides[nextIdx];
  const currLines = getLines(currEl);
  const nextLines = getLines(nextEl);

  gsap.set(nextEl, { zIndex: 1 });
  gsap.set(currEl, { zIndex: 2 });

  const fromNext = forwards ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' : 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';
  const toNext   = forwards ? 'polygon(0% 0%, 100% 0%, 100% 100%, -30% 100%)'   : 'polygon(0% 0%, 100% 0%, 130% 100%, 0% 100%)';
  const toCurr   = forwards ? 'polygon(0% 0%, 0% 0%, -30% 100%, 0% 100%)'       : 'polygon(100% 0%, 100% 0%, 100% 100%, 130% 100%)';

  gsap.timeline({
    defaults: { duration: 1, ease: 'power2.inOut' },
    onComplete() {
      gsap.set(currEl, { zIndex: 0, clipPath: 'none' });
      gsap.set(nextEl, { zIndex: 1, clipPath: 'none' });
      gsap.set(currLines, { yPercent: 100, opacity: 0 }); // reset for next loop
      currIdx = nextIdx;
      isAnimating = false;
      setTimeout(autoNext, SLIDE_DELAY);
    },
  })
    .fromTo(nextEl, { clipPath: fromNext }, { clipPath: toNext })
    .fromTo(currEl, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }, { clipPath: toCurr }, '<')
    .fromTo(nextLines, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, '-=0.4');
}

function autoNext() {
  goTo((currIdx + 1) % slides.length, true);
}

setTimeout(autoNext, SLIDE_DELAY);
</script>
```

---

## How It Works

| Part | What happens |
|---|---|
| Slide stacking | JS sets `position: absolute` on all slides, stacking them |
| Clip-path forward | Next slide enters from right (diagonal polygon), current exits left |
| Clip-path backward | Mirror: next from left, current exits right |
| SplitText | Lines split after `document.fonts.ready` — avoids wrong line breaks |
| Mask | Each line is wrapped in `overflow: hidden` div — creates reveal effect |
| Text animation | Lines animate `yPercent: 100 → 0` with `stagger: 0.1`, starts 0.4s before slide finishes |
| Reset | Previous slide lines reset to `yPercent: 100` for next cycle |

---

## Settings to Customize

```js
const SLIDE_DELAY = 4000; // pause between slides (ms)

// clip-path transition duration
defaults: { duration: 1, ease: 'power2.inOut' }

// text animation
{ yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }

// text starts this many seconds before slide finishes
'-=0.4'
```

---

## Common Issues

**Slides not visible**
→ `.hero_slider-list` has no height. Add `height: 100%` to it in CSS.

**Text splits incorrectly (wrong line breaks)**
→ SplitText ran before fonts loaded. The script already uses `document.fonts.ready` — make sure GSAP SplitText loads before your script.

**GSAP target not found**
→ `d-hero-split` elements found before SplitText initialized. Fixed by using `splitMap` (stores `split.lines` directly) instead of querying by class.

---

## Needs help? Contact me!
### Upwork: https://www.upwork.com/freelancers/stasicus
### Instagram: https://instagram.com/stasicusen
### Telegram: https://t.me/stasicusucs
