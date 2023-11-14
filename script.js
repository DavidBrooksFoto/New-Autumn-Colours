document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }

    const autumnColors = ['#FF7F50', '#FFD700', '#FF8C00', '#ADFF2F', '#DEB887'];

    setInterval(() => {
        document.querySelectorAll('.cell').forEach(cell => {
            const randomColor = autumnColors[Math.floor(Math.random() * autumnColors.length)];
            cell.style.backgroundColor = randomColor;
        });
    }, getRandomInterval());
});

function getRandomInterval() {
    return Math.random() * (4000 - 500) + 500;
}
