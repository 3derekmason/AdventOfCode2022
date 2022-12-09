import carryingMostCalories from "./day1.js";
import myTotalScore from "./day2.js";
import sumOfPriorities from "./day3.js";
import overlapingPairs from "./day4.js";
import postRearrangement from "./day5.js";
import charactersBeforeMarker from "./day6.js";

const data = [
  { day: 1, solution: carryingMostCalories() },
  { day: 2, solution: myTotalScore() },
  { day: 3, solution: sumOfPriorities() },
  { day: 4, solution: overlapingPairs() },
  { day: 5, solution: postRearrangement() },
  { day: 6, solution: charactersBeforeMarker() },
];

console.table(data);
