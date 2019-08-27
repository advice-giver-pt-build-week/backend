
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('advisorsGroup')
    .then(function () {
      // Inserts seed entries
      return knex('advisorsGroup').insert([
        {seeker_id: 1, advisor_id: 7 },
        {seeker_id: 1, advisor_id: 5 },
        {seeker_id: 1, advisor_id: 6 },
        {seeker_id: 1, advisor_id: 7 },
        {seeker_id: 1, advisor_id: 7 }
      ]);
    });
};
