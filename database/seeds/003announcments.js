
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('announcements')
    .then(function () {
      // Inserts seed entries
      return knex('announcements').insert([
        {id: 1, newAnnouncement: "We are happy to announce Group Help Monday."},
       ]);
    });
};
