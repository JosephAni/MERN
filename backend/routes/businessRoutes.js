import { addNewBusiness } from '../controllers/businessControllers'

const routes = (app) => {
  app
    .route('/business')
    // GET endpoint
    .get(getBusiness)

    //POST endpoint
    .post(addNewBusiness)
}

export default routes
