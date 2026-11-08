// MATRIX
const canvas = document.getElementById('matrix'); const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const letters = "01"; const fontSize = 14; const columns = canvas.width / fontSize; const drops = [];
for(let i = 0; i < columns; i++) drops[i] = 1;
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00FF00'; ctx.font = fontSize + 'px monospace';
    for(let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0; drops[i]++;
    }
}
setInterval(drawMatrix, 33);

// LOGIN
const correctPass = "rootaccess123";
function login() {
    const pass = document.getElementById('pass').value;
    if(pass === correctPass) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block'; startSystem();
    } else { document.getElementById('error').innerText = "ACCESS DENIED. Invalid Password."; }
}
function logout() { location.reload(); }
function startSystem() {
    setInterval(() => {
        document.getElementById('cpu').innerText = Math.floor(Math.random() * 100) + "%";
        document.getElementById('ram').innerText = (Math.random() * 8).toFixed(1) + "GB";
        document.getElementById('users').innerText = Math.floor(Math.random() * 50);
    }, 2000);
    const logs = ["User admin logged in","Firewall: Blocked IP 192.168.1.55","Database backup [OK]","Kernel Module loaded","New connection on port 443"];
    let logIndex = 0;
    setInterval(() => {
        const syslog = document.getElementById('syslog');
        syslog.innerHTML += `<p>> ${logs[logIndex]}</p>`;
        syslog.scrollTop = syslog.scrollHeight; logIndex = (logIndex + 1) % logs.length;
    }, 3000);
      }
