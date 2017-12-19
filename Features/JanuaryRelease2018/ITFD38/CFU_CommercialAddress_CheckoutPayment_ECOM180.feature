Feature: CFU_CommercialAddress_CheckoutPayment_ECOMC180
  This scenario ensures that when upgrade customer searches for a commercial address and no address is returned then an error message should be displayed
  @Web
  Scenario Outline: CFU_CommercialAddress_CheckoutPayment_ECOMC180

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Select a <handset> device from Recommended devices section
    And Select a tariff <tariff> with ribbons in upgrade journey
    And I Land on the basket page for upgrades
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Click on the 'Continue button' in delivery page
    And Click on 'Use a different delivery address'link
    And enter a house number and an <Postcode>
    Then the respective <error> message should be displayed

    Examples:

    Examples:
      | username               | password | handset        | tariff                   | Postcode  |error     |
      | in04572q_141562@o2.com | test123  | Apple iPhone 7 | 129.99upfront37.00amonth | Commercial|Commercial|