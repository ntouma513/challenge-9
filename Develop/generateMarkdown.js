// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  return `[License] (https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  return `* [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
This project has a license under ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Install](#install)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License] (#license)
  
  ## Install
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Contact me for questions at: [${data.email}](mailto:${data.email}).
  You can find more of my projects at [${data.github}](https://github.com/${data.github}).

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
