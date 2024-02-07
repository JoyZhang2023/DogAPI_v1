# DogAPI_v1
 AD 320 Assignment

# Report explaining design decisions and any challenges faced
According to the assignment requirement, the server needs to use Node.js and Express.js. Also, it shall fetch data and display facts based on the parameter entered. When there's no parameter, all facts shall be displayed. Because we're using a local javascript file to store data, the major challenge is to traverse the array that retreived from local file.

# Steps to run the server
1.Open index.js with VS Code; 
2.Make sure express module is install through npm, if not, enter npm install express in Terminal and run it; 
3.Enter node index.js in Terminal and run it; 
4.You shall see "Express server is running" in console.Now you can visit the server in web browser!

This file is to fetch data from Javascript file dog_facts.js. You may ender number: An integer specifying the number of dog facts to return. 

To do so, enter "localhost:3000/facts?number = (the number you choose)" in web browser. Or you may ignore the parameter, enter "localhost:3000/facts" to see all facts.

# Example when number = 5
![Screenshot](https://github.com/JoyZhang2023/DogAPI_v1/assets/137982978/c3972880-8d0c-49a2-bf8f-b0b14f08d5c5)
