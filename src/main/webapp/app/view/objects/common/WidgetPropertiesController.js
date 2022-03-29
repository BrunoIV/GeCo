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
		
		//Contiene todas las propiedades del elemento que estás editando (título, icono, eventos, etc)
		var store = this.getView().getStore().getData();
		
		//Contiene la propiedad concreta que has editado en el grid
		var modifiedProperty = e.record.data; 
	
		//Las pestañas se almacenan como un array
		if(store.get('component_type').get('value') === 'tab') {
			var idInViewModel = store.get('component_name_viewmodel').get('value') + '.columns';
			var columns = this.getViewModel().get(idInViewModel);

			var tabIndex = store.get('fullColumnIndex').get('value');
			columns[tabIndex][modifiedProperty.id] = modifiedProperty.value;
			
			this.getViewModel().set(idInViewModel, []);
			this.getViewModel().set(idInViewModel, columns);
		} else {
			var idInViewModel = store.get('component_name_viewmodel').get('value') + '.' + modifiedProperty.id;
			this.getViewModel().set(idInViewModel, modifiedProperty.value);
		}

	},

	/**
	 * Filtra el grid de propiedades para que solo muestre las del objeto que recibe
	 * y rellena los valores con lo que recibe en params
	 */
	filterPropertiesObject: function(params) {
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
			return record.get('objects').indexOf(params['component_type']) !== -1;
		});
	}

});