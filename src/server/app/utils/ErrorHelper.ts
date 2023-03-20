const errors: any = {
	BAD_REQUEST: 'BadRequest',
	VALIDATION_ERROR: 'ValidationError',
	UNAUTHORIZED_ERROR: 'UnauthorizedError',
	FORBIDDEN_ERROR: 'ForbiddenError',
	INTERNAL_SERVER_ERROR: 'InternalServerError',
}

const handleError: Function = (err: any, res: any, payload: any): any => {
	
	if (err.name === errors.BAD_REQUEST) {
		return res.status(400).json({message: err, data: payload})
	}
	
	if (err.name === errors.VALIDATION_ERROR) {
		return res.status(400).json({message: err, data: payload})
	}
	
	if (err.name === errors.UNAUTHORIZED_ERROR) {
		return res.status(401).json({message: 'The user is not authorized', data: payload})
	}
	
	if (err.name === errors.FORBIDDEN_ERROR) {
		return res.status(403).json({message: 'The action is forbidden', data: payload})
	}
	
	if (err.name === errors.INTERNAL_SERVER_ERROR) {
		return res.status(500).json({message: 'Internal server error', data: payload})
	}
	
	return res.status(500).json(err);
	
}

export {errors, handleError}