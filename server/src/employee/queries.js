const getAllUser = "SELECT * FROM EMPLOYEE";
const fetchAllManager = "SELECT m.e_name as manager, e.e_name as employee from employee m inner join employee e on m.e_id = e.m_id ";
const getEmployeeById = "select * from employee where e_id= $1";

//-------Task related queries
const getAllTasks = "select  \n" +
    " t.task_id as id,  \n" +
    " t.task_title as title, \n" +
    " t.task_descr as subject, \n" +
    " e.e_name as author,  \n" +
    " t.created_at as time,  \n" +
    " s.s_descr as status,  \n" +
    " c.cat_descr as category,  \n" +
    " CASE \n"+
	"	WHEN T.TASK_PRIORITY = '1' THEN 'LOW' \n"+
	"	WHEN T.TASK_PRIORITY = '2' THEN 'MEDIUM' \n"+
	"	WHEN T.TASK_PRIORITY = '3' THEN 'MODERATE' \n"+
	"	WHEN T.TASK_PRIORITY = '4' THEN 'HIGH' \n"+
	"	WHEN T.TASK_PRIORITY = '5' THEN 'EXTREAM' \n"+
	" END AS priority \n"+
    " from task t  \n" +
    " inner join employee e on t.created_by = e.e_id  \n" +
    " LEFT join task_status s on t.last_status = s.s_id  \n" +
    " inner join task_category c on t.category = c.cat_id \n";


const createNewTask = " INSERT INTO task( \n"+
	" task_title, task_descr, task_priority, created_at,  \n"+
	" created_by, category) \n" +
	" VALUES ($1, $2, $3, CURRENT_TIMESTAMP, $4, 1) "


const getAllCategory = "select * from task_category";


module.exports = {
    getAllUser,
    fetchAllManager,
    getEmployeeById,
    getAllTasks,
    getAllCategory,
    createNewTask,
}