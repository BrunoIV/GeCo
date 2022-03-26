Ext.define('GeCo.view.objects.list.NewListTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.NewListTab',
  
	/**
	 * Abre la pestaña que permite visualizar generar y visualizar el código
	 */
    doGenerateCode: function(cmp) {
    	alert('TODO: generar código');
    },

   /**
    * Abre el diálogo de edición de configuración previo a ejecutar
    */
    doConfig: function(cmp) {
    	alert('TODO: abrir configuración');
    }
});