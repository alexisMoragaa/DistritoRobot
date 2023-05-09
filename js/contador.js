function countdown() {
  const now = new Date();
  const eventDate = new Date("2023-08-12T12:00:00"); //La fecha de tu evento en formato YYYY-MM-DD

  const currentTime = now.getTime();
  const eventTime = eventDate.getTime();

  let remTime = eventTime - currentTime;

  const s = Math.floor((remTime / 1000) % 60);
  const m = Math.floor((remTime / 1000 / 60) % 60);
  const h = Math.floor((remTime / (1000 * 60 * 60)) % 24);
  const d = Math.floor(remTime / (1000 * 60 * 60 * 24));

  document.querySelector(".days").textContent = d;
  document.querySelector(".hours").textContent = h < 10 ? '0' + h : h;
  document.querySelector(".minutes").textContent = m < 10 ? '0' + m : m;
  document.querySelector(".seconds").textContent = s < 10 ? '0' + s : s;

  setTimeout(countdown, 1000);
}

  
  countdown();
  