const { Goal } = require('../../models');

module.exports = async (req, res) => {
  
  console.log('TRYING TO FETCH GOALS');
  
  try {
    const goals = await Goal.find();
    res.status(200).json({
      goals: goals.map(goal => ({ id: goal.id, text: goal.text })),
    });
    console.log('FETCHED GOALS');
  }
  
  catch (err) {
    console.error('ERROR FETCHING GOALS');
    console.error(err.message);
    res.status(500).json({
      message: 'Failed to load goals.',
    });
  }
};
