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
        'GeCo.*'
    ],

    // The name of the initial view to create.
    mainView: 'GeCo.view.main.Main'
});
