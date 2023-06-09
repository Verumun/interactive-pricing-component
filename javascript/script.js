// 'strict'

let pageDisplay = document.getElementById('pageView');
let cost = document.getElementById('price');
let slider = document.getElementById('range-input');
let toggle = document.getElementById('toggle')

let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36]

// Make yearly false on defualt
let isYearly = false;

// Range Input event 
slider.addEventListener('input', function(){
    updateValue()
    pageDisplay.innerHTML = pageViews[slider.value];

    // console.log(slider.value)
    let value = this.value * 25;

    this.style.background = `linear-gradient(
        to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%
      )`

    
})


toggle.addEventListener('change', function(){
    if(isYearly == false){
        isYearly = true;
    } else{
        isYearly = false;
    }

    updateValue()
})

function updateValue(){
    if(isYearly){
        cost.innerHTML = perMonth[slider.value] * .75
    }else{
        cost.innerHTML = perMonth[slider.value]
    }
}