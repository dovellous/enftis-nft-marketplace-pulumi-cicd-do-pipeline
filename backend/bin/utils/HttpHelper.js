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
        return res.status(400).json({ status: errors.BAD_REQUEST, message: message, data: payload });
    }
    if (status === errors.VALIDATION_ERROR) {
        return res.status(400).json({ status: errors.VALIDATION_ERROR, message: message, data: payload });
    }
    if (status === errors.UNAUTHORIZED_ERROR) {
        return res.status(401).json({ status: errors.UNAUTHORIZED_ERROR, message: 'The user is not authorized', data: payload });
    }
    if (status === errors.FORBIDDEN_ERROR) {
        return res.status(403).json({ status: errors.FORBIDDEN_ERROR, message: 'The action is forbidden', data: payload });
    }
    if (status === errors.INTERNAL_SERVER_ERROR) {
        return res.status(500).json({ status: errors.INTERNAL_SERVER_ERROR, message: 'Internal server error', data: payload });
    }
    return res.sendStatus(500);
};
exports.handleError = handleError;
const handleResponse = (res, req, next, payload) => {
    return res.send(payload);
};
exports.handleResponse = handleResponse;
