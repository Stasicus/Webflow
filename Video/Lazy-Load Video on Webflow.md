# Use for videos from YouTube, Vimeo and other storage on Webflow 🚀

Above in this folder you can find CustomCode solutions for Webflow on different topics and use them in your projects. Just swipe up and select the subfolder 📌

=======
# Lazy Load Video on Webflow 🚀  
**Code for lazy video loading on Webflow. To load a video only after clicking on an element with the `video-play` class inside `video-wrap`.**  

## 📌 Based on  
Made in Webflow:  
[Lazy Load Videos](https://webflow.com/made-in-webflow/website/lazy-load-videos-f99d06?ref=made-in-webflow-search&searchValue=lazy%20load%20video)  
and  
[Vanilla LazyLoad](https://github.com/verlok/vanilla-lazyload)  

## HTML structure Vimeo:
```html
<div class='video-wrap'>
    <div class='video-play'>
        <div class = 'video-embed-icon'></div>
        <div class = 'video-img-cover'></div>
        <div class = 'video-lottie'></div>
    </div>
    <div class='video-embed'>
        <iframe class="vimeoPlayer" 
            data-video-id="73552530" 
            width="100%" 
            height="100%" 
            frameborder="0"
            allow="autoplay; fullscreen" allowfullscreen>
        </iframe>
    </div>
</div>
```

## HTML structure YouTube 
The same, only needs to change class="youtubePlayer"for <iframe> 
```html
<div class='video-wrap'>
    <div class='video-play'>
        <div class = 'video-embed-icon'></div>
        <div class = 'video-img-cover'></div>
        <div class = 'video-lottie'></div>
    </div>
    <div class='video-embed'>
        <iframe class="youtubePlayer" 
        data-video-id="MybaTnzu9AA" 
        width="100%" 
        height="100%" 
        frameborder="0"
        allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
    </div>
</div>
```

## Icon for play-button
The same, only needs to change class="youtubePlayer"for <iframe> 
```html
<svg width="100%" height="100%" viewBox="0 0 68 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" rx="6" fill="#currentColor"/>
<path d="M42.6568 19.1906C43.6812 19.763 43.6812 21.237 42.6568 21.8094L30.2317 28.7529C29.2319 29.3116 28 28.5888 28 27.4434L28 13.5566C28 12.4112 29.2319 11.6884 30.2317 12.2471L42.6568 19.1906Z" fill="white"/>
</svg>
```

## CSS
```html
<style>
.video-wrap {
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  aspect-ratio: 16/9;
  position: relative;
}

.video-play {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  aspect-ratio: 16/9;
  position: absolute;
  z-index: 2;
  border-radius: 0.8rem;
  cursor: pointer;
}

.video-embed-icon {
  width: 3.4rem;
  height: 2.2rem;
  position: relative;
  z-index: 2;
  border-radius: 0.4rem;
}

.video-img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 2;
}

.video-lottie {
  width: 3.4rem;
  height: 3.4rem;
  position: absolute;
  z-index: 1;
}

.video-embed {
  width: 100%;
  height: auto;
  overflow: hidden;
  aspect-ratio: 16/9;
  position: relative;
  z-index: 1;
  border-radius: 0.8rem;
}
iframe {
    width="100%";
    height="100%"; 
}
</style>
```


## JavaScript
Copy this inside the `<body>` of a page or website:  

```html
<script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@19.1.3/dist/lazyload.min.js"></script>

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
                    vimeoIframe.src = `https://player.vimeo.com/video/${videoId}?color=1c50c7&autoplay=1`; // Launch Vimeo 
                }
            }

            if (youtubeIframe) {
                const videoId = youtubeIframe.getAttribute('data-video-id'); // Take ID
                if (videoId) {
                    youtubeIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`; // Launch YouTube
                }
            }
        });
    }
});

// VIDEO Cover and Play button
document.querySelectorAll('.video-wrap').forEach(videoWrap => {
    const videoElement = videoWrap.querySelector('.video-embed');
    const videoLottie = videoWrap.querySelector('.video-lottie');
    const videoIcon = videoWrap.querySelector('.video-embed-icon');
    const videoPlay = videoWrap.querySelector('.video-play');

    videoWrap.addEventListener('click', () => {
        if (videoElement) {
            videoElement.style.zIndex = 3; // make higer z-index for .video-embed
        }
        if (videoLottie) {
            videoLottie.style.display = 'block'; // show lottie
        }
        if (videoIcon) {
            videoIcon.style.display = 'none'; // hide play icon
        }

        // hide .video-play after 20 sec
        if (videoPlay) {
            setTimeout(() => {
                videoPlay.style.display = 'none';
            }, 20000); // 20000  = 20 secound 
        }
    });
});

</script>
```


# Needs help? Contact me! 
And I will help you with video optimization on Webflow 💌
### Upwork: https://www.upwork.com/freelancers/stasicus
### Instagram:  https://instagram.com/stasicusen
### Telegram: https://t.me/stasicusucs