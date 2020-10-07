import React from 'react'

const MainContent = (props) => {
  console.log(props.dailyData)
  return (
    props.dailyData &&
    <main>
      <h1>{props.dailyData.title}</h1>
      <div>
        <span className="copyright">{props.dailyData.copyright}</span>
        <span className="date">{props.dailyData.date}</span>
      </div>
      <div className="img-container">
        <img src={props.dailyData.url} alt="NASA's daily info"/>
      </div>
      <p className="explanation">{props.dailyData.explanation}</p>
    </main>
  )
}

export default MainContent