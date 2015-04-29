// arduinoNodeJS.ino

int outputPin = 13;

void setup() {
	Serial.begin(9600);
	pinMode(outputPin, OUTPUT);
	digitalWrite(outputPin, LOW);
}

void loop() {
	if (Serial.available()>0){
		String incomeData = Serial.readStringUntil('%');
		if (incomeData == "on") {
		  	digitalWrite(outputPin, HIGH);
		} else if (incomeData == "off") {
		  	digitalWrite(outputPin, LOW);
		}
	}
	int sensor = analogRead(A0);
  	Serial.println(String(sensor));
}
