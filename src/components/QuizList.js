import React from "react";
import Quiz from "./Quiz.js"
import { nanoid } from "nanoid"
import Result from "./Result.js";
export default function (props) {
    // const [answerSelection, setAnswerSelection] = React.useState([null, null, null, null, null])
    const [correctAnswerCounter, setcorrectAnswerCounter] = React.useState(-1)
    const [selectedAnswers, setSelectedAnswers] = React.useState(genDefaultAnsersArr())
    function genDefaultAnsersArr() {
        const defaultAnswersArr = new Array(5)
        defaultAnswersArr.fill(-1)
        return defaultAnswersArr
    }
    console.log(correctAnswerCounter)
    function handleAnswerSelection(selectedPos, index) {
        const newArray = selectedAnswers.slice()
        newArray.splice(index, 1, selectedPos)
        setSelectedAnswers(newArray)
    }

    console.log(selectedAnswers)

    const quizElement = props.quizList.map((quizItem, index) => {
        //console.log(selectedAnswers[index])
        return (<Quiz
            key={nanoid()}
            showResult={correctAnswerCounter >= 0}
            quizPos={index}
            handleAnswerSelection={handleAnswerSelection}
            question={quizItem.question}
            answerList={quizItem.answerList}
            selectedPos={selectedAnswers[index]}
            correctPos={quizItem.correctPos}
        />)
    })


    function handleSubmission() {
        const countingArr = selectedAnswers.filter((answer, i) => answer === props.quizList[i].correctPos)
        setcorrectAnswerCounter(countingArr.length)
    }
    // const resultElement = (correctAnswerCounter >= 0) && props.quizList.map((quizItem, index) => {
    //     return (<Result
    //         key={nanoid()}
    //         quizPos={index}
    //         question={quizItem.question}
    //         answerList={quizItem.answerList}
    //         selectedPos={selectedAnswers[index]}
    //         correctPos={quizItem.correctPos}
    //     />)
    // })


    function handleQuizData() {
        props.setQuizAgain(prevState => !prevState)
        setcorrectAnswerCounter(-1);
        setSelectedAnswers(genDefaultAnsersArr())
    }
    return (
        <div className="quizList">
            {quizElement}
            {correctAnswerCounter >= 0 ?
                <div>
                    <span className="result-text">You scored {correctAnswerCounter} / {props.quizList.length} correct answer{correctAnswerCounter > 1 ? "s" : ""}. </span>
                    <button className="quizAgain-button" onClick={handleQuizData}>Play Again</button>
                </div>
                : <div>
                    <button className="submit-button" onClick={handleSubmission}>Check answer</button>
                </div>
            }
        </div>
    )
}


// pass funciton that have state to quiz