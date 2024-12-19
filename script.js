// Define mood-to-color and mood-to-playlist mappings
const moodData = {
    happy: {
      color: "#FFD700", // Gold
      playlist: ["Happy by Pharrell Williams", "Walking on Sunshine by Katrina & The Waves", "Can't Stop the Feeling! by Justin Timberlake"],
    },
    calm: {
      color: "#87CEFA", // Light Sky Blue
      playlist: ["Weightless by Marconi Union", "Breathe Me by Sia", "Bloom by The Paper Kites"],
    },
    energetic: {
      color: "#FF4500", // Orange Red
      playlist: ["Eye of the Tiger by Survivor", "Stronger by Kanye West", "Don't Stop Me Now by Queen"],
    },
    sad: {
      color: "#708090", // Slate Gray
      playlist: ["Someone Like You by Adele", "Fix You by Coldplay", "Hurt by Johnny Cash"],
    },
  };
  
  // Function to update the mood
  function updateMood(mood) {
    const { color, playlist } = moodData[mood];
  
    // Change the background color
    document.body.style.backgroundColor = color;
  
    // Update the playlist
    const playlistElement = document.getElementById("playlist-songs");
    playlistElement.innerHTML = ""; // Clear existing playlist
  
    playlist.forEach((song) => {
      const li = document.createElement("li");
      li.textContent = song;
      playlistElement.appendChild(li);
    });
  }
  
  // Add event listeners to buttons
  document.querySelectorAll(".mood-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const mood = button.dataset.mood;
      updateMood(mood);
    });
  });