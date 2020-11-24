const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 147;
const currentFrame = index => (
  `https://firebasestorage.googleapis.com/v0/b/marco-suriano.appspot.com/o/${index.toString().padStart(4, '0')}.png?alt=media&token=056db127-ce24-43d3-99b1-ea3d9f8cd0f5`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    }
  
};

window.addEventListener("scroll", (event) => {
  let scroll1 = this.scrollY;
  if(scroll1>=200){
    canvas.style.opacity = "0"
  }
  else{
    canvas.style.opacity = "1"
  }
  console.log(scroll)
});


const img = new Image()
img.src = currentFrame(1);
canvas.width=1158;
canvas.height=770;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / 200;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});




preloadImages()