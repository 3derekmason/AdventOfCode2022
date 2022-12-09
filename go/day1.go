package main

import (
	"fmt"
	"io/ioutil"
	"strconv"
  "strings"
)


// carryMostCalories function returns the total of the three largest calorie amounts carried by the elves
func carryMostCalories(list string) int {
	// split the list by new line
	elfs := strings.Split(list, "\n")

	// remove the first blank item
	elfs = elfs[1:]

	// array to hold the total calories each elf has with them
	totalCalories := []int{}

	// counter to add each elf's calories
	elfCalories := 0
	for _, elf := range elfs {
			// if the current item is a blank, add the current total calorie count and reset the count
			if elf == "" {
					totalCalories = append(totalCalories, elfCalories)
					elfCalories = 0
			} else {
					// otherwise, add the current item (calorie value) to the total this elf is carrying
					calorie, _ := strconv.Atoi(elf)
					elfCalories += calorie
			}
	}

	// sort the list of total calories and return the last three values
	largestThree := totalCalories[len(totalCalories)-3:]

	// add up the largest three total calorie amounts carried by the elves
	result := 0
	for _, calorie := range largestThree {
			result += calorie
	}
	return result
}

func main() {
	// Read the contents of the file into a string
	fileContents, err := ioutil.ReadFile("./day1list.txt")
	if err != nil {
		fmt.Println(err)
		return
	}

	data := string(fileContents)

	fmt.Println(carryMostCalories(data))
}





