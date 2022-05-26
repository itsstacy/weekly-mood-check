import './App.css';
import React, { useEffect, useState } from "react";
import {Route} from "react-router-dom";
import TodayRate from './TodayRate'
import { useHistory } from "react-router-dom";


function App() {
  let [week, setWeek] = useState(['월', '화', '수', '목', '금', '토', '일']);


  let rate_sum = 0
  const week_rate = week.map((w,idx) => {
    let random = Math.floor(Math.random() * (5 - 1 +1)) + 1;
    rate_sum += random
    return { 
      day: w,
      rate: random
    } 
  })
  const []
  console.log(rate_sum)
  const history = useHistory();

  const [rate, setRate] = React.useState(0);
  const rate_avg = (rate_sum / week.length).toFixed(1);
  const [avg, setAvg] = useState(rate_avg);

  return (
    <div className="App">
      <div className='container'>
        <Route path="/" exact>
        <h2>내 일주일은?</h2>
        {
        week_rate.map((a,i) => {
          return (
            <div className='circlebox'>
            <p className="p1">{week[i]}</p>           
            
            {[1,2,3,4,5].map((_, index) => (
              <div className='circle'
              key={index} 
              style={{
                backgroundColor: index < week_rate[i].rate ? "yellow" : "lightgrey"
              }}/>
            ))}
            
            <div className='arrow' onClick= { ()=>{
              history.push(`/todayrate/${i}`)
            }}></div>

            </div>
          )
        })
        }
        <div className='bottombox'>
          <h2 className='average'> 평균평점 </h2>
          <h3 className='average2'> {avg} </h3>
          <button onClick={() => {
              setAvg(parseInt(0));
          }}
              className='reset'>Reset</button>
        </div>
        </Route>
        <Route path="/todayrate/:id" component={TodayRate}>
          <TodayRate week={week} />
        </Route>

      </div>
    </div>
  );
}

export default App;
