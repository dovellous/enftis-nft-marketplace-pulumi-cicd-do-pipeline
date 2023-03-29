"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResponse = exports.handleError = exports.errors = void 0;
const errors = {
    BAD_REQUEST: 'BadRequest',
    VALIDATION_ERROR: 'ValidationError',
    UNAUTHORIZED_ERROR: 'UnauthorizedError',
    FORBIDDEN_ERROR: 'ForbiddenError',
    INTERNAL_SERVER_ERROR: 'InternalServerError',
};
exports.errors = errors;
const handleError = (res, status, message, payload) => {
    if (status === errors.BAD_REQUEST) {
        return res.status(400).json({ status: errors.BAD_REQUEST, message: message || 'Invalid or missing parameters', error: payload });
    }
    if (status === errors.VALIDATION_ERROR) {
        return res.status(400).json({ status: errors.VALIDATION_ERROR, message: message || 'Validation error', error: payload });
    }
    if (status === errors.UNAUTHORIZED_ERROR) {
        return res.status(401).json({ status: errors.UNAUTHORIZED_ERROR, message: message || 'The user is not authorized', error: payload });
    }
    if (status === errors.FORBIDDEN_ERROR) {
        return res.status(403).json({ status: errors.FORBIDDEN_ERROR, message: message || 'The action is forbidden', error: payload });
    }
    if (status === errors.INTERNAL_SERVER_ERROR) {
        return res.status(500).json({ status: errors.INTERNAL_SERVER_ERROR, message: message || 'Internal server error', error: payload });
    }
    return res.sendStatus(500);
};
exports.handleError = handleError;
const handleResponse = (req, res, next, payload, code = 200) => {
    return res.status(code).json(payload).end();
};
exports.handleResponse = handleResponse;
