// Class for shapes testing 
class Shapes {
    constructor(logoColor, logoType, logoShape) {
        this.logoColor = logoColor;
        this.logoType = logoType;
        this.logoShape = logoShape;
    }

    // Method to render the shape, replacing the logoColor & logoType in the shape string
    render() {
        return this.logoShape.replace(`${this.logoColor}`, this.logoColor);
    }
    render() {
        return this.logoShape.replace(`${this.logoType}`, this.logoType);
    }
}

// Vairables to fill in missing pieces and prove concept used in Index.js
const logoColor = `blue`
const logoType = `SVG`


// Circle, Square and Triangle extension for testing
// Constructors to initialize logoColor and set default values for logoType and logoShape
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

// Export the Circle, Square, and Triangle classes for testing
module.exports = { Circle, Square, Triangle };


