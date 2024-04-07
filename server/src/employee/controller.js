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
        res.status(200).json( {"code" : 200, 'message': 'Created New Task', 'status': 'success'} );
    })
}

const getAllStatusByTask = (req, res) => {
    const taskId = req.params.taskId;
    pool.query( query.getAllStatusByTask, [taskId], (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    }  )
}

const addNewStatusInTask = (req, res) => {
    const taskId = req.body.taskId;
    const status = req.body.status;
    pool.query ( query.addNewStatus, [status, taskId], (err, result) => {
        if (err) throw err;
        res.status(200).json( {"code" : 200, 'message': 'Added New Status', 'status': 'success'} );
    } )
}

const updateCategoryOfTask = (req, res) => {
    const catId = req.body.catId;
    const taskId = req.body.taskId;
    pool.query( query.updateCategoryOfTask, [catId, taskId], (err, result) => {
        if (err) throw err;
        res.status(200).json( {"code" : 200, 'message': 'Updated Category', 'status': 'success'} );
    })
}



module.exports = {
    getAllUser,
    getAllManagerDetail,
    getEmployeeById,
    getAllTask,
    getAllCategory,
    createNewTask,
    getAllStatusByTask,
    addNewStatusInTask,
    updateCategoryOfTask,
}