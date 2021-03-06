import 'plugins/k5p-c3/c3_vis.less';
import 'plugins/k5p-c3/c3_vis_controller';
import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import c3VisTemplate from 'plugins/k5p-c3/c3_vis.html';
import c3VisParamsTemplate from 'plugins/k5p-c3/c3_vis_params.html';

// register the provider with the visTypes registry
require('ui/registry/vis_types').register(c3VisProvider);

require('../node_modules/c3/c3.css');

function c3VisProvider(Private) {
    const TemplateVisType = Private(TemplateVisTypeTemplateVisTypeProvider);
    const Schemas = Private(VisSchemasProvider);
	
    return new TemplateVisType({
  		name: 'c3Charts',
  		title: 'C3 charts widget',
  		icon: 'fa-angellist',
  		description: 'Nice charts widget which uses C3JS library for your data representations.',
  		template: c3VisTemplate,
  		params: {
  			defaults: {
          type1: 'line',
          color1: '#1f77b4',
          type2: 'line',
          color2: '#ff7f0e',
          type3: 'line',
          color3: '#2ca02c', 
          type4: 'line',
          color4: '#d62728',
          type5: 'line',
          color5: '#9467bd',
          enableZoom: false,
          dataLabels: false,
          hidePoints: false,
          gridlines: false,
          few_x_axis: false,
          legend_position: "right",
          time_format: "%d-%m-%Y",
          grouped: false

  			},
            editor: c3VisParamsTemplate
	    },
	    schemas: new Schemas([
            {
	        	group: 'metrics',
	          	name: 'metric',
	          	title: 'Y-axis metric',
	          	min: 1,
	          	max: 5,
              defaults: [ { type: 'count', schema: 'metric' } ],
              //aggFilter: ['count']     	
            },
            {
                group: 'buckets',
                name: 'buckets',
                title: 'X-Axis',
                min: 1,
                max: 1,
                aggFilter: ['!geohash_grid']
            }
	    ])
    });
}

// export the provider so that the visType can be required with Private()
export default c3VisProvider;
