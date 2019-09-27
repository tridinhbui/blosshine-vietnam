function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("container-demo-1").style.marginLeft = "250px";
    document.getElementById("closeBtn").style.visibility = "visible";
    document.getElementById("openBtn").style.visibility = "hidden";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("container-demo-1").style.marginLeft= "0";
    document.getElementById("closeBtn").style.visibility = "hidden";
    document.getElementById("openBtn").style.visibility = "visible";
  }