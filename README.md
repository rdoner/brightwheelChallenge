# brightwheelChallenge

## Installation
1. Install node onto your computer: https://nodejs.org/en/download/
2. In your terminal navigate to directory where you want to save the project
3. Enter "git clone https://github.com/rdoner/brightwheelChallenge.git"
4. Enter into the project by entering "cd brightwheelChallenge"
5. Run "npm start" in the command line
6. Test by using Postman to send a post request to localhost:8080/email with parameters of to (email), to_name (string), from (email), from_name (string), subject (string), and body (HTML). 
. Or run unit test by entering "npm test" in the command line

## Languge/Framework/Libraries
I chose to use javascript, node and express to quickly and simply set up a host server. I used the body-parser library to parse the data from the request. I also used the express validator library to assist in making sure there were valid emails and that no parameters were empty. I used the dotenv library to access the SendGrid API access token in the env file. I used Jest for testing because it is easy to set up and Supertest to test requests to the API endpoint

## Future work
If I were to spend additional time on the project, I would work on finding ways to check whether emails had been received. I would also work on integrating the sender name into the emails, something that requires additional configuration in SendGrid. 