# Random Password Generator
## Description
Welcome to the [Random Password Generator](https://cl-lee.github.io/random-password-generator/) repo! This projects aim to help employees generate a random password through a web application. 

To support users with different needs, users can determine the following password criteria:
- Password length between 10 to 64 characters
- Four character types:
    - Lowercase
    - Uppercase
    - Numeric
    - Special characters (!@#$%^, etc.)

After choosing the options, the app will generate a random password based on the selected criteria.

## Prerequisites
A web browser is required to access the application.

## Usage
The application can be accessed through the following URL: https://cl-lee.github.io/random-password-generator/  
![The Random Password Generator webpage](./assets/landing-page.png)  

### Generate a password
- To generate the password, users can click on the "Generate Password" button 
![The "Generate Password" button](./assets/generate-password.png)

### Select password criteria
- The application will then present prompts to users to determine the password criteria. 

    #### 1. Password length
    Firstly, users will have to enter a numeric value to determine the password length. The password length can be between 10 to 64 characters.
    ![The password length prompt](./assets/password-length.png)
    - The application will notify the users if an invalid value is entered (anything besides a number from 10 to 64). Users can enter the password length again after confirming the alert.
    ![Alert! An invalid password length is entered](./assets/invalid-password-length.png)

    #### 2. Character types
    The application will then present a prompt for each of the four character types; each prompt will ask users if they would like to include the captioned character type. 
    ![Character type prompts](./assets/character-types.png)
    - The application will notify users if they chose not to include at least one character type. Users can then select which character type to include again after confirming the alert.
    ![Alert! No character type was selected](./assets/character-type-error.png)