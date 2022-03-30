Ext.define('GeCo.view.objects.list.center.NewListCenterController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.NewListCenter',

	init: function() {
		this.getViewModel().set('newlist_center', this);
	},
	
	/**
	 * Fuerza la actualización de las columnas en el ViewModel
	 */
	updateColumnsOfGrid: function(columns) {
		this.getViewModel().set('NewListCenter.columns', []);
		this.getViewModel().set('NewListCenter.columns', columns);
	},
	
	/**
	 * Tras reordenar las columnas, aplica los cambios en el ViewModel para que
	 * al refrescar no se pierdan.
	 */
	reorderColumnsViewModel: function(cmp, column, fromIndex, toIndex) {
		var columns = this.getViewModel().get('NewListCenter.columns');
		
		//No puedes poner ninguna columna a continuación del +
		if(columns.length === toIndex) {
			this.updateColumnsOfGrid(columns);
			return;
		}

		//Si mueves de izquierda a derecha tiene en cuenta el que estás arrastrando
		if(fromIndex < toIndex) {
			toIndex--;
		}
		
		var col = columns.splice(fromIndex, 1);
		columns.splice(toIndex, 0, col[0]);
		this.updateColumnsOfGrid(columns);
	},
	
	/**
	 * Al sobre una columna del grid se abre la edición
	 * Excepto la última que es un falso botón que agrega una nueva columna
	 */
	addEditColumn: function(header, column, e, t,eOpts){
		
		//El botón de agregar tiene un flag. Se crea por defecto en NewListTabModel
		if(column.addNewTab === true) {
			var columns = this.getViewModel().get('NewListCenter.columns');

			//Agrega en la penúltima posición para que el último siempre sea el botón de agregar
			columns.splice(columns.length - 1, 0, {
				xtype: 'gridcolumn',
				text: 'New tab'
			});
			
			//Fuerzo que se actualice el valor
			this.updateColumnsOfGrid(columns);
		} else {
			this.getViewModel().get('widget_properties').filterPropertiesObject(this.getConfigColumn(column));
		}
	},
	
	/**
	 * Obtiene del VM los botones y los muestra en el toolbar
	 */
	doLoadToolbarButtons: function() {
		var toolbar = this.getView().down('toolbar');
		
		//Borro todos los items existentes
		var items = toolbar.items;
		items.each(function(item,index,length){
			toolbar.remove(item);
		});
		
		
		var buttons = this.getViewModel().get('NewListCenter.buttons');
		
		//Los inserto uno a uno para poder agregar la posición del botón
		for (var i = 0; i < buttons.length; i++) {
			var button = buttons[i];
			button.buttonIndex = i;
			this.getView().down('toolbar').add(button);
		}

	},
	
	doAddButtonToolbar: function() {
		this.getViewModel().get('NewListCenter.buttons').push({
			text: 'New Button',
			listeners: {
				click: 'doEditButton'
			}
		});
		this.doLoadToolbarButtons();
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
		config['_component_name_viewmodel'] = 'NewListCenter';
		config['_component_type'] = 'list';
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
		config['_itemIndex'] = column.fullColumnIndex;
		config['_component_name_viewmodel'] = 'NewListCenter';
		config['_component_type'] = 'columns';
		return config;	
	},
	
	getConfigButton: function(button) {
		var config = [];
		var _this = this;
		
		config['text'] = button.text;
		config['iconCls'] = button.iconCls;
		config['_itemIndex'] = button.buttonIndex;
		config['_component_name_viewmodel'] = 'NewListCenter';
		config['_component_type'] = 'buttons';
		config['_callback'] = function() {
			_this.doLoadToolbarButtons();
		};
		return config;
	},
	
	doEditButton: function(cmp) {
		this.getViewModel().get('widget_properties').filterPropertiesObject(this.getConfigButton(cmp));
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