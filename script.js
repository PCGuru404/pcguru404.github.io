// Konfiguráljuk a mátrix karakterek paramétereit
const numColumns = 100; // Oszlopok száma
const numLines = 20;    // Sorok száma
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()'; // A megjeleníthető karakterek

// A mátrix háttér létrehozása
const matrixBackground = document.createElement('div');
matrixBackground.classList.add('matrix-background');
document.body.appendChild(matrixBackground);

// Véletlenszerű karakterek generálása és animálása
for (let i = 0; i < numColumns; i++) {
    const line = document.createElement('div');
    line.classList.add('matrix-line');
    matrixBackground.appendChild(line);
    
    // Véletlenszerű karakterek animációja
    const speed = Math.random() * 2 + 1; // Véletlen sebesség
    let content = '';
    let lineIndex = i;

    setInterval(() => {
        content += characters.charAt(Math.floor(Math.random() * characters.length));
        line.innerText = content;
    }, 100);

    line.style.animationDuration = `${speed}s`;
    line.style.left = `${i * 20}px`; // Módosítható oszlopok közötti távolság
}
