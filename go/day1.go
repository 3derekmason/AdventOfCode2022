package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

func main() {
	// Read the contents of the file into a string
	fileContents, err := ioutil.ReadFile("./day1list.txt")
	if err != nil {
		fmt.Println(err)
		return
	}

	// Split the file contents into separate lines
	lines := strings.Split(string(fileContents), "\n")

	// Print each line of the file
	for _, line := range lines {
		fmt.Println(line)
	}
}





