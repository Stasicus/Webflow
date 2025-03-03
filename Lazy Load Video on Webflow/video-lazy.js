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