function updateCountdown() {
    const countDownDate = new Date("January 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeDifference = countDownDate - now;
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    document.querySelector('.cards-row .card:nth-child(1) h1').innerText = days;
    document.querySelector('.cards-row .card:nth-child(2) h1').innerText = hours;
    document.querySelector('.cards-row .card:nth-child(3) h1').innerText = minutes;
  
    const secondsElement = document.querySelector('.cards-row .card:nth-child(4) h1');
    const currentSeconds = parseInt(secondsElement.innerText);
  
    if (currentSeconds !== seconds) {
    //   secondsElement.style.opacity = 0;
      setTimeout(() => {
        secondsElement.innerText = seconds; 
        secondsElement.style.opacity = 1;
      }, 500); 
    }
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  