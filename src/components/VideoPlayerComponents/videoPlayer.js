document.addEventListener("DOMContentLoaded", () => {
    const source = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";
    const video = document.getElementById("plyr-video");
  
    const player = new Plyr(video, {
      captions: { active: true, update: true, language: "en" },
    });
  
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(source);
      hls.attachMedia(video);
      window.hls = hls;
  
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => console.warn("Autoplay failed"));
      });
    } else {
      video.src = source;
    }
  
    window.player = player;
  });
  