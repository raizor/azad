/* Copyright(c) 2019 Philip Mulcahy. */
/* jshint strict: true, esversion: 6 */

"use strict";

import Vue from 'vue';

const settings = [
    {
        id: 'azad_show_where_are_my_buttons',
        text: 'show "where are my buttons?"',
        value: true,
    },
];

function initialiseUi() {
    const vue_settings_app = new Vue({
        el: '#azad_settings',
        data: {
            items: settings,
        },
    });
}


export default {
    initialiseUi: initialiseUi,
}
