const fs = require(`fs`);
const inquirer = require(`inquirer`);

inquirer
.prompt([
    {
        type: `input`,
        message: `Type three charcahters for your logo`,
        name: `logoType`
    },
    {
        type: `list`,
        name: `logoShape`,
        message: `Choose your logo shape`,
        choices: [
            `Square`,
            `Circle`,
            `Triangle`,
        ],
    },
    {
        type: `input`,
        message: `Enter a color or Hexadecimal code for your logo`,
        name: `logoColor`
    },
])

