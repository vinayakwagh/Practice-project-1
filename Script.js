const btn = document.getElementById('actionBtn');
const msg = document.getElementById('message');

btn.addEventListener('click', () => {
    msg.innerText = "You clicked the button! 🚀";
    btn.style.backgroundColor = "#28a745"; // Changes color to green
});