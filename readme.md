# Subscriber Generator

Subscriber generator is a **fullstack** application, with custom-built REST API that enable a user to generate a list of sample subscribers and store the data in a MongoDB database.  
<br> Front-End designed with **HTML, CSS (Bootstrap 5), and Vanilla JS**.
<br> Back-End designed with **Node.js, Express, and MongoDB Database**.

## Demo

<br>
<img width="100" height="100" src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt = "name">

<br> Adding and removing subscribers

<br>
<img width="100" height="100" src="https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt = "name">

<br> Fully-responsive design

## Features

- Custom REST API with defined schema to ensure data is santized and secure
- Mongo.db integration to store all generated subscriber data
- Generates sample data which includes email, subscriber image, etc from the Random User API
- UI enables added users to be easily deleted with a click of a button
- Fully responsive to various device sizes

## Project Preview

To preview this project, access the live version at the following link. (Note: live version does have backend functionality - for full demo, follow Installation steps below)

## Installation

To install this project, ...

## References

Express Server Setup: https://www.youtube.com/watch?v=fgTGADljAeg&t=650s&ab_channel=WebDevSimplified

Random User API: https://randomuser.me/

## Future Optimizations

- For security purposes, call the Random User API within the custom REST API - this ensures that the data being pushed to the front-end is santized. Additional benefit of having the front-end needing to only connect to one end-point.
