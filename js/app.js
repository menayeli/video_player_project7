//Global Variables

const video = document.getElementById("video-container").firstElementChild;
const container = document.getElementById("caption-wrapper");
const captions = [
  { "start": "0.00",
    "finish": "4.130",
    "text": "Now that we've looked at the architecture of the internet, let's see how you might "},
  { "start": "4.131",
    "finish": "7.535",
    "text": "connect your personal devices to the internet inside your house."},
  { "start": "7.536",
    "finish": "13.960",
    "text": "Well there are many ways to connect to the internet, and most often people connect wirelessly."},    
  { "start": "13.961",
    "finish": "17.940",
    "text": "Let's look at an example of how you can connect to the internet."},
  { "start": "17.941",
    "finish": "30.920",
    "text": "If you live in a city or a town, you probably have a coaxial cable for cable Internet, or a phone line if you have DSL, running to the outside of your house, that connects you to the Internet Service Provider, or ISP."},
  { "start": "32.100",
    "finish": "41.190",
    "text": "If you live far out in the country, you'll more likely have a dish outside your house, connecting you wirelessly to your closest ISP, or you might also use the telephone system."},
  { "start": "42.350",
    "finish": "53.760",
    "text": "Whether a wire comes straight from the ISP hookup outside your house, or it travels over radio waves from your roof, the first stop a wire will make once inside your house, is at your modem."},
  { "start": "53.761",
    "finish": "57.780",
    "text": "A modem is what connects the internet to your network at home."},
  { "start": "57.781",
    "finish": "59.000",
    "text": "A few common residential modems are DSL or..."}
];

//Functions

//adds captions to the page
function addCaptions () {
  for ( i=0 ; i < captions.length; i++ ) {
      const span = document.createElement("span");
      span.innerText = captions[i].text + ' ';
      span.setAttribute("id", captions[i].start);
      container.append(span);
  }
}

//Highlights captions when the timeline updates
video.addEventListener('timeupdate', () => {
  const currentTime = parseFloat(video.currentTime);
  for ( i=0; i < captions.length; i++ ) {
    const currentCaption = document.getElementById(captions[i].start);
    currentCaption.classList.remove('highlight');
    if ( currentTime > captions[i].start && currentTime < captions[i].finish ) {
      currentCaption.classList.add('highlight');
    }
  }
});

container.addEventListener('click', (e) => {
  const clickedSpan = e.target.id;
  video.currentTime = clickedSpan;
})

addCaptions();