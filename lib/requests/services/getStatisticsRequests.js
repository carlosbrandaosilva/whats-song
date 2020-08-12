const respository = require('../repository');

module.exports = async () => {
  const project = {
    $project: {
      "_id" : 0,
      "City": "$_id.city",
      "Total Requests": "$total",
    }
  };
  const group = {
    $group: {
      _id: { city: '$city' },
      total: { $sum: 1 }
    }
  };
  const pipeline = [group, project];
  const data = await respository.aggregate(pipeline).toArray();
  return data;
}