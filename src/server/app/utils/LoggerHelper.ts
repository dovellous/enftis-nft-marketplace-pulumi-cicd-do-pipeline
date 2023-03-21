'use strict';

import { Logger } from 'sitka';

class LoggerHelper {
    /* Private Instance Fields */

    private _logger: Logger;

    /* Constructor */

    constructor() {
        this._logger = Logger.getLogger({ name: this.constructor.name });
    }

    /* Public Instance Methods */

    public logOutput(param: string): string {
        this._logger.debug(param);
        return param;
    }

}

module.exports = LoggerHelper;
