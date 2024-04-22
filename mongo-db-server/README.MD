# Taskmanager Server Code
<hr>
TaskManager is a feature-rich application designed to efficiently organize tasks, manage schedules, and track progress, providing users with a comprehensive tool for task management and productivity enhancement.

* Create task and set priority.
* Manage status for all task and keep latest status on top.
* High Priority task will provide reminder.
* Set deadline for a task.
* Attach media, emails and other files to a task.

## Apis
* ##### POST /v1/task/new  
    
    body:
    {
    "title": "What",
    "descr": "hoe",
    "author": "Nishu",
    "priority": "High"
    }

    response:
    {
        status:200,
        "message": "SUCCESS"
    }

* #### GET /v1/task/all
    response: provide all task according to user

* #### GET task-category
    response: show category of all task.

* #### POST /v1/status/add
    body:
    {
    "taskId": 17,
    "status": "Break into"
    }
* #### GET /v1/status/{taskid}
    response: Shows all status of task in descending order
* #### POST /v1/task/category/update
    body:
    {
    "catId": "hold",
    "taskId": 2
    }

