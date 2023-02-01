import mongoose from 'mongoose'
import { BusinessSchema } from '../models/businessModel'

const Business = mongoose.model('Business', BusinessSchema)

export const addNewBusiness = (req, res) => {
  let newBusiness = new Business(req.body)

  newBusiness.save((err, Business) => {
    if (err) {
      res.send(err)
    }
    res.json(Business)
  })
}

export const getBusiness = (req, res) => {
  Business.find({}, (err, Business) => {
    if (err) {
      res.send(err)
    }
    res.json(Business)
  })
}
