import { useEffect, useRef, useState } from "react"
import { YOUTUBE_VIDEO_ID } from "../../utils/constants"
import styles from "./VideoSection.module.css"

const VideoSection = () => {
  const [player, setPlayer] = useState(null)
  const [isUnmuted, setIsUnmuted] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const playerRef = useRef(null)

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    // YouTube API ready callback
    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player(playerRef.current, {
        height: "100%",
        width: "100%",
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          fs: 0,
          disablekb: 1,
          playsinline: 1,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID,
        },
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING && isUnmuted) {
              setShowOverlay(false)
            }
          },
        },
      })
      setPlayer(ytPlayer)
    }

    return () => {
      if (player && player.destroy) {
        player.destroy()
      }
    }
  }, [])

  const handleVideoClick = () => {
    if (!isUnmuted && player) {
      player.playVideo()
      player.unMute()
      player.setVolume(75)
      setIsUnmuted(true)
      setShowOverlay(false)

      // Update to show controls
      player.loadVideoById({
        videoId: YOUTUBE_VIDEO_ID,
        startSeconds: 0,
        suggestedQuality: "large",
      })

      setTimeout(() => {
        const iframe = playerRef.current?.querySelector("iframe")
        if (iframe) {
          let src = iframe.src
          // src = src.replace("controls=0", "controls=1")
          src = src.replace("disablekb=1", "disablekb=0")
          src = src.replace("fs=0", "fs=1")
          iframe.src = src
        }
      }, 100)
    }
  }

  return (
    <div className={styles.videoSection}>
      <div className={styles.videoContent}>
        <div className={styles.videoQuote}>
          "Let's get the form in so we can learn more. So on that call, we want
          to make sure we're ready for you and not waste your time."
        </div>
        <div className={styles.videoSignature}>— Sang Huynh</div>
        <div className={styles.videoTitle}>Founder & CEO</div>
      </div>
      <div className={styles.videoWrapper}>
        <div
          className={`${styles.videoContainer} ${
            isUnmuted ? styles.unmuted : ""
          }`}
          onClick={handleVideoClick}
        >
          <div ref={playerRef} />
          <div
            className={`${styles.playButtonOverlay} ${
              showOverlay ? "" : styles.hidden
            }`}
          >
            <div className={styles.customPlayButton} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
