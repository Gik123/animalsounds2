function sound_classification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classified = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/t9DleB8fZ/model.json", modelReady);
}
function modelReady(){
    classified.classify(gotResults);
}
function gotResults(error, results){
    if (error) {
        console.log(error)
    }
}