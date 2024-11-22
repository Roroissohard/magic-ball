// Step 1: Define userName
const userNameInput = document.getElementById('userName');
const userQuestionInput = document.getElementById('userQuestion');
const askButton = document.getElementById('askButton');
const greeting = document.getElementById('greeting');
const questionDisplay = document.getElementById('question');
const answerDisplay = document.getElementById('answer');

// Step 2-8: Add logic for Magic 8 Ball
askButton.addEventListener('click', () => {
  const userName = userNameInput.value;
  const userQuestion = userQuestionInput.value;

  // Greeting
  greeting.textContent = userName ? `Hello, ${userName}!` : 'Hello!';

  // Display the user's question
  if (userQuestion.trim() !== '') {
    questionDisplay.textContent = `You asked: "${userQuestion}"`;

    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 8);

    // Determine the 8 ball's answer
    let eightBall = '';
    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain';
        break;
      case 1:
        eightBall = 'It is decidedly so';
        break;
      case 2:
        eightBall = 'Reply hazy, try again';
        break;
      case 3:
        eightBall = 'Cannot predict now';
        break;
      case 4:
        eightBall = 'Do not count on it';
        break;
      case 5:
        eightBall = 'My sources say no';
        break;
      case 6:
        eightBall = 'Outlook not so good';
        break;
      case 7:
        eightBall = 'Signs point to yes';
        break;
    }

    // Display the answer
    answerDisplay.textContent = eightBall;
  } else {
    questionDisplay.textContent = 'Please enter a question!';
    answerDisplay.textContent = '';
  }
});
