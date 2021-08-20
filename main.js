function setup() {
    canvas = createCanvas(300, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hDFAco-YH/model.json", modelloaded);
}

function draw() {
    image(video, 0, 0, 300, 250);
    classifier.classify(video, resultTeller);
}

function modelloaded() {
    console.log("Model Has been Loaded");
}

function resultTeller(error, results ) {
    if (error) {
        console.error(error);
    }

    else {
        console.log(results);
         document.getElementById("object_result").innerHTML = results[0].label;
         document.getElementById("accuracy_result").innerHTML = results[0].confidence.toFixed(3);
    }
}