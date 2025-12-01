# Use for videos from YouTube, Vimeo and other storage on Webflow 🚀

Above in this folder you can find CustomCode solutions for Webflow on different topics and use them in your projects. Just swipe up and select the subfolder 📌

=======
# Lazy Load Video on Webflow 🚀  
**Code for lazy video loading on Webflow. To load a video only after clicking on an element with the `video-play` class inside `video-wrap`.**  

## 📌 Sources
Webflow clonable: [Link](https://webflow.com/made-in-webflow)  
YouTube Tutorial: [Link](https://www.youtube.com/)


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
```html
<svg width="100%" height="100%" viewBox="0 0 68 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" rx="6" fill="#currentColor"/>
<path d="M42.6568 19.1906C43.6812 19.763 43.6812 21.237 42.6568 21.8094L30.2317 28.7529C29.2319 29.3116 28 28.5888 28 27.4434L28 13.5566C28 12.4112 29.2319 11.6884 30.2317 12.2471L42.6568 19.1906Z" fill="white"/>
</svg>
```

## Lottie File
[Lottie Icon for download](https://cdn.prod.website-files.com/68edd383533e3a5e345de43d/6902de7c439e25e4b9a224ab_1240.json)  
```html
{"v":"5.1.3","fr":29.9700012207031,"ip":30.0000012219251,"op":48.0000019550801,"w":300,"h":169,"nm":"Final Loop","ddd":0,"assets":[{"id":"comp_5","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":0,"s":[34,84,0],"e":[266,84,0],"to":[38.6666679382324,0,0],"ti":[-38.6666679382324,0,0]},{"t":60.0000024438501}],"ix":2},"a":{"a":0,"k":[4.249,8.249,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.745,0.745,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"n":["0p745_1_0p167_0p167","0p745_1_0p167_0p167","0p667_1_0p167_0"],"t":0,"s":[0,0,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,1]},"o":{"x":[0.237,0.237,0.333],"y":[0,0,0]},"n":["0p833_0p833_0p237_0","0p833_0p833_0p237_0","0p833_1_0p333_0"],"t":30,"s":[100,100,100],"e":[0,0,100]},{"t":60.0000024438501}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[18.087,0],[0,-18.087],[-18.087,0],[0,18.087]],"o":[[-18.087,0],[0,18.087],[18.087,0],[0,-18.087]],"v":[[0,-32.749],[-32.749,0],[0,32.749],[32.749,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[4.249,8.249],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60.0000024438501,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Balls","refId":"comp_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,84.5,0],"ix":2},"a":{"a":0,"k":[150,84.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":300,"h":169,"ip":36.0000014663101,"op":936.000038124062,"st":36.0000014663101,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Balls","refId":"comp_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,84.5,0],"ix":2},"a":{"a":0,"k":[150,84.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":300,"h":169,"ip":18.000000733155,"op":918.000037390907,"st":18.000000733155,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Balls","refId":"comp_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,84.5,0],"ix":2},"a":{"a":0,"k":[150,84.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":300,"h":169,"ip":-18.000000733155,"op":882.000035924596,"st":-18.000000733155,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Balls","refId":"comp_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[150,84.5,0],"ix":2},"a":{"a":0,"k":[150,84.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":300,"h":169,"ip":0,"op":900.000036657751,"st":0,"bm":0}],"markers":[]}
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
    const videoImgCover = videoWrap.querySelector('.video-img-cover'); 

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

        // Animation for .video-img-cover
        if (videoImgCover) {
            videoImgCover.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            videoImgCover.style.opacity = '0.95';
            videoImgCover.style.transform = 'scale(0.96)';
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



## 📌 Based on  
Made in Webflow:  
[Lazy Load Videos](https://webflow.com/made-in-webflow/website/lazy-load-videos-f99d06?ref=made-in-webflow-search&searchValue=lazy%20load%20video)  
and  
[Vanilla LazyLoad](https://github.com/verlok/vanilla-lazyload)  



# Needs help? Contact me! 
And I will help you with video optimization on Webflow 💌
### Upwork: https://www.upwork.com/freelancers/stasicus
### Instagram:  https://instagram.com/stasicusen
### Telegram: https://t.me/stasicusucs