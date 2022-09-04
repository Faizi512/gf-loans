const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    jquery: 'jquery/src/jquery',
    datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker.js',
    Parsley: 'parsleyjs/src/parsley'
  })
)
const aliasConfig = {
    'jquery': 'jquery/src/jquery',
    'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
};
environment.config.set('resolve.alias', aliasConfig);
module.exports = environment
