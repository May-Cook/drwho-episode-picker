import { useState } from "react"
import episodes from "../src/episodes.json"

export default function ResultsCard() {
  const [episode, SetEpisode] = useState(episodes[Math.floor(Math.random() * episodes.length)]) // initialise episode as a random episode

  return (
    <div className="results-card">
      <a href={episode.link}>{episode.title}</a>
      <p>Series: {episode.series}, Episode: {episode.episode}</p>
      <p>{episode.doctor}th Doctor</p>

      <button
        onClick={() => {
          SetEpisode(episodes[Math.floor(Math.random() * episodes.length)]) // choose a new episode at random
        }}
      >
        Pick new episode
      </button>
    </div>
  )
}
