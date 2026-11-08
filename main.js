// LOADER
const loaderTexts = ["> Initializing RootAccess v2.0..."," > Loading Kernel Modules... [OK]"," > Mounting File System... [OK]"," > Establishing Secure Connection..."," > Access Granted. Welcome Admin."];
let j = 0; const loaderTextEl = document.getElementById('loader-text');
const loaderInterval = setInterval(() => {
    if(j < loaderTexts.length) { loaderTextEl.innerHTML += loaderTexts[j] + "<br>"; j++; } 
    else { clearInterval(loaderInterval); document.getElementById('loader').style.display='none'; typing(); }
}, 600);

// MATRIX
const canvas = document.getElementById('matrix'); const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const letters = "01アイウエオカキクケコサシスセソ"; const fontSize = 14;
const columns = canvas.width / fontSize; const drops = [];
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

// HERO TYPING
const heroText = "Executing: Accessing System Root..."; let i = 0;
function typing() { if(i < heroText.length) { document.getElementById('typing').innerHTML += heroText.charAt(i); i++; setTimeout(typing, 80); } }

// TERMINAL
const input = document.getElementById('terminal-input'); const output = document.getElementById('terminal-output');
const commands = { help: "Available: help, whoami, projects, clear, contact", whoami: "Md Saiful Islam - System Engineer", projects: "1. Mini OS Kernel 2. BankSim Core 3. DataCrash Analyzer", contact: "Email: saiful.islam.dvp@gmail.com", clear: "" }
function handleCommand() {
    const cmd = input.value.toLowerCase().trim(); if(cmd === '') return;
    output.innerHTML += `<p>> ${cmd}</p>`;
    if(cmd === 'clear') output.innerHTML = ""; else output.innerHTML += `<p>${commands[cmd] || "Command not found. Type 'help'"}</p>`;
    output.scrollTop = output.scrollHeight; input.value = "";
}
input.addEventListener('keydown', (e) => { if(e.key === 'Enter') handleCommand(); });
function runCommand(cmd){ input.value = cmd; handleCommand(); }
