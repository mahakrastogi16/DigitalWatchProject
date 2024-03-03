function updateTime() {
    const now = new Date().toLocaleTimeString();
    // const hours = String(now.getHours()).padStart(2, '0');
    // const minutes = String(now.getMinutes()).padStart(2, '0');
    // const seconds = String(now.getSeconds()).padStart(2, '0');
    // const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = String(now);
    
  }
  
  setInterval(updateTime, 1000); 
  