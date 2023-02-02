import {
  addNewBusiness,
  getBusiness,
  getBusinessWithID,
  updateBusiness,
  deleteBusiness,
} from '../controllers/businessControllers'

const routes = (app) => {
  app
    .route('/business')
    // GET endpoint
    .get(getBusiness)

    //POST endpoint
    .post(addNewBusiness)

  app
    .route('/business/:BusinessId')
    //Get specific business
    .get(getBusinessWithID)

    //update a specific business
    .put(updateBusiness)

    // update a specific business
    .delete(deleteBusiness)
}

export default routes
