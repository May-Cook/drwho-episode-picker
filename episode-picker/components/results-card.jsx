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
    case "selectAll":
      return {
        nine: true,
        ten: true,
        eleven: true,
        twelve: true,
        thirteen: true,
        fourteen: true,
        fifteen: true,
      }
    case "deselectAll":
      return {
        nine: false,
        ten: false,
        eleven: false,
        twelve: false,
        thirteen: false,
        fourteen: false,
        fifteen: false,
      }
    default:
      throw new Error("Invalid Action")
  }
}

function VerifyEpisode(episode, checkboxState) {
  // returns true if the episode meets the requiremments
  switch (episode.doctor) {
    case 8:
      return false
    case 9:
      return checkboxState.nine
    case 10:
      return checkboxState.ten
    case 11:
      return checkboxState.eleven
    case 12:
      return checkboxState.twelve
    case 13:
      return checkboxState.thirteen
    case 14:
      return checkboxState.fourteen
    case 15:
      return checkboxState.fifteen
    default:
      throw new Error("Invalid value for episode.doctor")
  }
  return validEpisode
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
        Series: {episode.series}, Episode: {episode.episode}
      </p>
      <p>
        {episode.doctor}th Doctor, {episode.era} era
      </p>

      <button className="unselectable"
        onClick={() => {
          if (
            checkboxState.nine == true ||
            checkboxState.ten == true ||
            checkboxState.eleven == true ||
            checkboxState.twelve == true ||
            checkboxState.thirteen == true ||
            checkboxState.fourteen == true ||
            checkboxState.fifteen == true
          ) {
            //  if at least one checkbox is checked
            let validEpisode = false
            let episode = episodes[1]
            while (!validEpisode) {
              episode = episodes[Math.floor(Math.random() * episodes.length)] // pick a new episode at random
              if (VerifyEpisode(episode, checkboxState)) {
                validEpisode = true
              }
            }
            SetEpisode(episode)
          }
        }}
      >
        Pick new episode
      </button>
      <div className="filterButtonGroup">
        <button
          className="filterButton unselectable" 
          onClick={() => dispatch({ type: "9" })}
        >
          <input
            type="checkbox"
            name="9th doc"
            value="9"
            readOnly
            checked={checkboxState.nine}
          />{" "}
          9th Doctor
        </button>
        <button
          className="filterButton unselectable"
          onClick={() => dispatch({ type: "10" })}
        >
          <input
            type="checkbox"
            name="10th doc"
            value="10"
            readOnly
            checked={checkboxState.ten}
          />
          10th Doctor
        </button>
        <button
          className="filterButton unselectable"
          onClick={() => dispatch({ type: "11" })}
        >
          <input
            type="checkbox"
            name="11th doc"
            value="11"
            readOnly
            checked={checkboxState.eleven}
          />
          11th Doctor
        </button>
        <button
          className="filterButton unselectable"
          onClick={() => dispatch({ type: "12" })}
        >
          <input
            type="checkbox"
            name="12th doc"
            value="12"
            readOnly
            checked={checkboxState.twelve}
          />
          12th Doctor
        </button>
        <button
          className="filterButton unselectable"
          onClick={() => dispatch({ type: "13" })}
        >
          <input
            type="checkbox"
            name="13th doc"
            value="13"
            readOnly
            checked={checkboxState.thirteen}
          />
          13th Doctor
        </button>
        <button
          className="filterButton unselectable"
          onClick={() => dispatch({ type: "14" })}
        >
          <input
            type="checkbox"
            name="14th doc"
            value="14"
            readOnly
            checked={checkboxState.fourteen}
          />
          14th Doctor
        </button>
        <button
          className="filterButton unselectable"
          onClick={() => dispatch({ type: "15" })}
        >
          <input
            type="checkbox"
            name="15th doc"
            value="15"
            readOnly
            checked={checkboxState.fifteen}
          />
          15th Doctor
        </button>
      </div>
      <div>
        <div className="selectorButtonGroup">
          <button
            className="selectorButton unselectable"
            onClick={() => {
              dispatch({ type: "selectAll" })
            }}
          >
            Select All
          </button>
          <button
            className="selectorButton unselectable"
            onClick={() => {
              dispatch({ type: "deselectAll" })
            }}
          >
            Deselect All
          </button>
        </div>
      </div>
    </div>
  )
}
