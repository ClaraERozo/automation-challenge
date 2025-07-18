This project was created as part of the **QA Craft Growth Automation Challenge 2025**.  
It includes automated tests written in **Cypress** that validate essential flows such as navigation, login, and order management on the site:  
https://www.laboratoriodetesting.com

## 🔐 Setup Requirements

Before getting started, make sure you have the following installed on your machine:

- Node.js (recommended version: 18 or higher): https://nodejs.org/
- Git: https://git-scm.com/

You can verify your installation with:

node -v  
npm -v  
git --version  

## ⚙️ Installation

Clone this repository:

git clone https://github.com/ClaraERozo/automation-challenge.git  
cd automation-challenge  

Install the project dependencies:

npm install  

Launch Cypress in interactive mode:

npx cypress open  

Or run tests in headless mode:

npx cypress run  

## 📄 Mochawesome Report Setup

Install the reporting dependencies:

npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator  

Merge the Cypress report files:

npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json  

Generate the final HTML report:

npx mochawesome-report-generator cypress/reports/report.json  

You can now open the report at:  
cypress/reports/report.html
