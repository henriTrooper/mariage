## NodeJS v12

## Prérequis

    Installation NodeJs


## Commandes de lancement des différents Scripts

    Installer les modules : $ npm i
    Lancer le projet :
    $ npm start
    $ nodemon

    Url du projet en local : http://localhost:3000/

    Lancer le linter : $ npm run lint 

    Lancer sonar : $ npm run sonar (demander les credentials pour UI)

    Lancer les tests : $ npm run test

    Url de Swagger pour tester ses routes : http://localhost:3000/api-docs


## Architecture générale du Backend

    - Point d'entrée : src/router/router.js  => Définition de toutes les routes
    - Appel au services (src/services) adéquate
    - Une fois dans le services on effectue les requetages dans la BD.
    - La documentation de Swagger s'effectue dans le service appelé.

    Exemples:

        Appel sur endpoint (post) /addUser (fsrc/router.router.js)
        Appel du service /addUser (src/services/post) 
        Requétage dans la BD (mongodb > save())
        Swagger permet de sécuriser les responses envoyé du back


## Swagger: Tuto https://medium.com/@kirtikau/how-to-add-swagger-ui-to-existing-node-js-and-express-js-project-2c8bad9364ce

    Fichier de base : swagger.js
            - Configuration de Swagger
            - Definition des différents Server
            - Definition du schema de sécurité
            - Définition des consommations des routes
            - Définition des routes
            - Les models des Users
            - Dans "/user/{id}" les parametres sont communs aux deux
    
    1 Fichier par route :  voir  un exemple dans src.services/get/{started}


    Exemple de création de route: delete{id}

        - Création du endPoint dans src/router/router.js
        
            router.delete("/user/:userId", async (req, res) => {
                try {
                    await deleteById(req)
                    res.status(200).json({
                    success: "true",
                    message: "Deleted success",
                    });
                } catch (e) {
                    res.status(400).json({
                    success: "false",
                    message: "Echec de la requete /delete",
                    error: e,
                    });
                }
            });

        - Création du dossier src/services/delete/{id}
        - Création d'un fichier delete.service.js  <services>

            async function deleteById(req) {
                try {
                    console.log(req.params)
                    const id = parseInt(req.params.userId, 10);
                    console.log(id)
                    for(let i = 0; i < userList.length; i++){
                        if(userList[i].id === id){
                            userList.splice(i,1);
                            return id
                        }
                    }
                } catch (e) {
                    return status(400).json({
                    success: "false",
                    message: 'Echec dans le service /delete',
                    error: e,
                    });
                }
}

        - Création d'un fichier delete.swagger.js   <documentation de la route>

                const deleteById = {
                    "parameters": [{
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "description": "ID of user that we want to delete",
                    "type": "integer"
                    }],
                    "summary": "Delete user with given ID",
                    "tags": [
                        "Users"
                    ],
                    "responses": {
                        "200": {
                            "description": "User is deleted",
                            "schema": {
                                "$ref": "#/definitions/User"
                            }
                        }
                    },
                    "definitions": {
                        "User": {
                            "required": [
                                "name",
                                "_id",
                                "companies"
                            ],
                            "properties": {
                                "_id": {
                                    "type": "integer",
                                    "uniqueItems": true
                                },
                                "isPublic": {
                                    "type": "boolean"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "books": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "name": {
                                                "type": "string"
                                            },
                                            "amount": {
                                                "type": "number"
                                            }
                                        }
                                    }

                                },
                                "companies": {
                                    "type": "array",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }

                module.exports = deleteById;

            - Dans le fichier de config Swagger: swagger.js

                Importer deleteByid
                     const deleteById = require('./src/services/delete/id/delete.swagger');

            - Dans la section path > sur la route  "/user/{id}"  > rajouter delete: deleteById

            NB: Ne pas oublier l'import de deleteById dans le router.

            Lancer Swagger, tester la nouvelle route



    






