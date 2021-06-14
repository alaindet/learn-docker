function _renderFeedbackBlock(correct, answer) {
  switch (correct) {
    case true:
      return `
        <p>Doors are opening!</p>
      `;
    case false:
      return `
        <em>Speak, friend, and enter</em>
        <p>Your answer was: <strong>${answer}</strong></p>
        <p>Doors are shut, try again...</p>
      `;
    case null:
      return `
        <em>Speak, friend, and enter</em>
      `;
  }
}

function _renderInteractiveBlock(correct) {
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
            <label>What is your answer?</label>
            <input type="text" name="answer" autofocus>
          </div>
          <button type="Submit">Send Answer</button>
        </form>
      `;
  }
}

function renderDoorForm(userAnswer = null, correctAnswer) {

  const isCorrect = (userAnswer !== null) ? userAnswer === correctAnswer : null;
  const feedbackBlock = _renderFeedbackBlock(isCorrect, userAnswer);
  const interactiveBlock = _renderInteractiveBlock(isCorrect);

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
