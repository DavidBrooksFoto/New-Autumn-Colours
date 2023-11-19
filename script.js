document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }

    const autumnColors = [
        '#FF7F50', '#FFD700', '#FF8C00', '#ADFF2F', '#DEB887',
        // ... add more colors to reach at least 100 unique colors
        '#D2691E', '#8B0000', '#FF4500', '#FFA07A', '#FF6347',
        '#FFA500', '#FFDAB9', '#E9967A', '#FA8072', '#FF69B4',
        '#CD5C5C', '#F08080', '#B22222', '#FF0000', '#8B4513',
        '#A0522D', '#D2B48C', '#DEB887', '#F4A460', '#DAA520',
        // Add more colors as needed
    ];

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
