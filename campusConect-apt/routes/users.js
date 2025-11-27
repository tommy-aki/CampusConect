/**
 * @swagger
 * components: 
 *  schemas:
 *      usuarios:
 *          type: object
 *          properties:
 *              nombre:
 *                  type: string
 *                  description: Nombre de Usuario
 *              correo:
 *                  type: string
 *                  description: Correo del Usuario
 *              password:
 *                  type: string
 *                  description: Contraseña del Usuario
 *              carrera:
 *                  type: string
 *                  description: Carrera que estudia el Usuario
 *          required:
 *              - nombre
 *              - correo
 *              - password
 *              - carrera
 */

/**
 * @swagger
 * tags:
 *  - name: usuarios
 *    description: Los endpoints del usuario
 * /users/:
 *  post:
 *      summary: Crear un nuevo usuario
 *      tags: [usuarios]
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          nombre:
 *                              type: string
 *                              description: Nombre del usuario
 *                          correo:
 *                              type: string
 *                              description: Correo del usuario
 *                          password:
 *                              type: string
 *                              description: Contraseña del usuario
 *                          carrera:
 *                              type: string
 *                              description: Carrera del usuario
 *                      required:
 *                          - nombre
 *                          - correo
 *                          - password
 *                          - carrera
 *      responses:
 *          200:
 *              description: Usuario creado exitosamente
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
 *                                      $ref: '#/components/schemas/usuarios'
 *
 */

var router = require("express").Router()

const userCtrl = require("../controllers/users")

router.post('/new', userCtrl.createNewUser)
router.get('/list', userCtrl.getAllUsers)

module.exports = router;
