console.log('🔥 LOAD 🔥')

const targets = document.querySelectorAll('img');

// window.addEventListener('scroll', (event) => {
//   targets.forEach(img => {
//     console.log('🔥')
//     const rect = img.getBoundingClientRect().top;
//     if (rect <= window.innerHeight) {
//       const src = img.getAttribute('data-lazy');
//       img.setAttribute('src', src);
//       img.classList.add('fade');
//     }
//   })
// });

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {
      console.log('🔥');

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
        const parent = img.parentNode; 

        img.setAttribute('src', src);
        parent.classList.add('fade');

        observer.disconnect();
      }
    })
  });

  io.observe(target);
}

targets.forEach(lazyLoad);