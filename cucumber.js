module.exports = {
    default: {
        //Archivos Gherkin
        paths: ['features/**/*.feature'],

        // Traducción de pasos o definición de pasos
        require: [
            'step-definitions/**/*.js',
            'support/**/*.js'          // Archivos de hooks (Before, After)
        ],

        // Define el formato de la salida en la consola y para los reportes.
        format: [
            'progress-bar', // Muestra una barra de progreso cucudurante la ejecución
            'json:reports/cucumber-report.json', // Genera un reporte JSON
            'html:reports/cucumber-report.html' // Genera un reporte JSON
        ],

        worldParameters: {
            baseUrl: 'https://ecommerce-js-test.vercel.app/'
        }
    }
}