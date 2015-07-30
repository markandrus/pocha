'use strict';

var doneable = require('./doneable');

// It
// ============================================================================

/**
 * Construct an {@link It}.
 * @api private
 * @class
 * @classdesc Describes a unit of functionality to be tested
 * @param {string} name
 * @param {function} def
 */
function It(name, def) {
  this._name = name;
  this._def = def.bind(this);
  this._timeout = null;
}

/**
 * Specify the timeout of this {@link It} (cascades down to other
 *   {@link Describe}s and {@link It}s).
 * @api private
 * @instance
 * @param {number} [milliseconds]
 * @returns {It}
 */
It.prototype.timeout = function timeout(milliseconds) {
  this._timeout = milliseconds;
};

module.exports = It;