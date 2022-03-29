Ext.define('GeCo.store.PropertiesWidgets', {
	extend: 'Ext.data.Store',
	fields: [ 'id', 'name', 'value', 'type', 'objects' ],
	data: [
		{ id: 'title', name: 'Título', value: 'Listado', type: 'text', objects: ['list'] },
		{ id: 'text', name: 'Texto', value: '', type: 'text', objects: ['button'] },
		{ id: 'iconCls', name: 'Icono', value: 'fa fa-blind', type: 'icon', objects: ['list', 'button'] },
		{ id: 'listeners', name: 'Eventos', value: '{}', type: 'object', objects: ['list', 'button'] },
		{ id: 'lock', name: 'Lock', value: '', type: 'text', objects: ['button'] },
		
		{ id: 'text', name: 'Título', value: '', type: 'text', objects: ['tab'] },
		{ id: 'dataIndex', name: 'nombre', value: '', type: 'text', objects: ['tab'] },
		{ id: 'flex', name: 'Flex', value: '', type: 'text', objects: ['tab'] },
		{ id: 'width', name: 'Ancho', value: '', type: 'text', objects: ['tab'] },
		{ id: 'tooltip', name: 'Tooltip', value: '', type: 'text', objects: ['tab'] },
		{ id: 'fullColumnIndex', name: 'Índice', value: '', type: 'text', objects: ['tab'] },

		{ id: 'component_name_viewmodel', name: 'Nombre en VM', value: '', type: 'text', objects: ['list', 'button', 'tab'] },
		{ id: 'component_type', name: 'Tipo de componente', value: '', type: 'text', objects: ['list', 'button', 'tab'] },
		
		
		
		]
		
});