import React from 'react'
import "./git.css"
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import Stats from './Stats';


const Git = () => {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    
    <section className="git container section" id='gitbox'>
 <h1 className="section__title grid">Git Hub</h1>
      <div id='gitcalender'>
      <GitHubCalendar 
      style={{margin:'auto'}}
      username="priyankadora20"
      transformData={selectLastHalfYear}
      
      className="giton"
     
      >
        <ReactTooltip delayShow={20}/>
      </GitHubCalendar>
      </div>
      <Stats/>
      
    </section>
     
    
  
  )
}


export default Git