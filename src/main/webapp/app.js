/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'GeCo.Application',

    name: 'GeCo',

    requires: [
        // This will automatically load all classes in the GeCo namespace
        // so that application classes do not need to require each other.
        'Ext.data.BufferedStore',
        'Ext.container.Viewport',
        'Ext.Img',
        'Ext.form.*',
        'Ext.form.field.*',
        'Ext.layout.container.*',
        'Ext.panel.*',
        'Ext.picker.*',
        'Ext.slider.*',
        'Ext.toolbar.*',
        'Ext.util.Cookies',
        'Ext.util.History',
        'Ext.ux.statusbar.StatusBar',
        'Ext.ux.TabReorderer',
        'GeCo.*'
    ],

    // The name of the initial view to create.
    mainView: 'GeCo.view.main.Main'
});
