/**
 * @swagger
 * components: 
 *  schemas:
 *      publicaciones:
 *          type: object
 *          properties:
 *              idUser:
 *                  type: integer
 *                  description: ID del Usuario que creó el Post
 *              titulo:
 *                  type: string
 *                  description: Titulo del post
 *              contenido:
 *                  type: string
 *                  description: Contenido del post
 *              categorias:
 *                  type: string
 *                  description: Categorias a la que pertenece el post
 *              fecha:
 *                  type: string
 *                  format: date
 *                  description: Fecha de creación del post
 *          required:
 *              - idUser
 *              - titulo
 */

/**
 * @swagger
 * tags:
 *  - name: publicaciones
 *    description: Los endpoints de las publicaciones
 * /posts/:
 *  post:
 *      summary: Crear un nuevo post
 *      tags: [publicaciones]
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                     type: object
 *                     properties:
 *                          idUser:
 *                              type: integer
 *                              description: ID del Usuario que creó el Post
 *                          titulo:
 *                              type: string
 *                              description: Titulo del post
 *                          contenido:
 *                              type: string
 *                              description: Contenido del post
 *                          categorias:
 *                              type: string
 *                              description: Categorias a la que pertenece el post
 *                          fecha:
 *                              type: string
 *                              format: date
 *                              description: Fecha de creación del post
 *                     required:
 *                            - idUser
 *                            - titulo
 *      responses:
 *          201:
 *              description: Post creado exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              status:
 *                                  type: string
 *                              data:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/publicaciones'
 *          500:
 *              description: Error crítico del servidor
 *          400: 
 *              description: Error, request vacío
 *          422:
 *              description: Error, prametros obligatorios idUser o titulo vacíos
 */


var router = require("express").Router()

const postsCtrl = require("../controllers/posts")

router.post('/new', postsCtrl.createNewPost)

module.exports = router;