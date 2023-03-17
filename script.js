// Header Toggle

let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function(e){
  document.querySelector('body').classList.toggle('mobile-nav-active')
  this.classList.toggle('fa-xmark');
})

// Typing Effect

let typed = new Typed('.auto-input', {
  strings: ['Back-End Developer!', 'Back-End Developer!', 'Freelancer!', 'Youtuber!'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});