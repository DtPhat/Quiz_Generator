import React from "react"
import './style.css'
import Home from "./components/Home"
import Main from "./components/Main"

export default function App() {
    const [formData, setFormData] = React.useState(null)
    console.log("loading")

    return (
        <main>
            {formData !== null ? <Main formData={formData} /> : <Home setFormData={setFormData} />}
            <h1 className="logo home-title" onClick={() => setFormData(null)}>
                <span>Quiz</span>Generator
            </h1>
            <div className="decoration">
                <img src="./images/blob-blue.png" alt="" className="blob-blue"></img>
                <img src="./images/blob-yellow.png" alt="" className="blob-yellow"></img>
            </div>

        </main >
    )
}



// Home -> quizlist
// create from quizlist -> quiz, if quizlist submit state newquiz to true
