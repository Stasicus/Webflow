# Integration of Broadcasts and Landing Pages from Kit (formerly ConvertKit) into Webflow 🚀
Below are solutions using Custom Code and API for integrating Broadcasts and Landing pages from Kit (formerly ConvertKit) 📌


## 📌 API Documentation
for integration: [Broadcasts](https://developers.kit.com/api-reference/v3/overview)  
for integration: [Landing Pages](https://developers.kit.com/api-reference/overview)  

## HTML structure for Broadcast:
```html
  <div class="container_kit">
    <h1 class="h1">ConvertKit Broadcasts Integration</h1>
    <div class="kit_loader">
      <div class="spinner"></div>
      <div class="loader-text">
        <div class="u-txt-size-16">Please wait a moment…</div>
      </div>
    </div>
    <div class="kit_content">
      <ul id="broadcasts-list" role="list" class="kit_list-wrap">
        <li class="kit_list-item">
          <div class="kit_list-txt-wrap">
            <img
              src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy"
              alt="" class="kit_list-img">
            <div class="u-txt-size-22">head</div>
          </div>
          <div class="u-txt-size-14">Date</div>
        </li>
      </ul>
      <div class="kit_list-btn-wrap">
        <a id="prev" href="#" class="kit_btn is-transparent">Prev</a>
        <a id="next" href="#" class="kit_btn is-none">Next</a></div>
    </div>
  </div>
```

## HTML structure for Landing Pages 
The structure is almost the same, only needs to change some clases 
```html
<!-- NEEDS to CHANGE next: 
 — class="kit_content" to "kit_content-land", 
 — delete ID from element "kit_list-wrap"; 
 — to change class="kit_loader" to ="kit_loader-land" 
 — to change ID for buttons to 'prev-1' and 'next-1'
 -->
  <div class="container_kit">
    <h1 class="h1">ConvertKit Landing Pages Integration</h1>
    <div class="kit_loader-land">
      <div class="spinner"></div>
      <div class="loader-text">
        <div class="u-txt-size-16">Please wait a moment…</div>
      </div>
    </div>
    <div class="kit_content-land">
      <ul role="list" class="kit_list-wrap">
        <li class="kit_list-item">
          <div class="kit_list-txt-wrap">
            <img
              src="https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg" loading="lazy"
              alt="" class="kit_list-img">
            <div class="u-txt-size-22">head</div>
          </div>
          <div class="u-txt-size-14">Date</div>
        </li>
      </ul>
      <div class="kit_list-btn-wrap">
        <a id="prev-1" href="#" class="kit_btn is-transparent">Prev</a>
        <a id="next-1" href="#" class="kit_btn is-none">Next</a></div>
    </div>
  </div>
```

## CSS
Add these styles to your elements. You can use unique styles. 
```html
<style>
.kit_loader {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: black;
}

.spinner {
  width: 2rem;
  height: 2rem;
  border-style: solid;
  border-width: 0.19rem;
  border-color: rgba(0, 0, 0, 0.6) rgba(0, 0, 0, 0.12) rgba(0, 0, 0, 0.12);
  border-radius: 100%;
  animation: 1s linear 0s infinite normal none running spin;
}

.kit_content {
  display: flex;
  width: 100%;
  flex-flow: column;
  gap: 1.25rem;
}

.kit_list-wrap {
  border-top: 0.06rem solid rgba(0, 0, 0, 0.1);
}

.kit_list-item {
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 0.06rem solid rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 479px) {
  .kit_list-item {
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.kit_list-txt-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.25rem;
  font-size: 2rem;
}

@media screen and (max-width: 479px) {
  .kit_list-txt-wrap {
    width: 100%;
    flex-flow: column;
    gap: 0.63rem;
  }
}

.kit_list-txt-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.25rem;
  font-size: 2rem;
}

.kit_list-img {
  width: 8rem;
  height: 8rem;
  object-fit: cover;
}


@media screen and (max-width: 479px) {
  .kit_list-img {
    width: 100%;
    height: 13rem;
  }
}

.kit_list-btn-wrap {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.63rem;
}

.kit_btn {
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease;
}

.kit_btn:hover {
  background-color: rgb(1, 82, 153);
}

.kit_btn.is-transparent {
  border-style: solid;
  border-width: 0.06rem;
  border-color: rgba(0, 0, 0, 0.3);
  background-color: transparent;
  transition-property: color, background-color;
  transition-duration: 200ms, 200ms;
  transition-timing-function: ease, ease;
  color: black;
}

.kit_btn.is-transparent,
.kit_btn.is-transparent:hover {
  background-color: rgb(1, 82, 153);
  color: white;
}

.kit_btn.is-none {
  opacity: 0.3;
  pointer-events: none;
}
</style>
```

## CSS which you need to add at the tag <head> or embed 
```html
<style>
/* Style for errors */
.kit_content-land {
  opacity: 0;
  transition: opacity 260ms ease;
}

.kit_content {
  opacity: 0;
  transition: opacity 260ms ease;
}

.kit_content-land.is-visible {
  opacity: 1;
}

.kit_content.is-visible {
  opacity: 1;
}


.kit_loader-land.error { color: #c33; }
.kit_loader.error { color: #c33; }

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
```





## JavaScript for Broadcasts
Copy this inside the `<body>` of a page or a website:  

```html
<script>
/// ========== Broadcasts
const apiKey = 'YOUR_API_KEY'; // Personal API Key for v4 
const url = 'https://api.kit.com/v4/broadcasts'; // URL of API

// Pagination setup
let currentIndex = 0;       // Tracks the current starting index for visible items
const itemsPerPage = 4;     // Number of broadcasts to show per page
let sortedBroadcasts = [];  // Will hold the sorted list of broadcasts from the API

// Select main elements in the DOM
const kitContent = document.querySelector('.kit_content');
const loader = document.querySelector('.kit_loader');


// ==========  Loader animation
// Loader / Show the loader animation and temporarily disable interactions
function showLoader() {
  if (loader) loader.style.display = 'flex';       // Make loader visible
  if (kitContent) {
    kitContent.style.pointerEvents = 'none';        // Disable user clicks
    kitContent.classList.remove('is-visible');      // Hide content while loading
  }
}

// Loader/ Hide the loader animation and re-enable interactions
function hideLoader() {
  if (loader) loader.style.display = 'none';        // Hide loader
  if (kitContent) {
    kitContent.style.pointerEvents = '';            // Re-enable clicks
    kitContent.classList.add('is-visible');         // Show content again
  }
}

// Loader / Display an error message inside the loader if something goes wrong
function loaderError(message) {
  if (loader) {
    loader.classList.add('error');
    loader.innerHTML = `
      <div class="spinner" aria-hidden="true"></div>
      <div class="loader-text">${message}</div>
    `;
  }
}


// ========== Fetch Broadcasts
async function fetchBroadcasts() {
  showLoader();  // Show loading state before fetching

  try {
    // Send GET request to ConvertKit API
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Kit-Api-Key': apiKey,       // API key for authentication
        'Accept': 'application/json'    // Expect JSON response
      }
    });

    // If the response is not successful, throw an error
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);

    // Parse JSON data from response
    const data = await response.json();
    
    // 👉 Show full list of all broadcasts in console
		// console.log('📬 All broadcasts (raw data):', data.broadcasts);

    // Filter out non-public broadcasts and sort by creation date (newest first)
    sortedBroadcasts = data.broadcasts
      .filter(broadcast => broadcast.public)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // Render the first page of broadcasts
    await displayBroadcastItems();

    hideLoader(); // Hide loader when done
    console.log('✅ Broadcasts loaded and shown');
  } catch (error) {
    console.error('Error fetching broadcasts:', error);
    loaderError('Failed to load broadcasts 😕'); // Show error message
  }
}


// ========== Display Broadcast Items ==========
async function displayBroadcastItems() {
  const list = document.getElementById('broadcasts-list');
  list.innerHTML = ''; // Clear the list before adding new items

  // Determine the range of broadcasts to display on the current page
  const end = Math.min(currentIndex + itemsPerPage, sortedBroadcasts.length);

  // Loop through and create HTML elements for each broadcast
  for (let i = currentIndex; i < end; i++) {
    const broadcast = sortedBroadcasts[i];
    const listItem = document.createElement('li');
    listItem.classList.add('kit_list-item');
    listItem.style.cursor = 'pointer';

/*
    // Create a URL-friendly slug from the broadcast subject
    const formattedSubject = broadcast.subject
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '-')  // Remove invalid characters
      .replace(/\s+/g, '-')           // Replace spaces with hyphens
      .replace(/-+/g, '-')            // Remove consecutive hyphens
      .replace(/-+$/, '');            // Remove trailing hyphens

    // Construct the broadcast URL
    const broadcastUrl = `https://stany.kit.com/posts/${formattedSubject}`;
*/

// Use official public URL from API instead of manual slug
		const broadcastUrl = broadcast.public_url;
    // Open broadcast page in a new tab when clicked
    listItem.onclick = () => window.open(broadcastUrl, '_blank');

    // Create wrapper for image and title
    const textWrap = document.createElement('div');
    textWrap.classList.add('kit_list-txt-wrap');

    // Thumbnail image (or placeholder if missing)
    const img = document.createElement('img');
    img.classList.add('kit_list-img');
    img.alt = broadcast.subject;
    img.src = broadcast.thumbnail_url || 'https://via.placeholder.com/80x80?text=No+Image';

    // Broadcast title
    const title = document.createElement('span');
    title.textContent = broadcast.subject;
    title.classList.add('u-txt-size-22', 'broadcast-title');

    // Combine image and title
    textWrap.appendChild(img);
    textWrap.appendChild(title);

    // Date (formatted as "OCT 5, 2025")
    const dateElement = document.createElement('span');
    dateElement.textContent = new Date(broadcast.created_at)
      .toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    dateElement.classList.add('u-txt-size-14', 'broadcast-date');

    // Build the list item
    listItem.appendChild(textWrap);
    listItem.appendChild(dateElement);
    list.appendChild(listItem);
  }

  // Toggle visibility of pagination buttons
  document.getElementById('prev').classList.toggle('is-none', currentIndex === 0);
  document.getElementById('next').classList.toggle('is-none', currentIndex + itemsPerPage >= sortedBroadcasts.length);

  // Wait for all images to finish loading before continuing
  await Promise.all(
    Array.from(list.querySelectorAll('img')).map(
      img =>
        new Promise(resolve => (img.complete ? resolve() : (img.onload = img.onerror = resolve)))
    )
  );
}


