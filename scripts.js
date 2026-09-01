
/* BOTON FULLSCREEN */

var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


/* ZOOM IMAGES */

document.querySelectorAll('.estampilla-zoom').forEach(i => {
  i.addEventListener('click', evt => {
    if (i.classList.contains('zoomed'))
      i.style.transform = ''
    else {
      const myScale = 500 / i.clientWidth
      i.style.transform = `scale(${myScale})`
    }
    i.classList.toggle('zoomed')
  })
})


/* MAPA DE CORDOBA */



/* NAVBAR  hide/show on scroll 

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

*/

/* 

// Audio automatico con scroll
const body = document.getElementById(".body");
const audioscroll = document.querySelectorAll(".audioscroll");


const options = {
    root: null,
    rootMargin: "-40px",
    threshold: 0.6,
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
        if(entry.isIntersecting){
            //elemento visible
            entry.target.play();
        }else{
            entry.target.pause();
        }
    });
}, options);



function multimediaFoco(entries){
    let entry = entries[0];
    if(entry.isIntersecting){
        //elemento visible
        audioscroll.play();
    }
    else{
        audioscroll.pause();
    }
}

audioscroll.forEach(audioscroll => { 
    observer.observe(audioscroll);
});

*/


const track = document.getElementById('track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
  // Move forward by the width of one image
  track.scrollLeft += track.offsetWidth;
});

prevBtn.addEventListener('click', () => {
  // Move backward by the width of one image
  track.scrollLeft -= track.offsetWidth;
});

// Optional: Loop back to start/end
track.addEventListener('scroll', () => {
  const maxScrollLeft = track.scrollWidth - track.clientWidth;
  
  // Basic logic to handle button visibility if you want to hide them at ends
  prevBtn.style.display = track.scrollLeft <= 0 ? 'none' : 'block';
  nextBtn.style.display = track.scrollLeft >= maxScrollLeft ? 'none' : 'block';
});







// EFECTO ESCRITURA EN SCROLL

document.addEventListener("DOMContentLoaded", () => {
  // 1. Select all the parent containers
  const containers = document.querySelectorAll('.typewriter-container');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Triggers when 20% of the container is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start the sequence for this container
        startContainerTypewriter(entry.target);
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  // 2. Prepare the children inside each container
  containers.forEach(container => {
    // Get all child elements (e.g., h2, p)
    const children = Array.from(container.children);
    
    children.forEach(child => {
      // Save the original text
      child.dataset.originalText = child.textContent.trim();
      
      // Clear the text but keep a non-breaking space so the layout 
      // doesn't collapse (prevents page jumping)
      child.innerHTML = '&nbsp;'; 
      
      // Hide it completely until it's time to type
      child.style.visibility = 'hidden'; 
    });

    // Observe the whole container
    observer.observe(container);
  });

  // 3. The typing logic for a whole container
  function startContainerTypewriter(container) {
    const children = Array.from(container.children);
    let currentChildIndex = 0;

    // Function to type one child element at a time
    function typeNextChild() {
      // If we've typed all children, stop
      if (currentChildIndex >= children.length) return; 

      const child = children[currentChildIndex];
      const text = child.dataset.originalText;
      let charIndex = 0;

      // Prepare this specific child to be typed
      child.innerHTML = ''; 
      child.style.visibility = 'visible';
      child.classList.add('typing-active');

      // Function to type characters of the current child
      function typeChar() {
        if (charIndex < text.length) {
          child.textContent += text.charAt(charIndex);
          charIndex++;
          
          // Randomize typing speed (30ms - 80ms)
          const typingSpeed = Math.floor(Math.random() * 50) + 30;
          setTimeout(typeChar, typingSpeed);
        } else {
          // Finished typing this element
          child.classList.remove('typing-active');
          currentChildIndex++;
          
          // Pause for 300ms before starting the next paragraph
          setTimeout(typeNextChild, 300); 
        }
      }
      
      // Start typing the characters for this element
      typeChar();
    }

    // Kick off the first element
    typeNextChild();
  }
});