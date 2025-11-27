const {Publicaciones} = require('../models')

const createNewPost = async (request, response) => {
    try{
        const data = request.body;
        if (!data || Object.keys(data).length === 0) {
            return response.status(400).json({
                status: "Error",
                message: "Request body cannot be empty"
            });
        }
        if (!data.titulo || !data.idUser){
            return response.status(422).json({
                status: "Missing parameters",
                message: "An expected parameter was null."
            });
        }
        const newPost = await Publicaciones.create(request.body);
        response.status(201).json({
            status: "Success",
            message: "Post created succesfully",
            data: newPost
        })
    } catch (error) {
        response.status(500).json({
                status: "Error",
                message: error.message
            })
    }

};

module.exports = {
    createNewPost,
    
}