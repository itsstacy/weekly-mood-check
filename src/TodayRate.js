import React from 'react';
import { useHistory } from "react-router-dom";
import {useParams} from "react-router-dom";
import (useParams);

const TodayRate = (props) => {

    const id = useParams();
    const history = useHistory();
    const [rate, setRate] = React.useState(0);

    
    return (
        <>
            <p className="p1"><span className='orange'>{props.week[id.id]}요일</span> 평점 매기기</p>
            
            <div className='circlebox'>
                {[1,2,3,4,5].map((_, index) => (
                    <div className='circle'
                    key={index} 

                    onClick={()=> {
                        setRate(index + 1)
                    }}

                    style={{
                        backgroundColor: rate < index +1 ? "lightgrey":"yellow"  
                    }}

                    
                    />
                ))}
            </div>
            <button onClick={()=>{
                history.push("/");
            }}
            className='submit'>평점 남기기 </button>

        </>

    )

}

export default TodayRate;