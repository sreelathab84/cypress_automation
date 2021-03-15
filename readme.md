Login  Test :

Feature : Login

Scenario : Validate login functionality with valid user name and invalid password
Given User is at login page
When User enter the correct username
And User enter the invalid password
And click on Sign In button
Then Error message should be displayed on login page

Scenario : Validate login functionality with blank user name and blank password
Given User is at login page
When User enter the blank username
And User enter the blank password
Then Sign in button should be disabled on login page

Scenario : Validate login functionality with some user name and blank password
Given User is at login page
When User enter the some username
And User enter the blank password
And Click on Sign In button
Then password is required should be displayed


Scenario : Validate login functionality with blank user name and blank password
Given User is at login page
When User enter the balnk username
And User enter the some password
And Click on Sign In button
Then password is required should be displayed

Feature : Forgot password
Scenario : Validate forgot password functionality
Given User is at login page
When User click on forgot functionality link
And enter the user name at forgot password page
And click on Submit button
Then password should be reset successfully
