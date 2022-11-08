const prefix = 'carrusel-home-';
const numberOfImages = 8;
const NumberArray = Array.from(Array(numberOfImages).keys());

export const carrouselImages = NumberArray.map((number, index ) => (
    {
        id: index,
        name: prefix + (number+1),
        source: '/images/carousel/' + prefix + (number+1) + '.jpg'
    }
))

