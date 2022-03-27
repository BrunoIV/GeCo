Ext.define('GeCo.view.objects.list.center.NewListCenterController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.NewListCenter',

	init: function() {
		this.getViewModel().set('newlist_center', this);
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
			_this.getViewModel().get('widget_properties').filterPropertiesObject('list', _this.getConfig());
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
	
	getConfig: function() {
		var panel = this.getView();
		var config = [];
		
		config['title'] = panel.title;
		config['iconCls'] = panel.iconCls;
		config['currentComponent'] = panel.id;
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