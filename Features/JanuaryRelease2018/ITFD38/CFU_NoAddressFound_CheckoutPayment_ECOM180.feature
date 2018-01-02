Feature: CFU_NoAddressFound_CheckoutPayment_ECOM180

  @Web
  Scenario Outline: CFU_NoAddressFound_CheckoutPayment_ECOM180

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
    And enter a <houseNumber> and an <PostCode>
    Then the respective <error> message should be displayed

    Examples:
      | username               | password | handset        | tariff                   | PostCode|error  |houseNumber|
      | in04572q_141562@o2.com | test123  | Apple iPhone 7 | 129.99upfront37.00amonth | Invalid |Invalid|     eCom  |