const confettiConfig = [
    {
        // empty means default config
    },
    {
        // bottom left corner
        origin: { x: 0, y: 1 },
        angle: 60,
        drift: 1,
    },
    {
        // bottom right corner
        origin: { x: 1, y: 1 },
        angle: 120,
        drift: -1,
    },
    {
        // top right corner
        origin: { x: 1, y: 0 },
        angle: 240,
        drift: -1,
        gravity: 0.5,
    },
    {
        // top left corner
        origin: { x: 0, y: 0 },
        angle: 300,
        drift: 1,
        gravity: 0.5,
    },
];

export const getRandomConfig = () => {
    const randomIndex = Math.floor(Math.random() * 5);

    return confettiConfig[randomIndex];
};
