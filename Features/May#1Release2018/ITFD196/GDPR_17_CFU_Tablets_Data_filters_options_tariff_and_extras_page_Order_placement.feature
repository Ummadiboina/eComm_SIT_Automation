Feature: GDPR_17_CFU_Tablets_Data_filters_options_tariff_and_extras_page_Order_placement

  @Web
  Scenario Outline: This scenario ensures that when a customer in upgrade journey selects 'Tablet' and navigated to tariff page ,
  then the customer should be able to see  'Data filter' button next to sort drop-down for PayM tariffs

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade > upgrade now
    And Click on Tablet section in upgrade options page
    And Select a <Tablet> device from Recommended devices section
    And Click on View all Tariffs link in upgrade options page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Is this order for You or Someone else <consumer>
    #And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue' on next step for otac
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <C1> <C2> <C3> <C4>

    Examples:
      | Tablet        | Action | Surname | Username     | filtername | sortoption                 | username                      | password |consumer      | B1  | B2  | B3  | B4  | C1| C2 | C3  | C4 |
      | Random Device | skip   | ACCEPTA | TEST ACCEPTA | low        | Monthly data (Low to High) | identityref01@mailinator.com  | test123  |SomeOne else  | Not | Not | Not | Not |Not|Not | Not | Not|
   #   | Apple iPhone 7    | TEST      | ACCEPTA | TEST ACCEPTA | high       |
