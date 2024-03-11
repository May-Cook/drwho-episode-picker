import { useState } from "react"
import episodes from "../src/episodes.json"

export default function ResultsCard() {
  const [episode, SetEpisode] = useState(
    episodes[Math.floor(Math.random() * episodes.length)]
  ) // initialise episode as a random episode

  return (
    <div className="results-card">
      <a href={episode.link} className="episodeTitle">
        {episode.title}
      </a>
      <p>
        Series: {episode.series}, Episode: {episode.episode}
      </p>
      <p>{episode.doctor}th Doctor</p>

      <button
        onClick={() => {
          SetEpisode(episodes[Math.floor(Math.random() * episodes.length)]) // choose a new episode at random
        }}
      >
        Pick new episode
      </button>
      <div>
        <input type="checkbox" name="9th doc" value="9" defaultChecked="true" />{" "}
        9th Doctor 
        <input
          type="checkbox"
          name="10th doc"
          value="10"
          defaultChecked="true"
        />
        10th Doctor
        <input
          type="checkbox"
          name="10th doc"
          value="11"
          defaultChecked="true"
        />
        11th Doctor
        <input
          type="checkbox"
          name="11th doc"
          value="12"
          defaultChecked="true"
        />
        12th Doctor
        <input
          type="checkbox"
          name="12th doc"
          value="13"
          defaultChecked="true"
        />
        13th Doctor
        <input
          type="checkbox"
          name="13th doc"
          value="14"
          defaultChecked="true"
        />
        14th Doctor
        <input
          type="checkbox"
          name="14th doc"
          value="15"
          defaultChecked="true"
        />
        15th Doctor
      </div>
    </div>
  )
}
