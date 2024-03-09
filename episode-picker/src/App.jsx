import "./App.css"
import ResultsCard from "../components/results-card"

function App() {
  return (
    <>
      <div>
        <h1 className="title">Doctor <span className="titleFade">Who</span> Episode Picker</h1>
        <ResultsCard />
      </div>
    </>
  )
}

export default App
