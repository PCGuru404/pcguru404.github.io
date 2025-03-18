// Mátrix háttér létrehozása
const matrix = document.createElement('div');
matrix.className = 'matrix';
document.body.appendChild(matrix);

const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const columns = Math.floor(window.innerWidth / 20);
const drops = [];

// Inicializálás
for (let i = 0; i < columns; i++) {
    drops.push(0);
}

// Frissítési funkció
function draw() {
    matrix.innerHTML = '';
    for (let i = 0; i < drops.length; i++) {
        let char = chars[Math.floor(Math.random() * chars.length)];
        let span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.left = `${i * 20}px`;
        span.style.top = `${drops[i] * 20}px`;
        span.style.color = '#00ff99';
        span.style.fontSize = '20px';
        span.style.opacity = '0.75';
        span.innerText = char;
        matrix.appendChild(span);

        // Drop mozgás
        if (drops[i] * 20 > window.innerHeight) {
            drops[i] = 0;
        } else {
            drops[i]++;
        }
    }

    requestAnimationFrame(draw);
}

draw();
