

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
        <input type="radio" id="A" name="select" value="1" onChange={e => {setQuestionPoints(e.target.value)}} />
        <label className="label-questionnaire" htmlFor="A"><span className="box one"></span></label>
        <input type="radio" id="B" name="select" value="2" onChange={e => {setQuestionPoints(e.target.value)}} />
        <label className="label-questionnaire" htmlFor="B"><span className="box two"></span></label>
        <input type="radio" id="C" name="select" value="3" onChange={e => {setQuestionPoints(e.target.value)}} />
        <label className="label-questionnaire" htmlFor="C"><span className="box three"></span></label>
        <input type="radio" id="D" name="select" value="4" onChange={e => {setQuestionPoints(e.target.value)}} />
        <label className="label-questionnaire" htmlFor="D"><span className="box three"></span></label>
        <input type="radio" id="E" name="select" value="5" onChange={e => {setQuestionPoints(e.target.value)}} />
        <label className="label-questionnaire" htmlFor="E"><span className="box two"></span></label>
        <input type="radio" id="F" name="select" value="6" onChange={e => {setQuestionPoints(e.target.value)}} />
        <label className="label-questionnaire" htmlFor="F"><span className="box one"></span></label>
        <span className="label-section bold">completely untrue</span>
        </div>
        
        <button onClick={clickHandler}>Next</button>
    </section>
  )
}

export default Questionnaire