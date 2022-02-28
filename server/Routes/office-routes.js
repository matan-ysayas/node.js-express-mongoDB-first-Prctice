const officeRouter=require('express').Router();
const officeController=require('../Controllers/office-controller')
officeRouter.get('/',officeController.getAll)
officeRouter.get('/:id',officeController.getById)
officeRouter.post('/',officeController.Add)
officeRouter.put('/:id',officeController.update)
officeRouter.delete('/:id',officeController.deleteOffice)

module.exports=officeRouter;