Feature: OOSForHomeDeliveryButAvailableForCnC
  This scenario ensures that when the customer has selected a device which is out of stock for Home delivery but available for click and collect then the updated
  error messages should be displayed

  @Web
  Scenario Outline: OOSForHomeDeliveryandCnC

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    Then the 'OOS' messages should be displayed in the delivery section with no radio buttons
    And the click and collect option should be displayed in the delivery section
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    Then verify the 'OOS message' is displayed in the upgrades basket page
    Then the error message should be displayed


    Examples:
      |handset|
      |       |