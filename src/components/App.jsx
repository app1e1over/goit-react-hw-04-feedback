import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import React, { Component} from 'react';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import { nanoid } from 'nanoid';


export class App extends Component {

  constructor(props){
    super(props);
    this.state={
      good:0,
      bad:0,
      neutral:0,
      options: ['good', 'neutral', 'bad']
    }
  }
  // const reviews = ['good', 'neutral', 'bad'];
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  update = val => {
    const obj={};
    switch(val){
        case "good": obj.good=this.state.good+1; break;
        case "bad":obj.bad=this.state.bad+1; break;
        default:obj.neutral=this.state.neutral+1;
    }
    this.setState(obj);
  };
  render(){
    const{good, neutral, bad}=this.state;
    let total = good+bad+neutral;
    return (
      <div>
      <Section title="Please leave feedback" children={[<FeedbackOptions key={nanoid()} onLeaveFeedback={this.update} options={this.state.options}/>]}></Section>
      <Section title="Statistics" children={[total===0?(<Notification key={nanoid()} message="There is no feedback"></Notification>):(<Statistics key={nanoid()} good={good} neutral ={neutral} bad={bad} total={total} positivePercentage={Math.round(good/total*100)}/>)]}></Section>
          
        
      </div>
    );
  }

};

