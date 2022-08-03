import React from "react";
import QuizData from "./QuizData"
export default function (props) {
    const [quizAgain, setQuizAgain] = React.useState(false)
    const [quizzes, setQuizzies] = React.useState([]);
    const formData = props.formData
    const url = `https://opentdb.com/api.php?amount=${+ formData.trivia_amount
        }${formData.trivia_category ? "&category=" + formData.trivia_category : ""
        }${formData.trivia_difficulty ? "&difficulty=" + formData.trivia_difficulty : ""
        }${formData.trivia_type ? "&type=" + formData.trivia_type : ""}`
    console.log(url)
    React.useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { setQuizzies(data.results) })
    }, [quizAgain])

    const mainContent = quizzes.length > 0 ?
        <QuizData
            quizzes={quizzes}
            setQuizAgain={setQuizAgain}
        />
        : null
    return (
        <div>
            {mainContent}
        </div>
    )

}

