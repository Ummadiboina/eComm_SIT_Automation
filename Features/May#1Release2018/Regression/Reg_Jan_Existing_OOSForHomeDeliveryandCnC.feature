Feature: Reg_Jan_Existing_OOSForHomeDeliveryandCnC.feature

  This scenario ensures that when an existing customer has selected a device which is out of stock for both Home delivery and click and collect then the updated
  error messages should be displayed

  @Web

  Scenario Outline:  Existing_OOSForHomeDeliveryandCnC

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And select <color> color of the connected device
    And the Delivery information section should show the 'OOS message'
    And Land on the 'Tariffs and extra' page
    And the Delivery section should show 'OOS message'
    And I Land on the basket page by clicking on Add to Basket button
    And the Delivery section should show 'OOS message'


    Examples:
      | handset | color     | username                      | password |
      | 3T      | Soft Gold | 01ma92047305@stf.ref.o2.co.uk | test123  |