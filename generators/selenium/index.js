/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2023 H. J. Guerreiro <heder.guerreiro@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

"use strict";

const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Prepare to create your ${chalk.green("Selenium Java project")}!`)
    );

    const defaultPrompts = [
      {
        type: "confirm",
        name: "isNewProject",
        message: "Are you going to create a new Project?",
        default: true
      }
    ];

    const projectPrompts = [
      {
        type: "input",
        name: "projectName",
        message: "What is the name of the project?"
      },
      {
        type: "input",
        name: "projectPath",
        message: "What is the path to the project?",
        default: __dirname
      },
      {
        type: "checkbox",
        name: "buildAutomation",
        message: "Choose the build automation:",
        choices: [
          { name: "Maven", value: "maven" },
          { name: "Gradle", value: "gradle" },
          { name: "None", value: "none", checked: true }
        ]
      },
      {
        type: "checkbox",
        name: "framework",
        message: "Choose the Test Framework:",
        choices: [
          { name: "JUnit", value: "junit" },
          { name: "TestNG", value: "testNG" },
          { name: "No test framework", value: "none", checked: true }
        ]
      },
      {
        type: "checkbox",
        name: "report",
        message: "Choose the reporter:",
        choices: [
          { name: "TestNG Reporter", value: "testNGReporter" },
          { name: "Allure Report", value: "allureReport" },
          { name: "No reporter tool", value: "none", checked: true }
        ]
      }
    ];

    return this.prompt(defaultPrompts).then(props => {
      this.props = props;
      if (this.props.isNewProject) {
        return this.prompt(projectPrompts).then(projectProps => {
          this.projectProps = projectProps;
        });
      }
    });
  }

  writing() {
    if (this.projectProps !== undefined) {
      console.log(`New project name: ${this.projectProps.projectName}`);
      console.log(`New project path: ${this.projectProps.projectPath}`);
      console.log(
        `New project build automation: ${this.projectProps.buildAutomation}`
      );
      console.log(
        `New project build framework: ${this.projectProps.framework}`
      );
      console.log(`New project build report tool: ${this.projectProps.report}`);
    }
  }

  install() {
    // TODO document this is not ready yet
  }
};
