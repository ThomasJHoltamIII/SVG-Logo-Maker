class Shapes {
    constructor(logoShape, logoColor, logoType) {
        this.logoShape = logoShape
        this.logoColor = logoColor
        this.logoType = logoType
    }
};

const Circle = new Shapes(
    `<circle cx="150" cy="100" r="80" fill="${logoColor}" />`,
    `${logoColor}`,
    `${logoType}`,
);

const Square = new Shapes(
    `<rect x="70" y="20" width="160" height="160" fill="${logoColor}" />`,
    `${logoColor}`,
    `${logoType}`,
);

const Triangle = new Shapes(
    `<polygon points="150,20 220,180 80,180" fill="${logoColor}" />`,
    `${logoColor}`,
    `${logoType}`,
);

export { Circle, Square, Triangle };
