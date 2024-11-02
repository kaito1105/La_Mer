var videoElem = document.getElementById('video');

videoElem.addEventListener('loadedmetadata', function() {
    videoElem.playbackRate = 0.7;
})

const links = document.querySelectorAll('a[href^="#"]')
 
links.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    const href = el.getAttribute('href')
    const target = document.getElementById(href.replace('#', ''))
    target.scrollIntoView({
      behavior: 'smooth'
    })
  })
})