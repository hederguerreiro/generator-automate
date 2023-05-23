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
