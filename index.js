const fs = require('fs');
const inquirer = require('inquirer');

// Function to create the SVG logo based on the provided answers
function makeSVG(logoShape, logoColor, textColor, logoType) {
    let shape;

    if (logoShape === `Circle`) {
        shape = `<circle cx="150" cy="100" r="80" fill="${logoColor}" />`;
    } else if (logoShape === `Square`) {
        shape = `<rect x="70" y="20" width="160" height="160" fill="${logoColor}" />`;
    } else if (logoShape === `Triangle`) {
        shape = `<polygon points="150,20 220,180 80,180" fill="${logoColor}" />`;
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape}
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="${textColor}">${logoType}</text>
    </svg>`;
}

// Function to write the SVG logo to a file named 'logo.svg'
function writeToFile(logoType, logoRender) {
    fs.writeFile('logo.svg', logoRender, () => {
        console.log('Generated logo.svg!');
    });
}

// Function to initialize the command line questions 
function init() {
    const questions = [
        {
            type: 'input',
            message: 'Type three characters for your logo',
            name: 'logoType',
        },
        {
            type: 'input',
            message: 'Choose text color',
            name: 'textColor',
        },
        {
            type: 'list',
            name: 'logoShape',
            message: 'Choose your logo shape',
            choices: ['Square', 'Circle', 'Triangle'],
        },
        {
            type: 'input',
            message: 'Enter a color or Hexadecimal code for your logo',
            name: 'logoColor',
        },
    ];

    // Take the response and use the inputs in previous functions to generate the SVG
    inquirer.prompt(questions).then((response) => {
        const { logoColor, logoType, textColor, logoShape } = response;

        const logoRender = makeSVG(logoShape, logoColor, textColor, logoType);
        writeToFile(logoType, logoRender);
    });
}

// Initialize the prompts
init();


