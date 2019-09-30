function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("closeBtn").style.marginLeft = "270px";
    document.getElementById("openBtn").style.marginLeft = "270px";
    document.getElementById("closeBtn").style.visibility = "visible";
    document.getElementById("openBtn").style.visibility = "hidden";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("closeBtn").style.marginLeft = "2%";
    document.getElementById("openBtn").style.marginLeft = "2%";
    document.getElementById("closeBtn").style.visibility = "hidden";
    document.getElementById("openBtn").style.visibility = "visible";
  }