require('dotenv').config();
const db = process.env.DB;
const mongoose = require('mongoose');
const Address = require('../model/Address');
mongoose.connect(db, {useNewUrlParser: true});

mongoose.connection.on('connected', () => console.log(`Mongoose connection on ${db}`) );
mongoose.connection.on('disconnected', () => console.log(`Closing connection on ${db}`));

class mainController {
    static createOrUpdate (req, res) {

        let address = Address(req.body);
        Address.findOneAndUpdate({_id: address._id || null}, address, {upsert: true, new: true}).then((doc) => {
            res.send(doc).end()
        });

        /*Address.findOneAndUpdate({_id: req.body._id}, (new Address(req.body)))
        if (req.body._id) {
            Address.updateOne({_id: id}, req.body, {new: true})
                .then((doc, err) => {
                    console.log(doc, err)
                    res.end()
                })
        } else {
            const address = new Address(req.body);
            address.save().then((doc, err) => {
                console.log(doc, err)
                res.end()
            })
        }*/
    }

    static find (req, res) {
        const id = req.params.id;
        if (!id) {
            res.status(400).end();
            return
        }

        try {
            mongoose.Types.ObjectId(id)
        } catch (e) {
            res.send(400).end();
            return
        }

        Address.findOne({_id: id})
            .then((doc, err) => {
                if (!doc) {
                    res.status(404).end();
                    return
                }
                res.send(doc).end();
        }).catch(e => {
            console.log(e.message);
            res.status(500).end()
        });
    }

    static findAll (req, res) {
        Address.find()
            .then((doc, err) => {
                if (!doc) {
                    res.status(404).end();
                    return
                }
                res.send(doc).end();
            }).catch(e => {
            console.log(e.message);
            res.status(500).end()
        });
    }

    static deleteItem (req, res) {
        return new Promise( (resolve, reject) => {

            let objectId = req.params.id

            return Address.deleteOne({ _id: objectId })
            .then( object => resolve( res.send({ msg: 'Object deleted' }) ))
            .catch( err => reject( res.send( { msg: 'No data found for :id' } ) ) )

        })



        // let address = Address(req.body);
        // console.log('deleted');
        // Address.deleteOne({_id: address._id || null}, address)
        // .then((doc) => {
        //     res.send(doc).end()
        // });
    }
}

module.exports = mainController;