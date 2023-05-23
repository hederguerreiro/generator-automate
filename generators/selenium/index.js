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

        const defaultPrompts = [
            {
                type: 'confirm',
                name: 'isNewProject',
                message: 'Are you going to create a new Project?',
                default: true
            }
        ];

        const projectConfigPrompts = [
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
            },
            {
                type: 'checkbox',
                name: 'buildAutomation',
                message: 'Choose the build automation:',
                choices: [
                    { name: 'Maven', value: 'maven' },
                    { name: 'Gradle', value: 'gradle' },
                    { name: 'None', value: 'none', checked: true },
                ]
            },
            {
                type: 'checkbox',
                name: 'framework',
                message: 'Choose the Test Framework:',
                choices: [
                    { name: 'JUnit', value: 'junit' },
                    { name: 'TestNG', value: 'testNG' },
                    { name: 'No test framework', value: 'none', checked: true},
                ]
            },
            {
                type: 'checkbox',
                name: 'report',
                message: 'Choose the reporter:',
                choices: [
                    { name: 'TestNG Reporter', value: 'testNGReporter' },
                    { name: 'Allure Report', value: 'allureReport' },
                    { name: 'No reporter tool', value: 'none', checked: true },
                ]
            }
        ];

        return this.prompt(defaultPrompts).then(props => {
            this.defaultProps = props;
            if (this.defaultProps.isNewProject) {
                return this.prompt(projectConfigPrompts).then(props2 => {
                    this.projectConfigProps = props2;
                });
            } else {
                console.log('Ok, there is no other option to choose beside this. Tks!');
            }
        });
    }

    writing() {
        if (this.projectConfigProps !== undefined) {
            console.log(`New project name: ${this.projectConfigProps.projectName}`);
            console.log(`New project path: ${this.projectConfigProps.projectPath}`);
            console.log(`New project build automation: ${this.projectConfigProps.buildAutomation}`);
            console.log(`New project build framework: ${this.projectConfigProps.framework}`);
            console.log(`New project build report tool: ${this.projectConfigProps.report}`);
        }
    }

    install() {
        // TODO document this is not ready yet
    }
};
