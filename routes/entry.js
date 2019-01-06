const express = require('express')
const entryRouter = express.Router()
const Entry = require('../models/entry')


entryRouter.get('/', (req, res, next) => {
    Entry.find({user: req.user._id}, (err, userEntries)=> {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userEntries)
    })
})


entryRouter.get('/:entryId', (req, res, next) => {
    Entry.findOne({user: req.user._id, _id: req.params.entryId}, (err, entry) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(entry)
    })
})

entryRouter.post('/', (req, res, next) => {
    const newEntry = new Entry(req.body)
    newEntry.user = req.user._id
    newEntry.save((err, entry) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(entry)
    })
})

entryRouter.delete('/:entryId', (req, res, next) => {
    Entry.findOneAndDelete({_id: req.params.entryId, user: req.user._id}, (err, deletedEntry) => {
         if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send("Successfully deleted entry!")
    })
})

module.exports = entryRouter