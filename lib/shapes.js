class Shapes {
    constructor(logoColor, logoType, logoShape) {
    this.logoColor = logoColor;
    this.logoType = logoType;
    this.logoShape = logoShape;
    }
    render() {
        return this.logoShape.replace(`${logoColor}`, this.logoColor)
    }
    render() {
        return this.logoShape.replace(`${logoType}`, this.logoType)
    }
}

const logoColor = `blue`
const logoType = `SVG`

class Circle extends Shapes {
    constructor(logoColor) {
        super(logoColor, `${logoType}`, `<circle cx="150" cy="100" r="80" fill="${logoColor}" />`);
    }
}

class Square extends Shapes {
    constructor(logoColor) {
        super(logoColor, `${logoType}`, `<rect x="70" y="20" width="160" height="160" fill="${logoColor}" />`);
    }

}
class Triangle extends Shapes {
    constructor(logoColor) {
        super(logoColor, `${logoType}`, `<polygon points="150,20 220,180 80,180" fill="${logoColor}" />`);
    }
}

module.exports = { Circle, Square, Triangle };

