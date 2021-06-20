const { Goal } = require('../../models');

module.exports = async (req, res) => {

  console.log('TRYING TO STORE GOAL');
  const goalText = req.body.text;

  if (!goalText || goalText.trim().length === 0) {
    console.log('INVALID INPUT - NO TEXT');
    return res.status(422).json({
      message: 'Invalid goal text.',
    });
  }

  const goal = new Goal({
    text: goalText,
  });

  try {
    await goal.save();
    res.status(201).json({
      message: 'Goal saved',
      goal: { id: goal.id, text: goalText }
    });
    console.log('STORED NEW GOAL');
  }
  
  catch (err) {
    console.error('ERROR FETCHING GOALS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to save goal.' });
  }
}
