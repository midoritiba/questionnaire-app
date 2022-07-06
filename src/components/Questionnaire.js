import {questions} from './data'

const Questionnaire = ({setCounter, counter, question, setQuestionPoints, questionPoints, setResults}) => {

    const clickHandler = e => {
        e.preventDefault()
        if(questionPoints === 0) {
            alert('Please select an item')
        } else {
            const result = {qid: counter+1,question: question, points: questionPoints}
            setResults(result)
            setQuestionPoints(0)
            setCounter(counter+1)
        }
    }

  return (
      <section className="section-questionnaire">
        <h2 className="question">{question}</h2>
        <div className="group-radio">
            <span className="label-section bold">completely true</span>

            {questions.map(question => (
                <>
                    <input type="radio" id={question.id} name="select" value={question.value} onChange={e => {setQuestionPoints(e.target.value)}} />
                    <label className="label-questionnaire" htmlFor={question.id} >
                        <span className={question.span} ></span>
                    </label>
                </>
            ))}

            <span className="label-section bold">completely untrue</span>
        </div>
        
        <button onClick={clickHandler}>Next</button>
    </section>
  )
}

export default Questionnaire