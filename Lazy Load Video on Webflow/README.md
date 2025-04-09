# Use in your projects on Webflow 🚀  
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
        <div class = 'video-icon'></div>
        <div class = 'video-img-cover'></div>
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
        <div class = 'video-icon'></div>
        <div class = 'video-img-cover'></div>
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


## CSS
```html
<style>
.video-wrap {
  position: relative;
  height: auto;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  aspect-ratio: 16/9;
}

.video-play {
  position: absolute;
  z-index: 2;
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  align-items: center;
  aspect-ratio: 16/9;
  border-radius: 0.8rem;
  cursor: pointer;
}

.video-icon {
  width: 3.4rem;
  height: 2.2rem;
  border-radius: 0.4rem;
  position: relative;
  z-index: 3;
}

.video-img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 2;
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
                    vimeoIframe.src = https://player.vimeo.com/video/${videoId}?color=1c50c7&autoplay=1; // Launch Vimeo
                }
            }

            if (youtubeIframe) {
                const videoId = youtubeIframe.getAttribute('data-video-id'); // Take ID
                if (videoId) {
                    youtubeIframe.src = https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0; // Launch YouTube
                }
            }
        });
    }
});



// VIDEOS Cover for video (Delete on click)
document.querySelectorAll('.video-wrap').forEach(videoWrap => {
    const videoCover = videoWrap.querySelector('.video-cover'); 
    const videoElement = videoWrap.querySelector('.video-embed'); 
    const iframe = videoWrap.querySelector('.vimeoPlayer, .youtubePlayer'); 
    const button = videoWrap.querySelector('.video-play');

    if (videoCover && videoElement) {
        const coverSrc = videoCover.getAttribute('src'); 
        videoElement.style.backgroundImage = `url('${coverSrc}')`; 
    }

    if (button) {
        button.addEventListener('click', () => {
            setTimeout(() => {
                videoElement.style.backgroundImage = ''; 
            }, 6000); 
        });
    }
});



// VIDEOS Covver disapperas
const videoWrappers = document.querySelectorAll('.video-wrap');
videoWrappers.forEach((wrapper, index) => {
  const playButton = wrapper.querySelector('.video-play');  
  wrapper.addEventListener('click', () => {
      console.log('Click on iframe!');
      playButton.style.display = 'none';
  });
});
  
</script>
```


# Needs help? Contact me! 
And I will help you with video optimization on Webflow 💌
### Upwork: https://www.upwork.com/freelancers/stasicus
### Instagram:  https://instagram.com/stasicusen
### Telegram: https://t.me/stasicusucs