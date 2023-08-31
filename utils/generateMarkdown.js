// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'none') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none') {
    return `## License

      Licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ##Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Contributors](#contributors)
  - [Contact](#contact)

  ## Description
  ${data.description}

  ## Installation
  The following necessary dependencies must be installed to run the 
  application properly: ${data.require}

  ## Usage
  In order to use this app, run in the terminal.

  ## Technologies
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Contact
  * Name - ${data.name}
  * Email - ${data.email}
  * GitHub = [${data.creator}](https://github.com/${data.creator})

  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;
