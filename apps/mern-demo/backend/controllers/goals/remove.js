const { Goal } = require('../../models');

module.exports = async (req, res) => {
  
  console.log('TRYING TO DELETE GOAL');
  
  try {
    await Goal.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Deleted goal!' });
    console.log('DELETED GOAL');
  }
  
  catch (err) {
    console.error('ERROR FETCHING GOALS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to delete goal.' });
  }
};
