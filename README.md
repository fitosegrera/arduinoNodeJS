# arduinoNodeJS
Arduino, NodeJS, Express, Serialport and socketio

###Instructions

1. download the repository or clone to your local machine:

		git clone https://github.com/fitosegrera/arduinoNodeJS.git

2. cd into the directory:

		cd arduinoNodeJS

3. Install npm modules:

		sudo npm install

4. Make sure you have an arduino connected to your computer. Take note of the serialport your arduino is using and replace in server.js

5. The arduino should have an led connected to pin 13

6. run the server:

		node server.js

7. go to your web browser and type the url 'localhost:3000/commands'