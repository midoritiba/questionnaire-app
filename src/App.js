import { useState, useEffect } from 'react'
import Credentials from './components/Credentials';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import {data} from './components/data'

function App() {

  const [user, setUser] = useState('');
  const [counter, setCounter] = useState(0)
  const [questionPoints, setQuestionPoints] = useState(0)
  const [results, setResults] = useState({})
  const [finalResult, setFinalResult] = useState(null)

  function getResult (newResult) {
    if (counter === 1) {
      const res = [newResult]
      return res
    } else {
      const lastResult = [...finalResult, newResult]
      return lastResult
    }
  }

  useEffect(() => {
    if(counter > 0){
      let final = getResult(results)
      setFinalResult(final)
    }
  }, [counter])


  return (
    <>
      <header className="header">
        <h1>🗒 Questionnaire</h1>
      </header>

      <div className='container'>


        {!user && <Credentials user={user} setUser={setUser}/>}

        {(user && counter < data.length) && 
                  <Questionnaire 
                    key={data[counter].id}
                    question={data[counter].question} 
                    setQuestionPoints={setQuestionPoints} 
                    questionPoints={questionPoints} 
                    setResults={setResults}
                    setCounter={setCounter}
                    counter={counter}
                />

        }

        {counter === data.length && <Results finalResult={finalResult} user={user}/>}
       
      </div>

      <footer>© 2022</footer>
    </>
  );
}

export default App;
