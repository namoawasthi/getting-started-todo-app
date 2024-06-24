const GREETINGS = [
    "Hello world!",
    "All Hands On Deck",
    "Charting the course Ahead"
];

module.exports = async (req, res) => {
    res.send({
        greetings: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    });
};
