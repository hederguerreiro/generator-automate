'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {

    prompting() {

        this.log(
            yosay(
                `Prepare to create your ${chalk.green('Selenium Java project')}!`
            )
        );

        const defaultPrompt = [
            {
                type: 'confirm',
                name: 'isNewProject',
                message: 'Are you going to create a new Project?',
                default: true
            }
        ];

        const projectConfigPrompt = [
            {
                type: 'input',
                name: 'projectName',
                message: 'What is the name of the project?'
            },
            {
                type: 'input',
                name: 'projectPath',
                message: 'What is the path to the project?',
                default: __dirname
            }
        ];

        return this.prompt(defaultPrompt).then(props => {
            this.defaultProps = props;
            if (this.defaultProps.isNewProject) {
                return this.prompt(projectConfigPrompt).then(props2 => {
                    this.projectConfigProps = props2;
                });
            }
        });
    }

    writing() {
        if (this.projectConfigProps !== undefined) {
            console.log(`New project name: ${this.projectConfigProps.projectName}`);
            console.log(`New project path: ${this.projectConfigProps.projectPath}`);
        }
        // this.fs.copy(
        //     this.templatePath('dummyfile.txt'),
        //     this.destinationPath('dummyfile.txt')
        // );
    }

    install() {
        // this.installDependencies();
    }
};
