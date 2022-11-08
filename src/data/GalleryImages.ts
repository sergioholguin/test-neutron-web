const prefix = 'GAL';
const numberOfImages = 15;
const NumberArray = Array.from(Array(numberOfImages).keys());

export const galleryImages = NumberArray.map((number, index ) => (
    {
        id: index,
        img_number: number,
        name: prefix + (number),
        source: '/images/gallery/' + prefix + (number) + '.jpg'
    }
))