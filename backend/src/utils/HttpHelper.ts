const errors = {
	BAD_REQUEST: 'BadRequest',
	VALIDATION_ERROR: 'ValidationError',
	UNAUTHORIZED_ERROR: 'UnauthorizedError',
	FORBIDDEN_ERROR: 'ForbiddenError',
	INTERNAL_SERVER_ERROR: 'InternalServerError',
}

const handleError = ( res: any, status: any, message: any, payload: any ) => {
	
	if (status === errors.BAD_REQUEST) {
		return res.status(400).json({status: errors.BAD_REQUEST, message: message || 'Invalid or missing parameters', error: payload})
	}
	
	if (status === errors.VALIDATION_ERROR) {
		return res.status(400).json({status: errors.VALIDATION_ERROR, message: message || 'Validation error', error: payload})
	}
	
	if (status === errors.UNAUTHORIZED_ERROR) {
		return res.status(401).json({status: errors.UNAUTHORIZED_ERROR, message: message || 'The user is not authorized', error: payload})
	}
	
	if (status === errors.FORBIDDEN_ERROR) {
		return res.status(403).json({status: errors.FORBIDDEN_ERROR, message: message || 'The action is forbidden', error: payload})
	}
	
	if (status === errors.INTERNAL_SERVER_ERROR) {
		return res.status(500).json({status: errors.INTERNAL_SERVER_ERROR, message: message || 'Internal server error', error: payload})
	}
	
	return res.sendStatus(500);
	
}

const handleResponse = (req: any, res: any, next: any, payload: any, code: number = 200) => {

	return res.status(code).json(payload).end();
	
}

export {errors, handleError, handleResponse}