// ========== Pagination Controls
// Pagination / Go to next page of broadcasts
function nextBroadcast() {
  if (currentIndex + itemsPerPage < sortedBroadcasts.length) {
    currentIndex += itemsPerPage;
    displayBroadcastItems();
  }
}

// Pagination / Go to previous page of broadcasts
function previousBroadcast() {
  if (currentIndex - itemsPerPage >= 0) {
    currentIndex -= itemsPerPage;
    displayBroadcastItems();
  }
}

// Pagination / Add event listeners for pagination buttons
document.getElementById('next').addEventListener('click', nextBroadcast);
document.getElementById('prev').addEventListener('click', previousBroadcast);

// Pagination / Initial call to load and display broadcasts
fetchBroadcasts();
</script>
```


## JavaScript for Landing pages
Copy this inside the `<body>` of a page or a website:  

```html
<script>
// ========== Landing Pages
const apiSecret = 'YOUR_CONVERTKIT_API_SECRET'; // ConvertKit API secret v3

// Select main DOM elements
const landingsContainer = document.querySelector('.kit_content-land');   // Wrapper for landing page list
const kitListWrap = landingsContainer.querySelector('.kit_list-wrap');   // List container for items
const prevButtonLanding = landingsContainer.querySelector('#prev-1');    // Pagination: previous button
const nextButtonLanding = landingsContainer.querySelector('#next-1');    // Pagination: next button

