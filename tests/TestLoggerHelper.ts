'use strict';

import { expect } from 'chai';
import { LoggerHelper } from '../src/server/app/utils/LoggerHelper';

describe('Logger Helper class', () => {

	it('should create an instance using its constructor', () => {
		const _logger: LoggerHelper = new LoggerHelper();
		expect(_logger, 'logger should exist').to.exist;
	});

	it('should return whatever is passed to logOutput()', () => {
		const _logger: LoggerHelper = new LoggerHelper();
		const param = 'This is a test string';
		const returnValue: string = _logger.logOutput(param);
		expect(returnValue).to.equal(param, 'returns the value passed as a parameter');
	});

});
