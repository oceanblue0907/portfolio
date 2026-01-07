// Cursor Follow Logic
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");
window.addEventListener("mousemove", (e) => {
    dot.style.left = outline.style.left = e.clientX + "px";
    dot.style.top = outline.style.top = e.clientY + "px";
});

// Skill Bar Animation Trigger
const skillBars = document.querySelectorAll('.skill-per');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.style.width = entry.target.style.getPropertyValue('--w');
        }
    });
}, { threshold: 0.5 });
skillBars.forEach(bar => skillObserver.observe(bar));

// Copy Email Logic
function copyEmail() {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email);
    const btn = document.getElementById("copy-btn");
    btn.innerText = "Copied!";
    setTimeout(() => { btn.innerText = "Copy Email"; }, 2000);
}