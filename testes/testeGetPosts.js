const { sequelize, Usuario, Post, Comentario } = require('../models');

// Usuario.findByPk(1).then(
//     usuario => {
//         usuario.getPosts().then(
//             (posts) => {
//                 console.log(posts.map(post => post.toJSON()));
//                 sequelize.close();
//             }
//         );
//     }
// )

// Usuario.findAll({include:[{model:Post, as:'Post', order:[Post, 'id', 'DESC']}], where: { id:2 }}).then(
//     data => {
//         console.log(data.map(u => u.toJSON()));
//     }
// )

// Post.findAll({include:'Usuario', order: [
//     ['id', 'DESC']], where:{ id: 9 }}).then(
//     data => {
//         console.log(data.map(p => p.toJSON()));
//     }
// )

Post.findAll({limit:3, include:[{model:Comentario, as:'Comentario', include:[{model:Usuario, as:'Usuario'}]}, {model:Usuario, as:'Usuario'}], order:[['data_postagem', 'DESC']]}).then(
    data => {
        console.log(data.map(p => p.toJSON()));
    }
)