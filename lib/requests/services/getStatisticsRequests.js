const respository = require('../repository');

module.exports = async () => {
  const project = {
    $project: {
      city: 1,
    }
  };
  const group = {
    $group: {
      _id: { city: '$city' },
      total: { $sum: 1 }
    }
  };
  const pipeline = [project, group];
  const data = await respository.aggregate(pipeline).toArray();
  return data;
}