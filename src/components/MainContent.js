import React from 'react'
import styled from 'styled-components'

const StyledMainContent = styled.main`
  background-color: ${pr => pr.theme.mainBackgroundColor};
  color: ${pr => pr.theme.primaryColor};
  h1 {
    margin: 0px;
    padding: 2%;
    text-decoration: underline;
  }
  .copyright-and-date {
    display: flex;
    justify-content: space-between;
    max-width: 65%;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
  }
  .img-container {
    max-width: 65%;
    margin-left: auto;
    margin-right: auto;
  }
  img {
    max-width: 100%;
  }
  p {
    max-width: 65%;
    margin: 0px;
    padding: 2%;
  }
`

const MainContent = (props) => {
  console.log(props.dailyData)
  return (
    props.dailyData &&
    <StyledMainContent>
      <h1>{props.dailyData.title}</h1>
      <div className="copyright-and-date">
        <span className="copyright">{props.dailyData.copyright}</span>
        <span className="date">{props.dailyData.date}</span>
      </div>
      <div className="img-container">
        <img src={props.dailyData.url} alt="NASA's daily info"/>
      </div>
      <p className="explanation">{props.dailyData.explanation}</p>
    </StyledMainContent>
  )
}

export default MainContent