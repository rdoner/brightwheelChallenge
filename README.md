# brightwheelChallenge

## Installation
1. Clone repo https://github.com/rdoner/brightwheelChallenge.git
2. Run npm start
3. Test by using Postman to send a post request to localhost:8080/email with parameters of to (email), to_name (string), from (email), from_name (string), subject (string), and body (HTML). 

## Languge/Framework/Libraries
I chose to use node and express to quickly and simply set up a host server. I used the body-parser library to parse the data from the request. I also used the express validator library to assist in making sure there were valid emails and that no parameters were empty. I used the dotenv library to access the SendGrid API access token in the env file.

## Tradeoffs/ToDo
If I were to spend additional time on the project, I would work on finding ways to check whether emails had been received. I would also work on integrating the sender name into the emails, something that requires additional configuration in SendGrid. 