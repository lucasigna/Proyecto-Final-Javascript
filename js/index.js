$(window).ready(function() {
    // Creo una variable para la raíz de la app y otra para el header
    let app = $('#app');
    let header = $('header');
    // Almaceno las rutas
    const routes = [
            { path: '/', page: 'conversor' },
            { path: '/buscador', page: 'buscador' },
        ];
    // Función que obtiene la ruta actual
    const parseLocation = () => location.hash.slice(1).toLocaleLowerCase() || '/';
    // Función que obtiene la página según la ruta
    const findPageByPath = (path, routes) => routes.find(route => route.path == path);

    const router = () => {
        const path = parseLocation();
        const page = findPageByPath(path, routes).page;

        switch(page) {
            case 'conversor':
                crearVistaConversor(app,header);
                break;
            
            case 'buscador':
                crearVistaBuscador(app,header);
                break;
            
            default:
                console.log('Página no encontrada');
                break;
        }
    }

    $(window).on('load', function(){
        router();
    });

    $(window).on('hashchange', function(){
        router();
    });

});