// Loader element (shown during data fetching)
const loaderLand = document.querySelector('.kit_loader-land');

// Remove any static list item placeholder if present
const firstItem = kitListWrap.querySelector('.kit_list-item');
if (firstItem) firstItem.remove();

// Initialize variables for pagination and data storage
let landingPages = [];             // Array to store fetched landing pages
let currIndexLanding = 0;          // Current starting index for pagination
const itemsOnPageLanding = 4;      // Number of landing pages per page

// Predefined cover images (used as thumbnails)
const coverImages = [
  'https://images.unsplash.com/photo-1755090281929-2f027ee94c98?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1759681770972-560b9949da0b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://plus.unsplash.com/premium_photo-1755001060420-7a561e278353?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1744619438376-30bfc6c4666c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1755018237548-702af1620458?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0'
];


// ========== Loader animation
// Loader / Show loader and disable interactions
function showLoaderLand() {
  if (loaderLand) loaderLand.style.display = 'flex';
  if (landingsContainer) {
    landingsContainer.style.pointerEvents = 'none'; // Disable clicks while loading
    landingsContainer.classList.remove('is-visible'); // Hide content
  }
}

// Loader / Hide loader and re-enable interactions
function hideLoaderLand() {
  if (loaderLand) loaderLand.style.display = 'none';
  if (landingsContainer) {
    landingsContainer.style.pointerEvents = '';  // Re-enable clicks
    landingsContainer.classList.add('is-visible');  // Show content again
  }
}

