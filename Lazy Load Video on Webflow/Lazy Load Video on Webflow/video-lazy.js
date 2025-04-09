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