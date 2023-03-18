const db = require('../models/index.ts');
const ResourceItem = db.resourceItems;

// Create and Save a new ResourceItem
exports.create = (req: { body: { title: any; description: any; published: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: any; }): void; new(): any; }; }; send: (arg0: any) => void; }) => {
	// Validate request
	if (!req.body.title) {
		res.status(400).send({ message: 'Content can not be empty!' });
		return;
	}

	// Create a ResourceItem
	const resourceItem = new ResourceItem({
		title: req.body.title,
		description: req.body.description,
		published: req.body.published ? req.body.published : false
	});

	// Save ResourceItem in the database
	resourceItem
		.save(resourceItem)
		.then((data: any) => {
			res.send(data);
		})
		.catch((err: { message: any; }) => {
			res.status(500).send({
				message:
          err.message || 'Some error occurred while creating the ResourceItem.'
			});
		});
};

// Retrieve all ResourceItems from the database.
exports.findAll = (req: { query: { title: any; }; }, res: { send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: any; }): void; new(): any; }; }; }) => {
	const title = req.query.title;
	const condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } } : {};

	ResourceItem.find(condition)
		.then((data: any) => {
			res.send(data);
		})
		.catch((err: { message: any; }) => {
			res.status(500).send({
				message:
          err.message || 'Some error occurred while retrieving resourceItems.'
			});
		});
};

// Find a single ResourceItem with an id
exports.findOne = (req: { params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: string; }): void; new(): any; }; }; send: (arg0: any) => void; }) => {
	const id = req.params.id;

	ResourceItem.findById(id)
		.then((data: any) => {
			if (!data)
				res.status(404).send({ message: 'Not found ResourceItem with id ' + id });
			else res.send(data);
		})
		.catch((err: any) => {
			res
				.status(500)
				.send({ message: 'Error retrieving ResourceItem with id=' + id });
		});
};

// Update a ResourceItem by the id in the request
exports.update = (req: { body: any; params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: string; }): void; new(): any; }; }; send: (arg0: { message: string; }) => void; }) => {
	if (!req.body) {
		return res.status(400).send({
			message: 'Data to update can not be empty!'
		});
	}

	const id = req.params.id;

	ResourceItem.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then((data: any) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot update ResourceItem with id=${id}. Maybe ResourceItem was not found!`
				});
			} else res.send({ message: 'ResourceItem was updated successfully.' });
		})
		.catch((err: any) => {
			res.status(500).send({
				message: 'Error updating ResourceItem with id=' + id
			});
		});
};

// Delete a ResourceItem with the specified id in the request
exports.delete = (req: { params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: string; }): void; new(): any; }; }; send: (arg0: { message: string; }) => void; }) => {
	const id = req.params.id;

	ResourceItem.findByIdAndRemove(id, { useFindAndModify: false })
		.then((data: any) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot delete ResourceItem with id=${id}. Maybe ResourceItem was not found!`
				});
			} else {
				res.send({
					message: 'ResourceItem was deleted successfully!'
				});
			}
		})
		.catch((err: any) => {
			res.status(500).send({
				message: 'Could not delete ResourceItem with id=' + id
			});
		});
};

// Delete all ResourceItems from the database.
exports.deleteAll = (req: any, res: { send: (arg0: { message: string; }) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: any; }): void; new(): any; }; }; }) => {
	ResourceItem.deleteMany({})
		.then((data: { deletedCount: any; }) => {
			res.send({
				message: `${data.deletedCount} ResourceItems were deleted successfully!`
			});
		})
		.catch((err: { message: any; }) => {
			res.status(500).send({
				message:
          err.message || 'Some error occurred while removing all resourceItems.'
			});
		});
};

// Find all published ResourceItems
exports.findAllPublished = (req: any, res: { send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: any; }): void; new(): any; }; }; }) => {
	ResourceItem.find({ published: true })
		.then((data: any) => {
			res.send(data);
		})
		.catch((err: { message: any; }) => {
			res.status(500).send({
				message:
          err.message || 'Some error occurred while retrieving resourceItems.'
			});
		});
};
