const Results = ({finalResult, user}) => {

    let points = 0
    finalResult.map(result => points += Number(result.points))

  return (
    <section className='section-result'>
        <h1>{user}'s Final Result</h1>
        <hr/>
        <ul>
            {finalResult.map((result) => (
                <li key={result.qid}><span className='bold'>QUESTION {result.qid}</span> :{result.question} - <span className='bold'>POINTS: {Number(result.points)}</span></li>
            ))}
        </ul>
        <hr/>
        <h3><span className="bold">TOTAL POINTS: {points}</span></h3>

    </section>
  )
}

export default Results