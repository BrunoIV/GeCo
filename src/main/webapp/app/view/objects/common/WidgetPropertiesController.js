Ext.define('GeCo.view.objects.common.widgetproperties.WidgetPropertiesController',{
	extend: 'Ext.app.ViewController',
	alias: 'controller.WidgetProperties',
	
	init: function() {
		this.getViewModel().set('widget_properties', this);
	},
	
	/**
	 * Actualiza la propiedad que has editado del widget activo
	 */
	updatePropertyActiveWidget: function (editor, e, eOpts) {
		
		//En el store guardo el id del componente seleccionado, a partir de el obtengo el componente original
		var store = this.getView().getStore();
		var editingComponent =  store.getData().get('currentComponent').get('value');
		var cmp = Ext.ComponentMgr.get(editingComponent);
	
		var data = e.record.data;
		var id = data.id; //title, icon, text, etc
			
		//Genera el nombre de la función. Por ejemplo title = setTitle
		var fn = 'set' + id.charAt(0).toUpperCase() + id.slice(1);

		//Llama a la función del componente
		cmp[fn](data.value);
	
		var index = store.findExact('id', data.id),
		record = store.getAt(index);
		record.set('value', record.get('value'));
	},

	/**
	 * Filtra el grid de propiedades para que solo muestre las del objeto que recibe
	 * y rellena los valores con lo que recibe en params
	 */
	filterPropertiesObject: function(obj, params) {
		var store = this.getView().getStore();
		
		//Hay que limpiar filtros porque el widget anterior es posible que no tenga los atributos del actual
		store.clearFilter();
		
		store.each(function(record,idx){
			var id = record.get('id');
			
			//Recorre el array asociativo
			for (var param in params) {
			
				//Si encuentra algo que coincida en PropertiesWidgets lo reemplaza
				if(id == param) {
					record.set('value', params[param]);
				}
			}

		    record.commit(); 
		});
		
		//Muestro las configuraciones dependiendo del tipo de objeto (lista, botón, etc)
		store.filterBy(function(record, id) {
			return record.get('objects').indexOf(obj) !== -1;
		});
	}

});