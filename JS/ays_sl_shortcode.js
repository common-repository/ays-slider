  (function() {      /* Register the buttons */      tinymce.create('tinymce.plugins.ays_sl_button_mce', {          init : function(ed, url) {  		   /**  		   * Adds HTML tag to selected content  		   */  			ed.addButton( 'ays_sl_button_mce', {  				title : 'Add AYS Slider',  				image :  url + '/tinymce-button.png',  				cmd: 'ays_sl_button_cmd'  			});  			ed.addCommand( 'ays_sl_button_cmd', function() {  				ed.windowManager.open(  				{  					title : 'AYS Social Buttons',  					file : ajaxurl + '?action=gen_ays_sl_shortcode',  					width : 500,  					height : 300,  					inline : 1  				},  				{  					plugin_url : url  				});  		   });  		},  		createControl : function(n, cm) {  		   return null;  		},  	});      /* Start the buttons */      tinymce.PluginManager.add( 'ays_sl_button_mce', tinymce.plugins.ays_sl_button_mce );  })();