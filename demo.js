function updateGreeting() {
    const greetingMessage = document.getElementById('greeting-message');
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetingMessage.textContent = "Good Morning!";
    } else if (currentHour < 18) {
        greetingMessage.textContent = "Good Afternoon!";
    } else {
        greetingMessage.textContent = "Good Evening!";
    }
}
