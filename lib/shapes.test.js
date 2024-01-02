const { Circle, Square, Triangle } = require('./shapes');


describe('Triangle', () => {
  it('should render a blue triangle', () => {
    const shape = new Triangle("blue");
    expect(shape.render()).toEqual(`<polygon points="150,20 220,180 80,180" fill="blue" />`);
  });
});

describe('Circle', () => {
  it('should render a blue circle', () => {
    const shape = new Circle("blue");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
  });
});

describe('Square', () => {
  it('should render a blue square', () => {
    const shape = new Square("blue");
    expect(shape.render()).toEqual(`<rect x="70" y="20" width="160" height="160" fill="blue" />`);
  });
});

describe('Square', () => {
  it('should render a red square', () => {
    const shape = new Square("red");
    expect(shape.render()).toEqual(`<rect x="70" y="20" width="160" height="160" fill="red" />`);
    console.log(shape)
  });
});

describe('Triangle', () => {
  it('should render a red Triangle', () => {
    const shape = new Triangle("red");
    expect(shape.render()).toEqual(`<polygon points="150,20 220,180 80,180" fill="red" />`);
    console.log(shape)
  });
});

describe('Circle', () => {
  it('should render a red Circle', () => {
    const shape = new Circle("red");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
    console.log(shape)
  });
});

