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
		
		//Contiene TODAS las propiedades del elemento que estás editando, hasta las que están filtradas
		var store = this.getView().getStore().getData().getSource(); //getSource para que muestre sin filtrar
	
		//Contiene la propiedad concreta que has editado en el grid
		var modifiedProperty = e.record.data; 
	
		var componentType = store.get('_component_type').get('value');
		if(['columns', 'buttons'].includes(componentType)) {
			//Las pestañas se almacenan como un array
			var idInViewModel = store.get('_component_name_viewmodel').get('value') + '.' + componentType;
			var items = this.getViewModel().get(idInViewModel);
			
			var itemIndex = store.get('_itemIndex').get('value');
			items[itemIndex][modifiedProperty.id] = modifiedProperty.value;
			
			this.getViewModel().set(idInViewModel, []);
			this.getViewModel().set(idInViewModel, items);
			
			if(store.get('_callback') != null) {
				var fn = store.get('_callback').get('value');
				fn();
			}
		} else {
			var idInViewModel = store.get('_component_name_viewmodel').get('value') + '.' + modifiedProperty.id;
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
		
		//Recorre el array asociativo
		for (var param in params) {
			if(param.startsWith('_')) {
				store.add({ id: param, value: params[param] });
			} else {
				store.each(function(record,idx){
					
					//Si encuentra algo que coincida en PropertiesWidgets lo reemplaza
					if(record.get('id') == param) {
						record.set('value', params[param]);
					}
				
				    record.commit(); 
				});
			}
				
		}
		
		
		//Muestro las configuraciones dependiendo del tipo de objeto (lista, botón, etc)
		store.filterBy(function(record, id) {
			return record.get('objects') != null && record.get('objects').indexOf(params['_component_type']) !== -1;
		});
	}

});