/* Copyright(c) 2019 Philip Mulcahy. */

/* jshint strict: true, esversion: 6 */

// Abstracts logging interface, because browser's console may not be available
// some of the time, such as when running tests under node.
// TODO: figure out how to attribute the call to the real logging location.

'use strict';

function info(msg) {
    console.log(msg);
}

function warn(msg) {
    console.warn(msg);
}

function error(msg) {
    console.error(msg);
}

export default {
    info: info,
    warn: warn,
    error: error,
}
