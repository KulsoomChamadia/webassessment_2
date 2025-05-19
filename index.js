document.addEventListener('DOMContentLoaded', function () {
    // === Mute toggle ===
    const music = document.getElementById('bg-music');
    const muteBtn = document.getElementById('mute-btn');
    if (music && muteBtn) {
      muteBtn.addEventListener('click', function () {
        music.muted = !music.muted;
        muteBtn.innerText = music.muted ? '🔇 Unmute' : '🔊 Mute';
      });
    }
  
  
    
  
    // === Reveal Answer (Quiz Page) ===
    const revealAnswerBtn = document.getElementById('revealAnswerBtn');
    const resultDiv = document.getElementById('result');
    const revealSound = document.getElementById('revealSound');
  
    if (revealAnswerBtn && resultDiv && revealSound) {
      revealAnswerBtn.addEventListener('click', () => {
        revealSound.play().then(() => {
          revealSound.onended = () => {
            resultDiv.innerHTML = "<p><strong>The Answer is: ...</strong></p>";
          };
        }).catch(() => {
          resultDiv.innerHTML = "<p><strong>The Answer is: ...</strong></p>";
        });
      });
    }
  
    // === Download Button with Sound (Suggest Page) ===
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadSound = document.getElementById('downloadSound');
  
    if (downloadBtn && downloadSound) {
      downloadBtn.addEventListener('click', function (event) {
        event.preventDefault();
        downloadSound.onended = () => {
          const a = document.createElement('a');
          a.href = downloadBtn.href;
          a.download = '';
          document.body.appendChild(a);
          a.click();
          a.remove();
        };
        downloadSound.play().catch(() => {
          const a = document.createElement('a');
          a.href = downloadBtn.href;
          a.download = '';
          document.body.appendChild(a);
          a.click();
          a.remove();
        });
      });
    }
  
    // === DOB Year Dropdown ===
    const yearSelect = document.getElementById("year");
    if (yearSelect) {
      const currentYear = new Date().getFullYear();
      for (let y = currentYear; y >= 1900; y--) {
        const option = document.createElement("option");
        option.value = y;
        option.textContent = y;
        yearSelect.appendChild(option);
      }
    }
  
    // === DOB Enter Button ===
    const dobEnter = document.getElementById("dob-enter");
    if (dobEnter) {
      dobEnter.addEventListener("click", () => {
        const mm = document.getElementById("month").value;
        const dd = document.getElementById("day").value;
        const yyyy = document.getElementById("year").value;
  
        if (!mm || !dd || !yyyy) {
          alert("Please select your full date of birth.");
          return;
        }
  
        const birthDate = new Date(`${yyyy}-${mm}-${dd}`);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
  
        if (age >= 16) {
          window.location.href = "index.html"; // Change as needed
        } else {
          alert("You must be at least 16 years old to enter.");
        }
      });
    }
  });
  document.getElementById('bg-video').addEventListener('error', function() {
    console.error('⚠️ Video failed to load!');
  });
  
  
  // Optional: Extra DOB validation function (used elsewhere if needed)
  function checkDOB() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1;
    const year = parseInt(document.getElementById('year').value);
  
    if (!day || !month || !year) {
      alert("Please enter a valid date.");
      return;
    }
  
    const dob = new Date(year, month, day);
    const ageDifMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
    if (age >= 16) {
      window.location.href = "../index.html";
    } else {
      alert("We are sorry! You must be 16 or older to enter.");
    }
  }
  
  
  window.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');
  
    const video = document.createElement('video');
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.id = 'bg-video';
  
    const source = document.createElement('source');
    source.src = 'images/kulsoom.mp4';
    source.type = 'video/mp4';
  
    video.appendChild(source);
    videoContainer.appendChild(video);
  
    // Optional: create the overlay via JS too
    const overlay = document.createElement('div');
    overlay.id = 'video-overlay';
    videoContainer.appendChild(overlay);
  });
  