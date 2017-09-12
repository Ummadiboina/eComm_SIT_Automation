Feature: CFU_Cover_me_copy_update_on_basket_summary

  Scenario Outline: 
    This scenario ensures that when the customer on acquisition journey selects insurance, 
    then the customer should be able to see 'Insurance' copy text in the SSC checkout Your order section instead of 'Cover Me'
    
    select tablet
    and view tariff
    select insurance
    go to basket
    go to checkout
    verify insurance copy text is displayed on delivery page
    continue to payment page
    verify insurance copy text is displayed on payment page
    continue to next step
    verify insurance copy text is displayed on the agreement page
    continue to next step
    verify insurance copy text is displayed on your order section
    continue to next step 
    download pdf and  verify insurance copy text is displayed on pdf
    

    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to upgrade phone
    And Select a <handset> device from Recommended devices section
    And Select a tariff <tariff> with ribbons in upgrade journey
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    #verify delivery page
    And Click on the 'Continue button' in delivery page
    #verify payment page
    And land on the payment page, input details and click 'Continue on next step'
    #verify agreement page
    And Continue to Agreements page and confirm all the agreement checks
    #verify Review page
    And Continue to Review page and review the order
    Then order confirmation is displayed

    #verify pdf download
    #verify pdf content
    Examples: 
      | username   | password | handset  | Firstname | Surname | Username     | Action | Status           |
      | ins_nov746 | test123  | GalaxyS8 | TEST      | ACCEPTA | TEST ACCEPTA | skip   | Delayed Delivery |
