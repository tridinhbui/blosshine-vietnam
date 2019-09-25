function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("container").style.marginLeft = "250px";
    document.getElementById("closeBtn").style.zIndex = "10";
    document.getElementById("openBtn").style.zIndex = "-1";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("container").style.marginLeft= "0";
    document.getElementById("closeBtn").style.zIndex = "-1";
    document.getElementById("openBtn").style.zIndex = "10";
  }