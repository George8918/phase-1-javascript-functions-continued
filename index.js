// code your solution here
function saturdayFun (activity= 'roller-skate') {
return `This Saturday, I want to ${activity}!`
}


function mondayWork(activityForWork = 'go to the office') {
 return `This Monday, I will ${activityForWork}.` 
}
function wrapAdjective(flair) {
    if (flair === undefined) {
      flair = "*";
    }
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  