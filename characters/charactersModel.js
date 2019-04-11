const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(character) {
  const [id] = await db('characters').insert(character);

  return db('characters')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return null;
}
