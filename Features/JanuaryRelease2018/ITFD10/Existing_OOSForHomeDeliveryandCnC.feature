Feature: Existing_OOSForHomeDeliveryandCnC
  This scenario ensures that when an existing customer has selected a device which is out of stock for both Home delivery and click and collect then the updated
  error messages should be displayed
@Web

  Scenario Outline:  Existing_OOSForHomeDeliveryandCnC
  Given I am existing user and I click on Signin button
  And Signin using valid <username> and <password> credentials
  And navigate to PAYM Phones page
  And I choose PayM <handset>
  And Navigate to device details page
  Then the 'OOS' messages should be displayed in the delivery section with no radio buttons
  And Land on the 'Tariffs and extra' page
  And I Land on the basket page and choose home delivery option
  Then the error message should be displayed

  Examples:
    |handset|username|password|
    |       |        |        |