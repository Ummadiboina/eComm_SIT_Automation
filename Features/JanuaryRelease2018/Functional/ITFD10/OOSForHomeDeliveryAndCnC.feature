Feature: OOSForHomeDeliveryandCnC
  This scenario ensures that when the customer has selected a device which is out of stock for both Home delivery and click and collect then the updated
  error messages should be displayed

  @Web
  Scenario Outline: OOSForHomeDeliveryandCnC

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And the Delivery section should show 'OOS message'
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    TAnd verify whether the updated error message is displayed on top of the page
    And the Delivery section should show 'OOS message'



    Examples:
    |handset|
    |       |
