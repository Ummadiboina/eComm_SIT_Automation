Feature: CFU_OOSForHomeDeliveryAndCnC
  This scenario ensures that when an Upgrade customer has selected a device which is out of stock for Home delivery and click and collect then the updated
  error messages should be displayed

  @Web
  Scenario Outline: OOSForHomeDeliveryButAvailableForCnC

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    #The device should be out of stock for home delivery but available for click and collect
    And Select a <handset> device from Recommended devices section
    And Select a tariff <tariff> with ribbons in upgrade journey
    Then 'OOS message' should be displayed in the upgrade options page
    And the Delivery section should show the click and collect option without a radio button and the 'OOS message'
    And I Land on the basket page for upgrades
    Then verify the 'OOS message' is displayed in the upgrades basket page
    And the Delivery section should show the click and collect option without a radio button and the 'OOS message'

    Examples:
      | username               | password | handset        | tariff                   |
      | in04572q_141562@o2.com | test123  | Apple iPhone 7 | 129.99upfront37.00amonth |