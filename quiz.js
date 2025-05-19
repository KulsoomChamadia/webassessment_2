// Wait until the full HTML document is loaded and parsed before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Get the quiz form element by its ID
    const quizForm = document.getElementById("quizForm");
    // Get the audio element that plays the reveal sound
    const revealSound = document.getElementById("revealSound");
  
    // Check if the quiz form exists on the page to avoid errors
    if (quizForm) {
      // Add an event listener to the form to handle form submission
      quizForm.addEventListener("submit", function (e) {
        // Prevent the default form submission behavior (page reload)
        e.preventDefault();
  
        // Collect the selected answers from radio inputs for question 1 and 2
        // The ?. operator safely handles if no option is selected (returns undefined)
        const answers = [
          document.querySelector('input[name="q1"]:checked')?.value,
          document.querySelector('input[name="q2"]:checked')?.value
        ];
  
        // Determine the quiz result:
        // If both answers are the same, use that answer as the result;
        // otherwise, result is "mixed"
        const result = answers.every(ans => ans === answers[0]) ? answers[0] : "mixed";
  
        // Initialize the message variable to store the result description
        let message = "";
        // Use switch statement to assign the appropriate message based on result
        switch (result) {
          case "patient":
            message = "You are The Patient – haunted by trauma, yet holding on.";
            break;
          case "whisper":
            message = "You are The Whisper – silent, lurking, unpredictable.";
            break;
          case "doctor":
            message = "You are The Doctor – curious, rational, dangerously clever.";
            break;
          default:
            message = "You have a mix of traits... a mystery in the night.";
        }
  
        // Check if the audio element for reveal sound exists
        if (revealSound) {
          // Play the reveal sound audio
          revealSound.play().then(() => {
            // When the audio ends, show the result message inside the element with ID "result"
            revealSound.onended = () => {
              document.getElementById("result").innerHTML = `<p><strong>${message}</strong></p>`;
            };
          }).catch(() => {
            // If the audio fails to play, show the result immediately without sound
            document.getElementById("result").innerHTML = `<p><strong>${message}</strong></p>`;
          });
        } else {
          // If there is no audio element, show the result immediately
          document.getElementById("result").innerHTML = `<p><strong>${message}</strong></p>`;
        }
      });
    }
  });
  