// Loader / Show an error message if something goes wrong
function loaderErrorLand(message) {
  if (loaderLand) {
    loaderLand.classList.add('error');
    loaderLand.innerHTML = `
      <div class="spinner" aria-hidden="true"></div>
      <div class="loader-text">${message}</div>
    `;
  }
}


// ========== Fetch Landing Pages from ConvertKit API
async function fetchLandingPages() {
  showLoaderLand(); // Display loader before fetching

  // ConvertKit Forms endpoint (includes secret key)
  const urlLanding = `https://api.convertkit.com/v3/forms?api_secret=${apiSecret}`;

  try {
        // Fetch all forms from ConvertKit
    const response = await fetch(urlLanding);
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);

    // Parse JSON response
    const data = await response.json();
    console.log('Full response:', data);

    // Filter only hosted forms (landing pages), and sort newest first
    landingPages = data.forms
      .filter(form => form.type === 'hosted')
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // ✅ Show the full list of Landing Pages
    // console.log('📄 All Landing Pages:', landingPages);

    if (!landingPages.length) {
      kitListWrap.innerHTML = '<p>No landing pages found.</p>';
      hideLoaderLand();
      return;
    }

    // Display the first batch of items
    await displayLandingItems();

    hideLoaderLand();
    console.log('✅ Landing pages loaded and shown');
  } catch (error) {
        // Handle any network or data error
    console.error('Error fetching landing pages:', error);
    kitListWrap.innerHTML = `<p style="color:red;">Error loading landing pages</p>`;
    loaderErrorLand('Failed to load items 😕');
  }
}


// ========== Render Landing Page Items ==========
async function displayLandingItems() {
  kitListWrap.innerHTML = ''; // Clear old list content

  // Calculate the range of items for the current page
  const end = Math.min(currIndexLanding + itemsOnPageLanding, landingPages.length);
  const itemsToShow = landingPages.slice(currIndexLanding, end);

  // Loop through items and build list elements
  for (let i = 0; i < itemsToShow.length; i++) {
    const page = itemsToShow[i];
    const imgSrc = coverImages[(currIndexLanding + i) % coverImages.length];  // Cycle through cover images
    const dateFormatted = new Date(page.created_at)
	  .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })


    const pageUrl = page.embed_url; // Direct URL of landing page

    // Create list item structure
    const listItem = document.createElement('li');
    listItem.classList.add('kit_list-item');
    listItem.onclick = () => window.open(pageUrl, '_blank'); // Open in new tab

    // Fill list item content
    listItem.innerHTML = `
      <div class="kit_list-txt-wrap">
        <img src="${imgSrc}" alt="${page.name}" loading="lazy" class="kit_list-img">
        <div class="u-txt-size-22">${page.name}</div>
      </div>
      <div class="u-txt-size-14">${dateFormatted}</div>
    `;

    kitListWrap.appendChild(listItem);
  }

  // Update pagination buttons (hide if not needed)
  prevButtonLanding.classList.toggle('is-none', currIndexLanding === 0);
  nextButtonLanding.classList.toggle(
    'is-none',
    currIndexLanding + itemsOnPageLanding >= landingPages.length
  );

  // Wait for all images to load before proceeding
  await Promise.all(
    Array.from(kitListWrap.querySelectorAll('img')).map(
      img => new Promise(resolve => (img.complete ? resolve() : (img.onload = img.onerror = resolve)))
    )
  );
}


// ========== Pagination 
// Pagination / Show next batch of landing pages
function nextLanding() {
  if (currIndexLanding + itemsOnPageLanding < landingPages.length) {
    currIndexLanding += itemsOnPageLanding;
    displayLandingItems();
  }
}

// Pagination / Show previous batch of landing pages
function previousLanding() {
  if (currIndexLanding - itemsOnPageLanding >= 0) {
    currIndexLanding -= itemsOnPageLanding;
    displayLandingItems();
  }
}

// Pagination / Add event listeners to pagination buttons
nextButtonLanding.addEventListener('click', e => {
  e.preventDefault();
  nextLanding();
});

prevButtonLanding.addEventListener('click', e => {
  e.preventDefault();
  previousLanding();
});

// Initial call: start loading landing pages on page load
fetchLandingPages();
</script>
```


# Needs help? Contact me! 💬
And I will help you with video optimization on Webflow 💌
### Upwork: https://www.upwork.com/freelancers/stasicus
### Instagram:  https://instagram.com/stasicusen
### Telegram: https://t.me/stasicusucs