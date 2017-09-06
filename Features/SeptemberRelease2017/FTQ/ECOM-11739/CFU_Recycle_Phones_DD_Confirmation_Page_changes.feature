Feature: CFU_Recycle_Phones_DD_Confirmation_Page_changes

  Scenario Outline: 
    This scenario ensures that when the customer in Upgrade journey selects delayed delivery phone, 
    then the customer should be able to see the changes in 'Confirmation Page formatting box'

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade phone
    Then Verify that in the recycle value is displayed in the Recycle panel > dropdowns
    Then Select any one recycle option and click on 'Continue to Upgrade'
    And Select a <handset> device from Recommended devices section
    And Select a tariff <tariff> with ribbons in upgrade journey
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Click on the 'Continue button' in delivery page
    And land on the payment page, input details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Verify contents of order confirmation page for Phones containing <Status>

    Examples: 
      | username   | password | handset  | Firstname | Surname | Username     | Action | Status           |
      | ins_nov746 | test123  | GalaxyS8 | TEST      | ACCEPTA | TEST ACCEPTA | skip   | Delayed Delivery |
