$(window).ready(function() {

    let app = $('#app');
    let header = $('header');

    const routes = [
            { path: '/', page: 'conversor' },
            { path: '/buscador', page: 'buscador' },
        ];

    const parseLocation = () => location.hash.slice(1).toLocaleLowerCase() || '/';

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
