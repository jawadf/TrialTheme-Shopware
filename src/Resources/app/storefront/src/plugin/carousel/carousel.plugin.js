import Plugin from 'src/plugin-system/plugin.class';

export default class CarouselPlugin extends Plugin {
    init() {

        // Initialize the Carousel (Tiny Slider)
        tns({
            container: '.product-slider',
            items: 4,
            controls: true,
            nav: false,
            fixedWidth: 337
        });

        // Replace the default carousel button with arrow SVGs
        document.querySelector(".tns-controls button[data-controls='prev']").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'><defs><path id='icons-default-arrow-head-left-a' d='M12.5,7.91421356 L22.7928932,18.2071068 C23.1834175,18.5976311 23.8165825,18.5976311 24.2071068,18.2071068 C24.5976311,17.8165825 24.5976311,17.1834175 24.2071068,16.7928932 L13.2071068,5.79289322 C12.8165825,5.40236893 12.1834175,5.40236893 11.7928932,5.79289322 L0.792893219,16.7928932 C0.402368927,17.1834175 0.402368927,17.8165825 0.792893219,18.2071068 C1.18341751,18.5976311 1.81658249,18.5976311 2.20710678,18.2071068 L12.5,7.91421356 Z'></path></defs><use fill='#758CA3' fill-rule='evenodd' transform='matrix(0 1 1 0 .5 -.5)' xlink:href='#icons-default-arrow-head-left-a'></use></svg>";
        document.querySelector(".tns-controls button[data-controls='next']").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'><defs><path id='icons-default-arrow-head-right-a' d='M11.5,7.91421356 L21.7928932,18.2071068 C22.1834175,18.5976311 22.8165825,18.5976311 23.2071068,18.2071068 C23.5976311,17.8165825 23.5976311,17.1834175 23.2071068,16.7928932 L12.2071068,5.79289322 C11.8165825,5.40236893 11.1834175,5.40236893 10.7928932,5.79289322 L-0.207106781,16.7928932 C-0.597631073,17.1834175 -0.597631073,17.8165825 -0.207106781,18.2071068 C0.183417511,18.5976311 0.816582489,18.5976311 1.20710678,18.2071068 L11.5,7.91421356 Z'></path></defs><use fill='#758CA3' fill-rule='evenodd' transform='rotate(90 11.5 12)' xlink:href='#icons-default-arrow-head-right-a'></use></svg>";
    }
}