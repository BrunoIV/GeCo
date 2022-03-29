Ext.define('GeCo.store.PropertiesWidgets', {
	extend: 'Ext.data.Store',
	fields: [ 'id', 'name', 'value', 'type', 'objects' ],
	data: [
		{ id: 'title', name: 'Título', value: 'Listado', type: 'text', objects: ['list'] },
		{ id: 'iconCls', name: 'Icono', value: 'fa fa-blind', type: 'icon', objects: ['list', 'buttons'] },
		{ id: 'listeners', name: 'Eventos', value: '{}', type: 'object', objects: ['list', 'buttons'] },
		{ id: 'lock', name: 'Lock', value: '', type: 'text', objects: ['buttons'] },
		
		{ id: 'text', name: 'Título', value: '', type: 'text', objects: ['columns', 'buttons'] },
		{ id: 'dataIndex', name: 'Nombre', value: '', type: 'text', objects: ['columns'] },
		{ id: 'flex', name: 'Flex', value: '', type: 'text', objects: ['columns'] },
		{ id: 'width', name: 'Ancho', value: '', type: 'text', objects: ['columns'] },
		{ id: 'tooltip', name: 'Tooltip', value: '', type: 'text', objects: ['columns', 'buttons'] },
		]
		
});