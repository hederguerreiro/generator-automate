'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

    prompting() {

        this.log(
            yosay(
                `Welcome to ${chalk.blue('automate')} generator! 
                Create test automation projects for E2E tests. Test Frameworks supported: ${chalk.green('Selenium')}`
            )
        );

        const prompts = [
            {
                type: 'list',
                name: 'framework',
                message: 'Select a framework:',
                choices: [
                    {
                        name: 'Selenium',
                        value: 'selenium',
                    }
                ]
            }
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    intializing() {
        this.composeWith(require.resolve(`../${this.props.framework}`));
    }

};
