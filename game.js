// Randonly get computer's choice
const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
