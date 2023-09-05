import Buttons from 'components/Buttons/Buttons';
import Info from 'components/Info/Info';
import React, { useState } from 'react';

const Feedback = () => {
  const reviews = ['good', 'neutral', 'bad'];
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const update = val => {
    switch(val){
        case "good":setGood(good+1); break;
        case "bad":setBad(bad+1); break;
        default:setNeutral(neutral+1);
    }
  };
  return (
    <div>
      <Buttons update={update} buts={reviews}></Buttons>
      <Info good={good} neutral ={neutral} bad={bad}> </Info>
    </div>
  );
};

export default Feedback;
