# Lazy Load Video on Webflow 🚀  
**Code for lazy video loading on Webflow. To load a video only after clicking on an element with the `video-play` class inside `video-wrap`.**  

## 📌 Based on  
Made in Webflow:  
[Lazy Load Videos](https://webflow.com/made-in-webflow/website/lazy-load-videos-f99d06?ref=made-in-webflow-search&searchValue=lazy%20load%20video)  
and  
[Vanilla LazyLoad](https://github.com/verlok/vanilla-lazyload)  

## 🛠 Installation  
Copy this inside the `<body>` of a page or website:  

```html
<script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@19.1.3/dist/lazyload.min.js"></script>
```

## HTML structure Vimeo:
```html
<div class='video-wrap'>
    <div class='video-play'></div>
    <div class='video-el-embed'>
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
    </div>
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
```


## CSS
```html
<style>
.video-wrap {
  height: auto;
  justify-content: flex-end;
  align-items: flex-start;
}
.video-play {
  position: absolute;
  z-index: 10;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16/9;
}
.video-play {
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16/9;
  position: absolute;
  z-index: 2;
}
.video-element {
  height: auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;
  aspect-ratio: 16/9;
}
iframe {
    width="100%";
    height="100%"; 
}
</style>
```


## JavaScript
```html
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
</script>
```

# Needs help? Contact me! 
And I will help you with video optimization on Webflow 💌
### Upwork: https://www.upwork.com/freelancers/stasicus
### Instagram:  https://instagram.com/stasicusen
### Telegram: @stasicusucs