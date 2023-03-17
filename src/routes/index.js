import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Movies from '~/pages/Movies';
import TVShows from '~/pages/TVShows';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.movies, component: Movies },
    { path: config.routes.tvshows, component: TVShows },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
