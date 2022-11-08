const prefix = 'gal-infra-';
const numberOfImages = 12;
const NumberArray = Array.from(Array(numberOfImages).keys());

export const infrastructureImages = NumberArray.map((number, index ) => (
    {
        id: index,
        img_number: number,
        name: prefix + (number),
        source: '/images/infrastructure/' + prefix + (number) + '.jpg'
    }
))