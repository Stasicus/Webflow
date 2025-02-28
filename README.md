# Lazy Load Video on Webflow 🚀  
**Code for Lazy video loading on Webflow. To load video only after clicking on an element with video-play class inside video-wrap**  

## 📌 Based on  
Made in Webflow https://webflow.com/made-in-webflow/website/lazy-load-videos-f99d06?ref=made-in-webflow-search&searchValue=lazy%20load%20video
and 
https://github.com/verlok/vanilla-lazyload

## 🛠 Installation
Copy it in Body of a page or a web-site:
<script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@19.1.3/dist/lazyload.min.js"></script>


## HTML structure Vimeo:
<div class='video-wrap'>
    <div class='video-play'>
    </div>
    <div class='video-play'>
    <div class='video-el-embed'>
        <iframe class="vimeoPlayer" 
        data-video-id="985638605" 
        width="100%" 
        height="100%" 
        frameborder="0"
        allow="autoplay; fullscreen" allowfullscreen>
        </iframe>
    </div>
</div>

## HTML structure YouTube 
<!-- the same, needs change only class for <iframe> class="youtubePlayer" -->
<div class='video-wrap'>
    <div class='video-play'>
    </div>
    <div class='video-play'>
    <div class='video-el-embed'>
        <iframe class="youtubePlayer" 
        data-video-id="asmaLnhaFiY" 
        width="100%" 
        height="100%" 
        frameborder="0"
        allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
    </div>
</div>


## JavaScript
<script>
    document.querySelectorAll('.video-wrap').forEach(videoWrap => {
    const button = videoWrap.querySelector('.video-play');
    const vimeoIframe = videoWrap.querySelector('.vimeoPlayer');
    const youtubeIframe = videoWrap.querySelector('.youtubePlayer');

    if (button) {
        button.addEventListener('click', () => {
            if (vimeoIframe) {
                const videoId = vimeoIframe.getAttribute('data-video-id');
                if (videoId) {
                    vimeoIframe.src = https://player.vimeo.com/video/${videoId}?color=1c50c7&autoplay=1; // Запускаем Vimeo
                }
            }

            if (youtubeIframe) {
                const videoId = youtubeIframe.getAttribute('data-video-id'); // Берём ID
                if (videoId) {
                    youtubeIframe.src = https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0; // Запускаем YouTube
                }
            }
        });
    }
});
</script>


### Need help with video optimization on Webflow Email me?
Upwork https://www.upwork.com/freelancers/stasicus
Instagram  https://instagram.com/stasicusen
Telegram @stasicusucs
