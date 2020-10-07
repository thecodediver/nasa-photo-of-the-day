import React, {useState, useEffect} from "react";
import "./App.css";
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import axios from 'axios'

function App() {
  const [dailyData, setDailyData] = useState(null)

  useEffect(() => {
    const doRequest = async () => {
      const result = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      try {
        setDailyData(result.data)
        console.log(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    doRequest()
  }, [])

  return (
    <div className="App">
      <Header />
      <MainContent dailyData={dailyData} />
      <Footer />
    </div>
  );
}

export default App;
