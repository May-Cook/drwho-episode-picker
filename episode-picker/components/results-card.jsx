import { useReducer, useState } from "react"
import episodes from "../src/episodes.json"

function CheckboxReducer(state, action) {
  switch (action.type) {
    case "9":
      return { ...state, nine: !state.nine }
    case "10":
      return { ...state, ten: !state.ten }
    case "11":
      return { ...state, eleven: !state.eleven }
    case "12":
      return { ...state, twelve: !state.twelve }
    case "13":
      return { ...state, thirteen: !state.thirteen }
    case "14":
      return { ...state, fourteen: !state.fourteen }
    case "15":
      return { ...state, fifteen: !state.fifteen }
    default:
      throw new Error("Invalid Action")
  }
}

export default function ResultsCard() {
  const [episode, SetEpisode] = useState(
    episodes[Math.floor(Math.random() * episodes.length)]
  ) // initialise episode as a random episode

  const [checkboxState, dispatch] = useReducer(CheckboxReducer, {
    nine: true,
    ten: true,
    eleven: true,
    twelve: true,
    thirteen: true,
    fourteen: true,
    fifteen: true,
  })

  return (
    <div className="results-card">
      <a href={episode.link} className="episodeTitle">
        {episode.title}
      </a>
      <p>
        Series: {episode.series}, Episode: {episode.episode}, Checkboxes:{" "}
        {checkboxState.nine.toString()} ,{checkboxState.ten.toString()},
        {checkboxState.eleven.toString()},{checkboxState.twelve.toString()},
        {checkboxState.thirteen.toString()},{checkboxState.fourteen.toString()},
        {checkboxState.fifteen.toString()},
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
        <input
          type="checkbox"
          name="9th doc"
          value="9"
          defaultChecked="true"
          onClick={() => dispatch({ type: "9" })}
        />{" "}
        9th Doctor
        <input
          type="checkbox"
          name="10th doc"
          value="10"
          defaultChecked="true"
          onClick={() => dispatch({ type: "10" })}
        />
        10th Doctor
        <input
          type="checkbox"
          name="10th doc"
          value="11"
          defaultChecked="true"
          onClick={() => dispatch({ type: "11" })}
        />
        11th Doctor
        <input
          type="checkbox"
          name="11th doc"
          value="12"
          defaultChecked="true"
          onClick={() => dispatch({ type: "12" })}
        />
        12th Doctor
        <input
          type="checkbox"
          name="12th doc"
          value="13"
          defaultChecked="true"
          onClick={() => dispatch({ type: "13" })}
        />
        13th Doctor
        <input
          type="checkbox"
          name="13th doc"
          value="14"
          defaultChecked="true"
          onClick={() => dispatch({ type: "14" })}
        />
        14th Doctor
        <input
          type="checkbox"
          name="14th doc"
          value="15"
          defaultChecked="true"
          onClick={() => dispatch({ type: "15" })}
        />
        15th Doctor
      </div>
    </div>
  )
}
