const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

const text = "Token Tron - Widespread Adoption";
let i = 0;
const speed = 200; // Time for every characters

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // pulsim cursor
        const cursor = document.createElement('span');
        cursor.className = "cursor";
        cursor.innerHTML = "|";
        document.getElementById("typewriter").appendChild(cursor);
    }
}

window.onload = typeWriter;
