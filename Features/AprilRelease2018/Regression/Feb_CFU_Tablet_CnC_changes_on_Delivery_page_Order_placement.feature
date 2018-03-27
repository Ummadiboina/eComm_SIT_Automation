Feature: Feb_CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement

  This scenario ensures that when the customer on upgrade journey selects 'Tablet' proceeds till Delivery page, then the customer should be displayed with 'Go to click and collect’ under the Home delivery tab and should be able to place order with Click and collect

  @Web
  Scenario Outline: CFU_Tablet_CnC_changes_on_Delivery_page_Order_placement
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on Tablet section in upgrade options page
    And Select a <Tablet> device from Recommended devices section
    And Click on View all Tariffs link in upgrade options page
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Enter details in Delivery page for Click and collect and Click on the 'Continue button'
    And Enter cardDetails in payment page input <username> and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed


    Examples:
      | username      | password | Tablet        | tariff                 | houseNumber | Postcode | Username     | Action | Firstname | Surname |
      | hsty@gail.com | test123  | Random Device | 9.99upfront60.00amonth | 111         | SL11Er   | Test Accepta | skip   | Test      | Accepta |

