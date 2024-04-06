const pool = require('../../db');
const query = require('./queries');


const getAllUser = (req, res) => {

    pool.query(query.getAllUser, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}

const getAllManagerDetail = (req, res) => {
    pool.query(query.fetchAllManager, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}

const getEmployeeById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(query.getEmployeeById, [id], (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}

const getAllTask = (req, res) => {
    pool.query(query.getAllTasks, (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    })
}

const getAllCategory = (req, res) => {
    pool.query(query.getAllCategory, (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    })
}

const createNewTask = (req, res) => {

    const title = req.body.title;
    const descr = req.body.descr;
    const author = parseInt(req.body.author);
    const priority = parseInt(req.body.priority);

    pool.query(query.createNewTask, [title, descr, priority, author], 
        (err, result) => {
        if (err) throw err;
        res.status(200).json({"status": "Result Saved"});
    })
}



module.exports = {
    getAllUser,
    getAllManagerDetail,
    getEmployeeById,
    getAllTask,
    getAllCategory,
    createNewTask,
}