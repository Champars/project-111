prediction = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="result_image" src="' + data_uri + '"/>';
    });
}
console.log("ml5", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TA6JvSrXQ/model.json', modelloaded);

function modelloaded() {
    console.log("Model Is Loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    data = "The  prediction is" + prediction;
    var utterthis = new SpeechSynthesisUtterance(data);
    synth.speak(utterthis);
}