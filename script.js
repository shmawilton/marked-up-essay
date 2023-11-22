document.addEventListener('DOMContentLoaded', function () {
    const sentences = [
      'The Impact of Computers on Human Society'
    ];
    
    let currentIndex = 0;
    let offset = 0;
    const sentenceElement = document.querySelector('.titl');
    let forwards = true;
    let skipCount = 0;
    const skipDelay = 15;
    const speed = 70;
  
    const updateSentence = () => {
      sentenceElement.textContent = sentences[currentIndex].substring(0, offset);
    };
  
    const handleAnimation = () => {
      if (forwards) {
        if (offset >= sentences[currentIndex].length) {
          if (++skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else if (offset === 0) {
        forwards = true;
        currentIndex = (currentIndex + 1) % sentences.length;
      }
  
      if (skipCount === 0) {
        forwards ? offset++ : offset--;
      }
  
      updateSentence();
    };
  
    setInterval(handleAnimation, speed);
  });

  document.addEventListener("DOMContentLoaded", function() {
    var toc = document.getElementById("table-of-contents");
    var headings = document.querySelectorAll("h2");

    headings.forEach(function(heading, index) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");

        link.href = "#heading" + index;
        link.textContent = heading.textContent;
        listItem.appendChild(link);

        toc.appendChild(listItem);

        heading.id = "heading" + index;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 }); // Trigger when at least 50% of the 'Introduction' is visible

    const introduction = document.querySelector('#introduction');
    observer.observe(introduction);
});
