const express = require('express');
const redis = require('redis');
const router = express.Router();
const { getAsync } = require ('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});


router.get('/statistics', async (req, res) => {
  const todo_count = await getAsync("todo_count")
  res.json({ added_todos: Number(todo_count) })
});

module.exports = router;
