import { useEffect, useState } from "react";
import "../stylesheets/PlayMuteComponent.css"

function PlayMuteComponent() {

  const [valor, setValor] = useState("")
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const player = document.getElementById("player")
    player.volume = .5
    setValor(player)
  }, [])

  const icon = muted === true
    ? /*true*/  "https://img.icons8.com/ios/30/FFFFFF/high-volume--v1.png"
    : /*false*/  "https://img.icons8.com/ios/30/FFFFFF/no-audio--v1.png"

  return (
    <>
      <div
        className="mute-play-button"
        onClick={(e) => {
          setMuted(!muted)
          valor.muted = muted
        }}
      >
        <img src={icon} alt="mute-unmute icon" />

      </div>
    </>
  )
}

export default PlayMuteComponent;
