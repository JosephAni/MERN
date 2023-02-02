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

export const getBusinessWithID = (req, res) => {
  Business.findById(req.params.BusinessId, (err, Business) => {
    if (err) {
      res.send(err)
    }
    res.json(Business)
  })
}

export const updateBusiness = (req, res) => {
  Business.findOneAndUpdate(
    { _id: req.params.PlayerId },
    req.body,
    { new: true },
    (err, Business) => {
      if (err) {
        res.send(err)
      }
      res.json(Business)
    }
  )
}

export const deleteBusiness = (req, res) => {
  Business.remove({ _id: req.params.BusinessId }, (err, Business) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Successfully deleted business' })
  })
}
