const Skill = require('../models/skill');

const index = (req, res) => {

    res.render('skills/index', {
        skills: Skill.getAll()
    });
    console.log(Skill.getAll());
    // res.send('hello');
}

const show = (req, res) => {
    console.log(Skill.getOne(req.params.id));
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

const newSkill = (req, res) => {
    res.render('skills/new');
}

const create = (req, res) => {
    Skill.create(req.body);
    res.redirect('/skills')
}

const destroy = (req, res) => {
    Skill.destroy(req.params.id);
    res.redirect('/skills');
}

const edit = (req, res) => {
    console.log("edit")
    res.render(`skills/edit`, {
        skill: Skill.getOne(req.params.id)
    });
}

const update = (req, res) => {
    console.log("put");
    console.log(req.body);

    Skill.update(req.params.id, req.body);
    res.redirect('/skills');
}

module.exports = {
    index,
    edit,
    show,
    new: newSkill,
    create,
    destroy,
    update
}