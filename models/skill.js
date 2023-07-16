const skills = [
    {
        id: 0,
        name: "javascript",
        description: "I've been enjoying javascript a lot lately"
    },
    {
        id: 1,
        name: "HTML",
        description: "HTML is the structure of the web"
    },
    {
        id: 2,
        name: "CSS",
        description: "CSS is difficult but very powerful"
    },
    {
        id: 3,
        name: "React",
        description: "I've been learning React, although a little confusing at times, I see it's ability to build clean front-end apps"
    },
    {
        id: 4,
        name: "Express",
        description: "Express is a backend web application framework, I'm just getting started but would love to learn more"
    }
];

const getAll = () => {
    return skills;
}

const getOne = (id) => {
    id = parseInt(id);
    return skills.find(s => s.id === id);
}

const create = (skill) => {
    skill.id = Date.now() * 1000000;
    skills.push(skill);
}

const destroy = (id) => {
    id = parseInt(id);
    const idx = skills.findIndex(s => s.id === id);
    skills.splice(idx, 1);
}

const update = (id, updatedSkill) => {
    id = parseInt(id);
    const skill = skills.find(s => s.id === id);
    Object.assign(skill, updatedSkill);
}

module.exports = {
    getAll,
    getOne,
    create,
    destroy,
    update
}