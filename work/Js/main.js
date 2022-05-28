document.addEventListener(
  "play",
  function (evt) {
    if (this.$AudioPlaying && this.$AudioPlaying !== evt.target) {
      this.$AudioPlaying.pause();
    }
    this.$AudioPlaying = evt.target;
  },
  true
);

const searchBar = document.querySelector(".search");
const searchInput = document.getElementById("search-input");
const menuBar = document.querySelector(".bars");
const navItems = document.querySelector(".nav-items");
const close = document.querySelector(".close");
const navLinks = document.querySelectorAll(".nav-links");
const contactBtn = document.querySelector(".cbtn");
const musicSect = document.querySelector(".home-music");
console.log(musicSect);
menuBar.addEventListener("click", () => {
  navItems.classList.add("nav-bar");
});

// const songs = [
//   {
//     Title: "Calum Scott-You Are The Reason",
//     Song: "work/audio/n2.mp3",
//   },
//   {
//     Title: "Calum Scott-You Are The Reason",
//     Song: "work/audio/n2.mp3",
//   },
//   {
//     Title: "Calum Scott-You Are The Reason",
//     Song: "work/audio/n2.mp3",
//   },
//   {
//     Title: "Calum Scott-You Are The Reason",
//     Song: "work/audio/n2.mp3",
//   },
// ];

// const renderMusic = () => {
//   songs.forEach((song) => {
//     musicSect.innerHTML += `
//   <div class="audio-1">
//   <p>${song.Title}</p>
//   <audio controls>
//   <source src=${song.Song}>
//   Your browser does not support the audio element.
// </audio>`;
//   });
// };

// renderMusic();

searchBar.addEventListener("click", () => {
  searchInput.classList.toggle("display");

  // if (searchInput.classList.contains('display')) {
  //     searchInput.classList.remove('display')
  // }else
  // {
  //     searchInput.classList.add('display')
  // }
});

function closeBtn() {
  navItems.classList.remove("nav-bar");
}

close.addEventListener("click", closeBtn);

navLinks.forEach((element) => {
  element.addEventListener("click", closeBtn);
});

contactBtn.addEventListener("click", () => {
  alert("Thanks For Subscribing");
});
