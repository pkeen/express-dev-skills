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

router.get('/', skillsCtrl.index);

router.get('/:id', skillsCtrl.show);

module.exports = router;
