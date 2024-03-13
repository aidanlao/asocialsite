gsap.registerPlugin(TextPlugin);


var container = $("#l");
function machineGun() {
  var sentences = ["Get more done.", "Save money.","Get rewards."]
  var words = sentences,
      tl = gsap.timeline({repeat:-1, repeatDelay: 0}),
      wordCount = words.length,
      time = 0,
      word, element, duration, isSentenceEnd, i;

  for(i = 0; i < wordCount; i++){
    word = words[i];
    isSentenceEnd = false;
    element = $("<span>" + word + "</span>").appendTo(container);
    duration = 1.5; //longer words take longer to read, so adjust timing. Minimum of 0.5 seconds.
 
    //set opacity and scale to 0 initially. We set z to 0.01 just to kick in 3D rendering in the browser which makes things render a bit more smoothly.
    gsap.set(element, {autoAlpha:0, scale:0, z:0.01});
    //the SlowMo ease is like an easeOutIn but it's configurable in terms of strength and how long the slope is linear. See https://www.greensock.com/v12/#slowmo and https://api.greensock.com/js/com/greensock/easing/SlowMo.html
    tl.to(element, 1, {scale:1,  ease:"back.out(1.1)"}, ">")
      //notice the 3rd parameter of the SlowMo config is true in the following tween - that causes it to yoyo, meaning opacity (autoAlpha) will go up to 1 during the tween, and then back down to 0 at the end. 
      .to(element, 3, {autoAlpha:1, ease:"slow(0.5, 0.4, true)"},"<");
  }

}

machineGun();


const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}