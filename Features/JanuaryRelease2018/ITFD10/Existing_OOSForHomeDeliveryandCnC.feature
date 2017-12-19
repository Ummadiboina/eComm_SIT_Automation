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
  And the Delivery section should show the click and collect option without a radio button and the 'OOS message'
  And Land on the 'Tariffs and extra' page
  And I Land on the basket page and choose home delivery option
  And the Delivery section should show the click and collect option without a radio button and the 'OOS message'


  Examples:
    |handset|username|password|
    |       |        |        |