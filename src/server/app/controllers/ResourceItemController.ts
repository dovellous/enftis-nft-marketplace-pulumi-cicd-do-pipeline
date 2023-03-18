const db = require('../models/index.ts');
const ResourceItem = db.resourceItems;

// Create and Save a new ResourceItem
exports.create = (req, res) => {
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
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
          err.message || 'Some error occurred while creating the ResourceItem.'
			});
		});
};

// Retrieve all ResourceItems from the database.
exports.findAll = (req, res) => {
	const title = req.query.title;
	const condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } } : {};

	ResourceItem.find(condition)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
          err.message || 'Some error occurred while retrieving resourceItems.'
			});
		});
};

// Find a single ResourceItem with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	ResourceItem.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found ResourceItem with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving ResourceItem with id=' + id });
		});
};

// Update a ResourceItem by the id in the request
exports.update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: 'Data to update can not be empty!'
		});
	}

	const id = req.params.id;

	ResourceItem.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot update ResourceItem with id=${id}. Maybe ResourceItem was not found!`
				});
			} else res.send({ message: 'ResourceItem was updated successfully.' });
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error updating ResourceItem with id=' + id
			});
		});
};

// Delete a ResourceItem with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	ResourceItem.findByIdAndRemove(id, { useFindAndModify: false })
		.then((data) => {
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
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete ResourceItem with id=' + id
			});
		});
};

// Delete all ResourceItems from the database.
exports.deleteAll = (req, res) => {
	ResourceItem.deleteMany({})
		.then((data) => {
			res.send({
				message: `${data.deletedCount} ResourceItems were deleted successfully!`
			});
		})
		.catch((err) => {
			res.status(500).send({
				message:
          err.message || 'Some error occurred while removing all resourceItems.'
			});
		});
};

// Find all published ResourceItems
exports.findAllPublished = (req, res) => {
	ResourceItem.find({ published: true })
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
          err.message || 'Some error occurred while retrieving resourceItems.'
			});
		});
};
