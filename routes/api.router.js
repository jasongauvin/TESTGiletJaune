    
/*
Configurer le module de route
*/
const express = require('express');
const router = express.Router();
const MainController = require('../src/controller/mainController');
//

router.get("/contact/:id", MainController.find);

router.get("/contact", MainController.findAll);

router.post("/contact", MainController.createOrUpdate);

router.delete("/contact", MainController.delete);


//

/* MongoClient.connect(url, { useNewUrlParser: true }, (err, db) =>{
    // Tester la connexion
    if(err){ console.log('connection error')
} 
    else {
       console.log('test connection ok')
    }
    // Fermer la connexion à la base MongoDb
    db.close();
    console.log('test end')
}); */

/*
Définition du CRUD
*/

// Create Item: POST

/* router.post('/contact', (req, res) => {

    // Connexion à la base de données MongoDb
    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) =>{

        // Tester la connexion
        if(err){ 
            res.send(err)
        } 
        else {
            console.log("Connected successfully to server");
            //const db = client.db(dbName);
            // Récupération des documents de la collection 'posts' => find
            MongoClient.collection('addressbook').find().toArray((err, posts) => {

                // Tester la commande MongoDb
                if(err){ 
                    res.send(err)
                }

                else{ 
                    // Envoyer les données au format json
                    if( 
                        req.body &&
                        req.body.name.length > 0 &&
                        req.body.firstname.length > 0 &&
                        req.body.phone.length > 0
                     ){
                        // Définir l'item
                        const newItem = { name: req.body.name, firstname : req.body.firstname, phone : req.body.phone };
            
                        // Enregistrer l'item
                        console.log('db intem error');

                        MongoClient.collection('addressbook').insert(newItem, (err, result, fields) => {
                            if( err ){
                                res.json({ msg: 'Connection failed', data: err })
                            }
                            else{
                                res.json({ msg: 'Create Article', data: result })
                            }
                        })
            
                    }
                    else{
                        res.json({ msg: 'No data', data: null })
                    }
                };
            });
        };

        // Fermer la connexion à la base MongoDb
        db.close();
    });
}); */



/*
Exporter le module de route
*/
module.exports = router;
//