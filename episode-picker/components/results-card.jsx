import { useState } from "react"

export default function ResultsCard() {
  const [episode, SetEpisode] = useState(1)

  return (
    <div className="results-card">
      <p>Episode: Episode {episode} of death</p>
      <p>Link: https://episode{episode}.com </p>
      <button
        onClick={() => {
          SetEpisode(Math.floor(Math.random() * 10)) // Sets the episode to a random integer from 0-10 inclusive
        }}
      >
        Pick new episode
      </button>
    </div>
  )
}
