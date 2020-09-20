// import all necessary storefront plugins
import CarouselPlugin from './plugin/carousel/carousel.plugin';

// register them via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('CarouselPlugin', CarouselPlugin);
