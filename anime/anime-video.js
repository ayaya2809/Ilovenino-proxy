window.onload = function() {
    var firstPart = document.querySelector('.part');
    var firstAnimesrv = document.querySelector('.anime-srv');
    // var firstEpisode = document.querySelector('.anime');
    firstPart.style.backgroundColor = 'red';
    firstAnimesrv.style.backgroundColor = 'red';
    // firstEpisode.style.backgroundColor = 'red';
  };

// Lấy tất cả các phần tử có class 'anime'
let episodes = document.querySelectorAll('.anime');

// Lặp qua từng tập phim
episodes.forEach((episode) => {
  // Thêm sự kiện click cho mỗi tập
  episode.addEventListener('click', function() {
    // Reset màu nền cho tất cả các tập
    episodes.forEach((ep) => {
      ep.style.backgroundColor = '';
    });

    // Đặt màu nền của tập được click thành màu đỏ
    this.style.backgroundColor = 'red';
    document.querySelector('.play-wait').style.display = 'none';
    document.querySelector('.frame-video').style.display = 'block';
    document.querySelector('.anime-player iframe').src = this.getAttribute('onclick').split("'")[1];
  });
});

// Lấy tất cả các phần tử có class 'part'
let seasons = document.querySelectorAll('.part');

// Lặp qua từng season
seasons.forEach((season,index) => {
  season.addEventListener('click', function() {
    episodes.forEach((episode) => {
      episode.style.backgroundColor = '';
    });
    seasons.forEach((se) => {
      se.style.backgroundColor = '';
    });
    document.querySelector('.frame-video').style.display = 'none';
    document.querySelector('.play-wait').style.display = 'block';

    // Đặt màu nền của season được click thành màu đỏ
    this.style.backgroundColor = 'red';
    document.querySelector('.anime-player iframe').src = '';

    seasons.forEach((_,index) => {
      document.querySelector(`.anime-list-ss${index+1}`).style.display = 'none'
    });
    document.querySelector(`.anime-list-ss${index+1}`).style.display = 'flex';
  });
});

// Quay lai di
// let docTitle = document.title;
// window.addEventListener ("blur", () => {
//   document.title = "Come back đi mà :(";
// })
// window.addEventListener("focus", () => {
//   document.title = docTitle;
// })

// Auto click ep1
// document.addEventListener("DOMContentLoaded", function() {
//   var divElement = document.querySelector(".ep1");

//   if (divElement) {
//     divElement.click();
//   }
// });

