## NodeJS v12

## Prérequis

    Installation NodeJs

    Commande python pour generer le token admin: Attention au secret, il doit etre identique a process.env.JWT_TOKEN
    $ AUTHORIZATION="true" NAME="admin" EMAIL="mersch.henri@icloud.com" EXPIREIN=1634389472 SECRET="henriJWT" python encrypting.py

    TOKEN_ADMIN a ajouter pour l'authorization dans openAPI:
    $ eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpemF0aW9uIjoidHJ1ZSIsIm5hbWUiOiJhZG1pbiIsImVtYWlsIjoibWVyc2NoLmhlbnJpQGljbG91ZC5jb20iLCJleHAiOjE2MzQzODk0NzJ9.sYijTBmwJekE0cvYTqc___NAi3kIsv5635iA_lrRUjc


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


## Swagger: Tuto https://medium.com/wolox/documenting-a-nodejs-rest-api-with-openapi-3-swagger-5deee9f50420

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
        
           router.delete('/user/:userId', async (req, res) => {
                try {
                    if (req.params.userId) {
                    await deleteById(req, res);
                    } else {
                    return res.status(400).json({
                        success: false,
                        message: 'No param ID find',
                    });
                    }
                } catch (e) {
                    res.status(400).json({
                    success: false,
                    message: 'Echec de la requete DELETE /user/:userId',
                    error: e,
                    });
                }
                });

        - Création du dossier src/services/delete/{id}
        - Création d'un fichier delete.service.js  <services>

            async function deleteById(req, res) {
                    const id = req.params.userId ;
                    return await Regiments.findByIdAndRemove(id, {useFindAndModify: false}, function (err, user) {
                    if (err) {
                        return res.status(400).json({
                        success: false,
                        message: "Delete Echec"
                        })
                    }
                    if (user) {
                        return res.status(200).json({
                        success: true,
                        user: user
                        })
                    }
                    else {
                    return res.status(400).json({
                        success: false,
                        message: "ID not find"
                        })
                    }
                    });
                }

        - Création d'un fichier delete.swagger.js   <documentation de la route>

               const deleteById = {
                        tags: [
                            'Users',
                        ],
                        summary: 'Delete user with given ID',
                        description: 'Delete ID',
                        operationId: 'deletebyId',
                        parameters: [],
                        responses: {
                            200: {
                            description: 'User is deleted',
                            content: {
                                'application/json': {
                                schema: {
                                    $ref: '#/definitions/User'
                                },
                                example: {
                                    success: true,
                                    user: "user"
                                }
                                }
                            }
                            },
                            400: {
                            description: 'Echec Delete',
                            content: {
                                'application/json': {
                                schema: {
                                    $ref: '#/definitions/Error'
                                },
                                example: {
                                    success: false,
                                    message: 'Echec Delete',
                                    options: "error stack"
                                }
                                }
                            }
                            }
                        }
                }

                module.exports = {
                        deleteById,
                };


            - Dans le fichier de config Swagger: swagger.js

                Importer deleteByid
                     const deleteById = require('./src/services/delete/id/delete.swagger');

            - Dans la section path > sur la route  "/user/{id}"  > rajouter delete: deleteById

            NB: Ne pas oublier l'import de deleteById dans le router.

            Lancer Swagger, tester la nouvelle route


## Création d'une connexion sécurisé JWT : STEP 1 - 13 : https://appdividend.com/2020/07/09/angular-authentication-system-login-and-registration-in-angular/

But: Création de trois routes /register , /login , /profil
Création d'un schema mongoose spéciale pour User
Sauvegarde d'un nouvelle Utilisateur avec encryption du mot de passe en base
Login d'un utilisateur, vérification de la présence de l'utilisateur en base, génération d'un token aec id et username
Renvoie du token pour décrytage coté front


## DEPLOYEMENT AWS elastick beanstalck
 Zipper uniquement les fichiers du projets et pas le dossier
 Modificer la connection mongoose en mongoClient ainsi que toutes les utilisation mongoose
 Parametrer le server de Prod sur swagger : copier/coller l'adress donnée par aws SANS mettre de port.










