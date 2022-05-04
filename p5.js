function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(241,156,187);

    let noiseScale=0.008;

    for (let x=0; x < width; x++) {
    //for (let y=0; y < height; y++) {
        let noiseVal = noise((x)*noiseScale,noiseScale);
        stroke(noiseVal*80,72,86);
        line(x, noiseVal*800, x, height);
    }



}

//const background = document.getElementById("background");

//const getRandomNumber = (limit) => {
  //return Math.floor(Math.random() * limit);
//};

//const getRandomColor = () => {
  //const h = getRandomNumber(360);
  //const s = getRandomNumber(100);
  //const l = getRandomNumber(100);

  //return `hsl(${h}deg, ${s}%, ${l}%)`;
//};


//const setBackgroundColor = () => {
  //const randomColor = getRandomColor();
  //background.style.backgroundColor = randomColor;
  //background.style.color = randomColor;
//};


//setBackgroundColor();

//setInterval(() => {
  //setBackgroundColor();
//}, 1500);






//THIS IS THE LAUNCHPAD STUFF
//console.log(navigator);

if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}

function failure(){
    console.log('could not connect MIDI');
}

function updateDevices(event){
    //console.log(event);
}

function success(midiAccess){
    //console.log(midiAccess);
    midiAccess.addEventListener('statechange' , updateDevices);

    const inputs = midiAccess.inputs;
    //console.log(inputs);

    inputs.forEach((input) => {
        //console.log(input);
        input.addEventListener('midimessage', handleInput);
    })

}
 
function handleInput(input) {
    //console.log(input);

    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];
    //console.log(command);
    //console.log(note);
    //console.log(velocity);

    switch (command){
        case 144:
            if (velocity > 0){
                noteOn(note);
            } else {
                noteOff(note);
            } 
            break;
 /*              case 128:
                   noteOff(note);
                   break;
        }*/

            
    }

function noteOn(note){
    console.log(`note:${note} //on`);
    if (note == 82){
        document.getElementById("nothing").innerHTML = "nothing"
    }
    if (note == 80){
        document.getElementById("makes").innerHTML = "makes"
    }
    if (note == 78){
        document.getElementById("sense").innerHTML = "sense"
    }
    if (note == 84){
        document.getElementById("btnClick").innerHTML = "here"
    }


}


function noteOff(note){
    console.log(`note:${note} //off`);
    if (note == 82){
        document.getElementById("nothing").innerHTML = " "
    }
    if (note == 80){
        document.getElementById("makes").innerHTML = " "
    }
    if (note == 78){
        document.getElementById("sense").innerHTML = " "
    }
    if (note == 84){
        document.getElementById("btnClick").innerHTML = " "
    }
}

}

let btn = document.getElementById('btnClick')
let image = document.getElementById('image')

/*btn.addEventListener('click', function() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(err=>console.log(err))
})*/