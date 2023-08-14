INTRODUCTION
------------
This is Playwright project for mifos automation test. Playwright is a Node.js library for automating web browsers. It allows you to write automated tests for web applications in JavaScript and run them against multiple browsers (Chrome, Firefox, and Safari) on different platforms (Windows, macOS, and Linux)

REQUIREMENTS
------------
This projects requires the following modules:

 * Nodejs V.10 or higher 


TECHNOLOGIES
------------
This projects uses the following technologies:

 * playwright V1.29.1
 * nodejs v10
 * faker v6.6.6


HOW TO RUN
------------
 * First you neet to install nodejs
 * Then you can run **npm install**

 Set the following environment variables:
 
 ``` 
USERNAME=mifos
PASSWORD=password
BASE_URL='https://demo.mifos.io/'
TIME_OUT=50000
TRACE='on'
```

 * Then run **npx playwright test** to run all the tests
 * To run specific tests by tag name, run **npx playwright test --grep "@tagName" --headed**.  Or you can run multiple tags by typing  **npx playwright test --grep "@tag1|@tag2" --headed**

 * To show the html report generated run **npx playwright show-report**

MAINTAINERS
-----------
Current maintainers:
 * Judiao Mbaua

