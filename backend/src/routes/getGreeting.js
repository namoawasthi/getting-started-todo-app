const GREETINGS = [
    "Buffallo world!",
    "All Hands On Deck",
    "Charting the course Ahead"
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[Math.floor( Math.random() * GREETINGS.length )],
    });
};
