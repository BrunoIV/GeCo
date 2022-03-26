Ext.define('GeCo.store.PropertiesWidgets', {
	extend: 'Ext.data.Store',
	fields: [ 'id', 'name', 'value', 'type', 'objects' ],
	data: [
		{ id: 'title', name: 'Título', value: 'Listado', type: 'text', objects: ['list'] },
		{ id: 'text', name: 'Texto', value: '', type: 'text', objects: ['button'] },
		{ id: 'iconCls', name: 'Icono', value: 'fa fa-blind', type: 'icon', objects: ['list', 'button'] },
		{ id: 'listeners', name: 'Eventos', value: '{}', type: 'object', objects: ['list', 'button'] },
		{ id: 'currentComponent', name: '', value: '', type: 'list', dropDown: 'field3', objects: ['list', 'button'] },
		{ id: 'lock', name: 'Lock', value: '', type: 'text', objects: ['button'] }
		]
});