// Wait until the DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Array of character objects with image source, name, and description
    const characterData = [
      {
        src: "../images/the-patient.jpeg",
        name: "The Patient",
        desc: "A lost soul with fragmented memories. Once human, now tormented by shadows only they can see."
      },
      {
        src: "../images/the-whisper.jpeg",
        name: "The Whisper",
        desc: "A dark entity guiding or misleading the player. It whispers secrets that bend reality."
      },
      {
        src: "../images/the-doctor.jpeg",
        name: "The Doctor",
        desc: "Not everything is what it seems. The Doctor claims to help, but hides twisted motives."
      }
    ];
  
    // Index of the currently displayed character
    let currentChar = 0;
  
    // Get references to DOM elements for the image, name, description, and carousel count display
    const imgEl = document.getElementById("character-image");
    const nameEl = document.getElementById("character-name");
    const descEl = document.getElementById("character-desc");
    const countEl = document.getElementById("carousel-count");
  
    // Get references to the left and right arrow buttons for carousel navigation
    const leftArrow = document.querySelector(".carousel-arrow.left");
    const rightArrow = document.querySelector(".carousel-arrow.right");
  
    // Function to update the displayed character based on currentChar index
    const updateCharacter = () => {
      const current = characterData[currentChar]; // Get current character data
      imgEl.src = current.src;                    // Update image source
      nameEl.textContent = current.name;          // Update character name text
      descEl.textContent = current.desc;          // Update description text
      // Update the carousel count display with padded numbers, e.g. "01 / 03"
      countEl.textContent = `${String(currentChar + 1).padStart(2, '0')} / ${characterData.length}`;
    };
  
    // Event listener for left arrow: go to previous character, wrapping around
    leftArrow.addEventListener("click", () => {
      currentChar = (currentChar - 1 + characterData.length) % characterData.length;
      updateCharacter();
    });
  
    // Event listener for right arrow: go to next character, wrapping around
    rightArrow.addEventListener("click", () => {
      currentChar = (currentChar + 1) % characterData.length;
      updateCharacter();
    });
  
    // Initialize the carousel by displaying the first character
    updateCharacter();
  });
  