const app = $('#app');

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
            app.html('');
            break;
        
        case 'buscador':
            app.listar('#app');
            break;
        
        default:
            ErrorComponent('#app');
    }
}

$(window).on('load', function(){
    router();
});

$(window).on('hashchange', function(){
    router();
});
