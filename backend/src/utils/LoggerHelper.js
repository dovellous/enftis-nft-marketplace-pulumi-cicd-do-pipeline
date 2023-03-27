'use strict';

const { Logger } = require('sitka');

const _LoggerHelper = class LoggerHelper {
    /* Private Instance Fields */

    _logger;

    /* Constructor */

    constructor() {
        this._logger = Logger.getLogger({ name: this.constructor.name });
    }

    /* Public Instance Methods */

    logOutput(param){
        this._logger.debug(param);
        return param;
    }

}

module.exports = _LoggerHelper;
