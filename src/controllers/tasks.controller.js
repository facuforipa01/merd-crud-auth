import Task from "../models/task.js"

export const getTasks = async (req,res) => {
    const user = req.user.id
    const tasks = await Task.findAll({ where: { user: user } })
    res.json(tasks)
}
export const createTask = async (req,res) => {
    const {title, description, date} = req.body
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    })
    const savedTask = await newTask.save()
    res.json(savedTask)
}

export const getTask = async (req,res) => {

    const task = await Task.findOne({ where: { id: req.params.id } })
    if (!task) return res.status(404).json({message: 'task not found'})
    res.json(task)
}

export const deleteTask = async (req,res) => {
    const task = await Task.destroy({where: {id: req.params.id}})
    if(!task) return res.status(404).json({message: 'task not found'})
    return res.sendStatus(204)
}

export const updateTask = async (req,res) => {

    const task = await Task.findOne({ where: { id: req.params.id } })
        if(!task) return res.status(404).json({message: 'task not found'})

   

    if(task){
    const {title, description, date} = req.body
    Task.update({title, description, date},{ where: { id: req.params.id } })}
    res.send({message: 'actualizado con exito'})
    



}

