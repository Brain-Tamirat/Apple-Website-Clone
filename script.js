const scrollFunc = document.querySelector(".tv-view-pic");
let slideFunc = document.querySelector(".slider1");
slideFunc.style.backgroundColor = "black";
let tvItem = 1;
let os = 0; let tws = 325; let ths = 650; let fos = 975; let fis = 1300; let ss = 1625;
let tvSliding = setInterval(toTheRight,3000);
let change = ""; let changedby = "";
let drops = ""; let droping = ""; let rotating = "";
let responsivePC = false; let downanime= true;

window.addEventListener("resize",() =>{
  location.reload();
});

document.addEventListener('click',(e)=>{
    if(e.srcElement.name == "NavMenuImg"){
      const show = document.querySelector(".nav-menu-list");
      const hide = document.querySelector(".nav-bar");
      if(show.classList.contains("hidden")){
        hide.classList.add("hidden");
        show.classList.add("nav-dropdown");
        show.classList.remove("hidden");
      }
    }else if(e.srcElement.name == "NavCloseImg"){
      const show = document.querySelector(".nav-menu-list");
      const hide = document.querySelector(".nav-bar");
      if(!(show.classList.contains("hidden"))){
        hide.classList.remove("hidden");
        show.classList.remove("nav-dropdown");
        show.classList.add("hidden");
      }
    }else if(e.srcElement.name == "TvArrowRightImg"){
      toTheRight();      
    }else if(e.srcElement.name == "TvArrowLeftImg"){
      slideFunc.style.backgroundColor = "";
      switch (tvItem){
        case 1:
          tvItem = 6;
          scrollFunc.scrollTo(ss,0);
          slideFunc = document.querySelector(".slider6");
          break;
        case 2:
          tvItem = 1;
          scrollFunc.scrollTo(os,0);
          slideFunc = document.querySelector(".slider1");
          break;
        case 3:
          tvItem = 2;
          scrollFunc.scrollTo(tws,0);
          slideFunc = document.querySelector(".slider2");
          break;
        case 4:
          tvItem = 3;
          scrollFunc.scrollTo(ths,0);
          slideFunc = document.querySelector(".slider3");
          break;
        case 5:
          tvItem = 4;
          scrollFunc.scrollTo(fos,0);
          slideFunc = document.querySelector(".slider4");
        break;
        case 6:
          tvItem = 5;
          scrollFunc.scrollTo(fis,0);
          slideFunc = document.querySelector(".slider5");
        break;
      }
      slideFunc.style.backgroundColor = "black";
    }else if(e.srcElement.name == "PlaySliding"){
      clearInterval(tvSliding);
      change = document.querySelector(`[name|="${e.srcElement.name}"]`);
      change.classList.add("hidden");
      changedby = change.nextElementSibling;
      changedby.classList.remove("hidden");
    }else if(e.srcElement.name == "PauseSliding"){
      tvSliding = setInterval(toTheRight,3000);
      change = document.querySelector(`[name|="${e.srcElement.name}"]`);
      change.classList.add("hidden");
      changedby = change.previousElementSibling;
      changedby.classList.remove("hidden");
    }else if(e.srcElement.classList.contains("SAL")&& downanime){
      drops = document.querySelector(".sal");
      droping = drops.querySelector(".ol-items-collection");
      rotating = drops.querySelector(".ol-drop-down > div img")
      if(droping.classList.contains("hidden")){
        droping.classList.remove("hidden");
        droping.classList.add("on-dropdown-ol");
        rotating.classList.add("on-rotate-ol");
      }else{
        droping.classList.add("hidden");
        droping.classList.remove("on-dropdown-ol");
        rotating.classList.remove("on-rotate-ol");
      }
    }else if(e.srcElement.classList.contains("AW")&& downanime){
      drops = document.querySelector(".aw");
      droping = drops.querySelector(".ol-items-collection");
      rotating = drops.querySelector(".ol-drop-down > div img")
      if(droping.classList.contains("hidden")){
        droping.classList.remove("hidden");
        droping.classList.add("on-dropdown-ol");
        rotating.classList.add("on-rotate-ol");
      }else{
        droping.classList.add("hidden");
        droping.classList.remove("on-dropdown-ol");
        rotating.classList.remove("on-rotate-ol");
      }
    }else if(e.srcElement.classList.contains("A")&& downanime){
      drops = document.querySelector(".a");
      droping = drops.querySelector(".ol-items-collection");
      rotating = drops.querySelector(".ol-drop-down > div img")
      if(droping.classList.contains("hidden")){
        droping.classList.remove("hidden");
        droping.classList.add("on-dropdown-ol");
        rotating.classList.add("on-rotate-ol");
      }else{
        droping.classList.add("hidden");
        droping.classList.remove("on-dropdown-ol");
        rotating.classList.remove("on-rotate-ol");
      }
    }else if(e.srcElement.classList.contains("ET")&& downanime){
      drops = document.querySelector(".et");
      droping = drops.querySelector(".ol-items-collection");
      rotating = drops.querySelector(".ol-drop-down > div img")
      if(droping.classList.contains("hidden")){
        droping.classList.remove("hidden");
        droping.classList.add("on-dropdown-ol");
        rotating.classList.add("on-rotate-ol");
      }else{
        droping.classList.add("hidden");
        droping.classList.remove("on-dropdown-ol");
        rotating.classList.remove("on-rotate-ol");
      }
    }else if(e.srcElement.classList.contains("AS")&& downanime){
      drops = document.querySelector(".as");
      droping = drops.querySelector(".ol-items-collection");
      rotating = drops.querySelector(".ol-drop-down > div img")
      if(droping.classList.contains("hidden")){
        droping.classList.remove("hidden");
        droping.classList.add("on-dropdown-ol");
        rotating.classList.add("on-rotate-ol");
      }else{
        droping.classList.add("hidden");
        droping.classList.remove("on-dropdown-ol");
        rotating.classList.remove("on-rotate-ol");
      }
    }else if(e.srcElement.classList.contains("AA")&& downanime){
      drops = document.querySelector(".aa");
      droping = drops.querySelector(".ol-items-collection");
      rotating = drops.querySelector(".ol-drop-down > div img")
      if(droping.classList.contains("hidden")){
        droping.classList.remove("hidden");
        droping.classList.add("on-dropdown-ol");
        rotating.classList.add("on-rotate-ol");
      }else{
        droping.classList.add("hidden");
        droping.classList.remove("on-dropdown-ol");
        rotating.classList.remove("on-rotate-ol");
      }
    }else{
      console.log("Whyyyyy");
    }
});

