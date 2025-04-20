function launchRocket() {
    alert("🚀 Rocket launched! (Just kidding.)");
    console.log("A fake rocket has been launched into your imagination.");
  }
  
  function openPopup() {
    const popup = window.open("", "popup", "width=400,height=300");
    popup.document.write("<h1>This popup is so pointless.</h1><p>But hey, now it's open.</p>");
  }
  
  function startProgress() {
    let width = 0;
    const bar = document.getElementById("progressBar");
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        bar.innerHTML = "Done!";
      } else {
        width++;
        bar.style.width = width + "%";
        bar.innerHTML = width + "%";
      }
    }, 50);
  }
  
  setTimeout(() => {
    console.log("⏰ You’ve been on this page for 5 seconds. That’s dedication.");
  }, 5000);
  
  document.addEventListener("mousemove", (e) => {
    if (e.clientY < 50) {
      console.log("👀 Hey! Are you trying to leave?");
    }
  });
  