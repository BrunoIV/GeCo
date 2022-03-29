Ext.define('GeCo.view.objects.list.center.NewListCenterController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.NewListCenter',

	init: function() {
		this.getViewModel().set('newlist_center', this);
	},
	
	addEditTab: function(header, column, e, t,eOpts){
		
		//El botón de agregar tiene un flag. Se crea por defecto en NewListTabModel
		if(column.addNewTab === true) {
			var fields = this.getViewModel().get('NewListCenter.columns');

			//Agrega en la penúltima posición para que el último siempre sea el botón de agregar
			fields.splice(fields.length - 1, 0, {
				xtype: 'gridcolumn',
				text: 'New tab'
			});
			
			//Fuerzo que se actualice el valor
			this.getViewModel().set('NewListCenter.columns', []);
			this.getViewModel().set('NewListCenter.columns', fields);
		} else {
			this.getViewModel().get('widget_properties').filterPropertiesObject(this.getConfigColumn(column));
		}
	},
	
	doSetSpecialEvents: function() {
		var panel = this.getView();
		var _this = this;
		
		//"Reservo" el espacio para que al seleccionar no se mueva 
		panel.getEl().dom.style.border = '1px solid #cfcfcf';
		
		//Click sobre el título
		panel.header.on('click', function() {
			
			//Cambio el borde a rojo para indicar que está activo
			panel.getEl().dom.style.border = '1px solid #ff0000';
			
			//Muestro en la vista WidgetProperties todas las propiedades que se pueden editar del listado
			_this.getViewModel().get('widget_properties').filterPropertiesObject(_this.getConfigGrid());
		});
		
		
		//Menú contextual al hacer click derecho sobre el panel del grid
		panel.getEl().on('contextmenu', function(e) {
			e.preventDefault();

			var cntMenu = Ext.widget('NewListCenteContextMenu');
			cntMenu.tree = panel;
			cntMenu.on('hide', function(menu) {menu.destroy()}, this, {delay: 100});

			var position = e.getXY();
			e.stopEvent();
			cntMenu.showAt(position);
		});
	
	},
	
	getConfigGrid: function() {
		var panel = this.getView();
		var config = [];
		
		config['title'] = panel.title;
		config['iconCls'] = panel.iconCls;
		config['component_name_viewmodel'] = 'NewListCenter';
		config['component_type'] = 'list';
		return config;	
	},
	
	getConfigColumn: function(column) {
		var config = [];
		
		config['flex'] = column.flex;
		config['text'] = column.text;
		config['tooltip'] = column.tooltip;
		config['dataIndex'] = column.dataIndex;
		config['width'] = column.width;
		config['locked'] = column.locked;
		config['fullColumnIndex'] = column.fullColumnIndex;
		config['component_name_viewmodel'] = 'NewListCenter';
		config['component_type'] = 'tab';
		return config;	
	},
	
	/**
	 * Muestra el diálogo que permite agregar botones
	 * @see NewListCenterContextMenu
	 */
	doAddButtonDialog: function() {
		
	},
	
	/**
	 * Muestra el dialogo que permite agregar columnas
	 * @see NewListCenterContextMenu
	 */
	doAddColumnDialog: function() {
		
	},
	
});