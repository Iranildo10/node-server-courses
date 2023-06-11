const express = require('express');
const server = express();


const cursos = ['Node JS', 'Java Script', 'React Native', 'React JS'];

// #region MIDDLEWARES
//Middleware Global
server.use((req, res, next) => {
    console.log(`URL chamada ${req.url}`);

    return next();
});

function checkCurso(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: "Nome do curso é obrigatório" });
    }

    return next();
}

function checkIndexCurso(req, res, next) {
    const curso = cursos[req.params.index];

    if (!curso) {
        return res.status(400).json({ error: "O curso não existe" });
    }

    return next();
}

// #endregion


// #region SERVER CONFIG
server.use(express.json());
server.listen(3000);


// #endregion

// #region ROUTES
// read all courses
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

// find courses by Id
server.get('/cursos/:index', checkIndexCurso, (req, res) => {
    const { index } = req.params;


    return res.json(cursos[index]);
});

// create a new course
server.post('/cursos', checkCurso, (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

// update course by Id
server.put('/cursos/:index', checkIndexCurso, checkCurso, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);

})

// delete course by Id
server.delete('/cursos/:index', checkIndexCurso, (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);

    return res.json(cursos);
});

// #endregion