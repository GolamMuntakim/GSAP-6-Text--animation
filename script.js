function breakTheText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
// split
var splittedText = h1Text.split("")
var clutter = ""
var halfValue = Math.floor(splittedText.length / 2)
console.log(halfValue)
splittedText.forEach(function(e,idx){
    if(idx<halfValue){
        clutter = clutter + `<span class="a">${e}</span>`
    }else{
         clutter = clutter + `<span class="b">${e}</span>`
    }
})
h1.innerHTML = clutter
}
breakTheText()

gsap.from("h1 .a",{
    y:50,
    duration : 0.6,
    delay : 0.5,
    opacity : 0,
    stagger:0.15
})


gsap.from("h1 .b",{
    y:50,
    duration : 0.6,
    delay : 0.5,
    opacity : 0,
    stagger:-0.15
})
