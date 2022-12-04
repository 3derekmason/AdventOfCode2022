// --- Day 4: Camp Cleanup ---
// Space needs to be cleared before the last supplies can be unloaded from the ships, and so several Elves have been assigned the job of cleaning up sections of the camp. Every section has a unique ID number, and each Elf is assigned a range of section IDs.

// However, as some of the Elves compare their section assignments with each other, they've noticed that many of the assignments overlap. To try to quickly find overlaps and reduce duplicated effort, the Elves pair up and make a big list of the section assignments for each pair (your puzzle input).

// For example, consider the following list of section assignment pairs:

// 2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8
// For the first few pairs, this list means:

// Within the first pair of Elves, the first Elf was assigned sections 2-4 (sections 2, 3, and 4), while the second Elf was assigned sections 6-8 (sections 6, 7, 8).
// The Elves in the second pair were each assigned two sections.
// The Elves in the third pair were each assigned three sections: one got sections 5, 6, and 7, while the other also got 7, plus 8 and 9.
// This example list uses single-digit section IDs to make it easier to draw; your actual list might contain larger numbers. Visually, these pairs of section assignments look like this:

// .234.....  2-4
// .....678.  6-8

// .23......  2-3
// ...45....  4-5

// ....567..  5-7
// ......789  7-9

// .2345678.  2-8
// ..34567..  3-7

// .....6...  6-6
// ...456...  4-6

// .23456...  2-6
// ...45678.  4-8
// Some of the pairs have noticed that one of their assignments fully contains the other. For example, 2-8 fully contains 3-7, and 6-6 is fully contained by 4-6. In pairs where one assignment fully contains the other, one Elf in the pair would be exclusively cleaning sections their partner will already be cleaning, so these seem like the most in need of reconsideration. In this example, there are 2 such pairs.

// In how many assignment pairs does one range fully contain the other?

import sectionAssignments from "./lib/day4assignments.js";

const splitList = sectionAssignments.trim().split("\n");

const assignmentPairs = splitList.map((pair) => pair.split(","));

const checkPairRanges = (pair) => {
  let range1 = [];
  let range2 = [];

  // build arrays of each section assigned
  pair.forEach((assignment, i) => {
    let min = Number(assignment.split("-")[0]);
    let max = Number(assignment.split("-")[1]);

    // add every value from min to max, alternating for each assignee
    while (min <= max) {
      if (i === 0) {
        range1.push(min);
        min++;
      } else if (i === 1) {
        range2.push(min);
        min++;
      }
    }
  });

  // sort range arrays by length
  const sorted = [range1, range2].sort((a, b) => a.length - b.length);

  let overlap = true;

  // we only need to look through the shortest arrays values to see if they completely overlap
  sorted[0].forEach((value) => {
    if (!sorted[1].includes(value)) {
      overlap = false;
    }
  });

  // add 1 to the count if the longer array contains every value from the shorter array
  return overlap ? 1 : 0;
};

const overlapingPairs = () => {
  let count = 0;
  assignmentPairs.forEach((pair) => {
    count += checkPairRanges(pair);
  });
  return count;
};

export default overlapingPairs;
