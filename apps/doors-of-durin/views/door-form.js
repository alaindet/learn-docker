function renderFeedbackBlock(correct, answer) {
  switch (correct) {
    case true:
      return '<p>Doors are opening!</p>';
    case false:
      return `
        <p>Your answer was: <strong>${answer}</strong></p>
        <p>Doors are shut, try again...</p>
      `;
    case null:
      return '<p>Answer the riddle to open the doors</p>';
  }
}

function renderInteractiveBlock(correct) {
  switch (correct) {
    case true:
      return `
        <section>
          <a href="/">Play again</a>
        </section>
      `;
    case false:
    case null:
      return `
        <form action="/answer" method="POST">
          <div class="form-control">
            <label>What do you say?</label>
            <input type="text" name="answer" autofocus>
          </div>
          <button type="Submit">Send Answer</button>
        </form>
      `;
  }
}

function renderDoorForm(userAnswer = null, correctAnswer) {

  const isCorrect = (userAnswer !== null) ? userAnswer === correctAnswer : null;
  const feedbackBlock = renderFeedbackBlock(isCorrect, userAnswer);
  const interactiveBlock = renderInteractiveBlock(isCorrect);

  return `
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h1>Doors of Durin</h1>
          ${feedbackBlock}
        </section>
        ${interactiveBlock}
      </body>
    </html>
  `;
}

module.exports = renderDoorForm;
