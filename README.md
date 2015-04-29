# arduinoNodeJS
Arduino, NodeJS, Express, Serialport and socketio

###Instructions

1. download the repository or clone to your local machine:

		git clone https://github.com/fitosegrera/arduinoNodeJS.git

2. cd into the directory:

		cd arduinoNodeJS

3. Install npm modules:

		sudo npm install

4. Make sure you have an arduino connected to your computer. Replace "/dev/ttyACM0" in the file server.js line 9 with whatever port your arduino is using:

		var arduino = new SerialPort("/dev/ttyACM0", {
    		baudrate: 9600
		})

5. The arduino should have an led connected to pin 13 and a sensor to analog 0

6. Upload the code main.ino located in the arduino folder of this repository

7. run the server:

		node server.js

8. go to your web browser and type the url 'localhost:3000/commands'