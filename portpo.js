var typed = new Typed('#element', {
    strings: ['Full stack Devloper','Grapic Designer','Game Devloper', 'Software Devloper'],
    typeSpeed: 50,
  });

  const prv=document.querySelector(".prev");
  const nextEle=document.querySelector(".next");
  const imgcontainerEle =document.querySelector(".img-conteiner");
  const imgEle =document.querySelectorAll(".pr-img");

  let currImg=1;
  let timeout;

  nextEle.addEventListener("click",()=>{
    currImg++
    clearInterval(timeout)
    updateImg()
  })

  prv.addEventListener("click",()=>{
    currImg--
    clearTimeout(timeout)
    updateImg()
  })

  updateImg()

  function updateImg(){
    if(currImg>imgEle.length){
      currImg=1
    }else if(currImg<1){
        currImg=imgEle.length
    }
    imgcontainerEle.style.transform=`translateX(${-(currImg- 1) * 100}%)`;
    timeout=setTimeout(()=>{
        currImg++
        updateImg()
    },2000)
  } 
  