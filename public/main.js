var socket = io.connect('http://localhost:3300')

socket.on('connected', function(data) {
    console.log(data.status)
})

socket.on('sensor', function(data) {
    var ard = document.getElementById("sensor")
    ard.innerHTML = "sensor data: " + (data.val).toString()
    console.log(data.val)
})

var state = false

function commands() {
    button = document.getElementById("ledOnOff")
    state = !state
    console.log("sending command...")
    if (state) {
        socket.emit("coms", {
            ledState: "on"
        })
        button.value = "ON"
        button.style.background = "#fff"
        button.style.color = "#111"
    }else{
        socket.emit("coms", {
            ledState: "off"
        })
        button.value = "OFF"
        button.style.background = "#111"
        button.style.color = "#fff"
    }
}
