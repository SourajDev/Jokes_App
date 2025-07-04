document.getElementById("jokeBtn").addEventListener("click", getJoke);

function getJoke() {
    const jokes = [
        "The generation of random numbers is too important to be left to chance.",
        "Why do cows have hooves instead of feet? Because they lactose.",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "Why don’t skeletons fight each other? They don’t have the guts."
    ];
    
    let randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").innerText = jokes[randomIndex];
}
