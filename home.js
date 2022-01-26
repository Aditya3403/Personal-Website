var typed = new Typed('.autoText', {
    strings: ["I'am Aditya."],
    typeSpeed: 80,
    backSpeed: 100,
    loop: true,
  });
  
  function clickFunc(){
    document.querySelector("#ham").classList.toggle("ani");
    document.querySelector(".curtainMenu").classList.toggle("curtainMenuGo");
  }
  function openNav(){
    document.querySelector(".dropdownMenu").classList.toggle("dropdownMenuGo");
  
  }
  function toTop(){
    window.scrollTo(0,0)
  }