const errors = {
	OK: 'OK',
	CREATED: 'CREATED',
	UPDATED: 'UPDATED',
	DELETED: 'DELETED',
	BAD_REQUEST: 'BAD_REQUEST',
	VALIDATION_ERROR: 'VALIDATION_ERROR',
	UNAUTHORIZED_ERROR: 'UNAUTHORIZED',
	FORBIDDEN_ERROR: 'FORBIDDEN',
	INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
}

const handleError = ( res: any, status: any, message: any, payload: any ) => {
	
	switch( status ) {

		case  errors.OK : {
			res.status(200).json({
				status: errors.OK,
				message: message || 'success',
				error: payload
			});
			break;
		}

		case  errors.CREATED : {
			res.status(201).json({
				status: errors.CREATED,
				message: message || 'Item created',
				error: payload
			});
			break;
		}

		case  errors.UPDATED : {
			res.status(200).json({
				status: errors.UPDATED,
				message: message || 'Item updated',
				error: payload
			});
			break;
		}

		case  errors.DELETED : {
			res.status(200).json({
				status: errors.DELETED,
				message: message || 'Item deleted',
				error: payload
			});
			break;
		}

		case  errors.BAD_REQUEST : {
			res.status(400).json({
				status: errors.BAD_REQUEST,
				message: message || 'Invalid or missing parameters',
				error: payload
			});
			break;
		}

		case  errors.VALIDATION_ERROR : {
			res.status(400).json({
				status: errors.VALIDATION_ERROR,
				message: message || 'Validation error',
				error: payload
			});
			break;
		}

		case  errors.UNAUTHORIZED_ERROR : {
			res.status(401).json({
				status: errors.UNAUTHORIZED_ERROR,
				message: message || 'The user is not authorized',
				error: payload
			});
			break;
		}

		case  errors.FORBIDDEN_ERROR : {
			res.status(403).json({
				status: errors.FORBIDDEN_ERROR,
				message: message || 'The action is forbidden',
				error: payload
			});
			break;
		}

		case  errors.INTERNAL_SERVER_ERROR : {
			res.status(500).json({
				status: errors.INTERNAL_SERVER_ERROR,
				message: message || 'Internal server error',
				error: payload
			});
			break;
		}

		default : {
			res.sendStatus(500);
			break;
		}

	}
	
}

const handleResponse = (req: any, res: any, next: any, payload: any, code: number = 200) => {

	res.status(code).json(payload).end();
	
}

export {errors, handleError, handleResponse}