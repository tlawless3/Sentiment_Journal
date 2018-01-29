var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/sentimentJournal');

var Journals = db.define('journal', {
  Content: {
    type: Sequelize.TEXT,
  },
  Score: {
    type: Sequelize.INTEGER,
  },
  entryDate: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  }
});

module.exports = {
  db: db,
  Journals: Journals,
}