if(document.defaultView.innerWidth <= 610 && document.defaultView.innerWidth >= 450){
  console.log(610);
  os = 250; tws = 575; ths = 900; fos = 1225; fis = 1550; ss = 1875;
}else if(document.defaultView.innerWidth < 735 && document.defaultView.innerWidth >= 610){
  console.log(735);
  os = 200; tws = 525; ths = 850; fos = 1175; fis = 1500; ss = 1825;
}else if(document.defaultView.innerWidth >= 735 && window.innerWidth < 1070){
  console.log(736);
  const oneSize = document.querySelector(".tvpic img").clientWidth+10;
  const totalSize = window.innerWidth-45;
  os = 0; tws = totalSize; ths = totalSize+oneSize; fos = totalSize+(oneSize*2); fis = totalSize+(oneSize*3); ss = totalSize+(oneSize*4);
}else if(window.innerWidth >= 1070 && window.innerWidth < 1440){
  console.log(1071);
  const oneSize = document.querySelector(".tvpic img").clientWidth+20;
  console.log(oneSize);
  const totalSize = window.innerWidth-100;
  console.log(totalSize);
  os = 0; tws = totalSize; ths = totalSize+oneSize; fos = totalSize+(oneSize*2); fis = totalSize+(oneSize*3); ss = totalSize+(oneSize*4);
}else if(window.innerWidth >= 1440){
  console.log(1071);
  const oneSize = document.querySelector(".tvpic img").clientWidth+20;
  console.log(oneSize);
  const totalSize = window.innerWidth+50;
  console.log(totalSize);
  os = 0; tws = totalSize; ths = totalSize+oneSize; fos = totalSize+(oneSize*2); fis = totalSize+(oneSize*3); ss = totalSize+(oneSize*4);
}else{
  console.log(0);
  os = 0; tws = 325; ths = 650; fos = 975; fis = 1300; ss = 1625;
}

if(document.defaultView.innerWidth > 1069){
  console.log("umm3");
  let pcchange3 = document.querySelectorAll(".to-change");
  for(let i = 0 ; i < pcchange3.length ; i++){
    pcchange3[i].classList.add("pic-img");
  }
}else{
  console.log("meh3");
}

if(document.defaultView.innerWidth > 735){
  console.log("umm");
let pcchange = document.querySelectorAll(".pic-img img");
  for(let i = 0; i<pcchange.length; i++){
    const take = pcchange[i].src;
    pcchange[i].src = take.replace("picturesPhone","picturesPc");
  }
}else{
  console.log("meh");
}

if(document.defaultView.innerWidth > 835){
  console.log("umm2");
  downanime = false;
  let pcchange2 = document.querySelector("#my-head");
  pcchange2.querySelector(".nav-menu").classList.add("hidden");
  pcchange2.querySelector(".nav-right-buttons").style.width="60px";
  let lists = pcchange2.querySelector(".nav-lists");
  pcchange2.querySelector(".nav-lists").remove();
  pcchange2.querySelector(".nav-apple-logo").after(lists);
  let pcchange21 = document.querySelectorAll(".ol-drop-down div");
  for(let i=0;i<pcchange21.length;i++){
    pcchange21[i].classList.add("hidden");
  }
  let pcchange22 = document.querySelectorAll(".ol-items-collection");
  for(let i=0;i<pcchange22.length;i++){
    pcchange22[i].classList.remove("hidden");
  }
  let newel = document.createElement("div");
  newel.classList.add("ol-new-div");
  document.querySelector(".sal").after(newel);
  newel.appendChild(document.querySelector(".aw"));
  newel.appendChild(document.querySelector(".a"));
}else{
  console.log("meh2");
}

function toTheRight(){
  slideFunc.style.backgroundColor = "";
  switch (tvItem){
    case 1:
      tvItem = 2;
      scrollFunc.scrollTo(tws,0);
      slideFunc = document.querySelector(".slider2");
      break;
    case 2:
      tvItem = 3;
      scrollFunc.scrollTo(ths,0);
      slideFunc = document.querySelector(".slider3");
      break;
    case 3:
      tvItem = 4;
      scrollFunc.scrollTo(fos,0);
      slideFunc = document.querySelector(".slider4");
      break;
    case 4:
      tvItem = 5;
      scrollFunc.scrollTo(fis,0);
      slideFunc = document.querySelector(".slider5");
      break;
    case 5:
      tvItem = 6;
      scrollFunc.scrollTo(ss,0);
      slideFunc = document.querySelector(".slider6");
    break;
    case 6:
      tvItem = 1;
      scrollFunc.scrollTo(os,0);
      slideFunc = document.querySelector(".slider1");
    break;
  }
  slideFunc.style.backgroundColor = "black";
}