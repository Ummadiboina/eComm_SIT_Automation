Feature: Reg_Jan_CFA_OOSForHomeDeliveryandCnC.feature

  This scenario ensures that when customer on aquisition journey has selected a device which is out of stock for both Home delivery and click and collect then the updated
  error messages should be displayed

  @Web

  Scenario Outline:  Aquisition_OOSForHomeDeliveryandCnC

    Given I am an CFA user and Lands on shop page
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
      | handset | color     | username               | password |
      | 3T      | Soft Gold | dasdasdkjaskd@sdsd.com | test123  |