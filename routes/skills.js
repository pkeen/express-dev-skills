const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');
// const Skill = require('../models/skill');
// require contoller
// const skillsCtrl = require('../controllers/skills');

// router.get('/', (req, res) => {
//     console.log(Skill.getAll());
//     res.render('skills/index', {
//         skills: Skill.getAll()
//     })
// });
// router.get('/', (req, res) => {
//     res.send('hello');
// })

// GET /skills
router.get('/', skillsCtrl.index);

// New Skill
// GET /skills/new
router.get('/new', skillsCtrl.new);
// POST /skills
router.post('/', skillsCtrl.create);

// Edit
// GET /:id/edit
router.get('/:id/edit', skillsCtrl.edit)
// PUT /:id
router.put('/:id', skillsCtrl.update)


// Show Skill
// GET /skills/:id
router.get('/:id', skillsCtrl.show);

// Delete Skill
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.destroy)



module.exports = router;
