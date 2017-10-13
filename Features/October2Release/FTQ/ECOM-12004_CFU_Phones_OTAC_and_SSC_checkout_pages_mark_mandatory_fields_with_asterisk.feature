Feature: CFU_Phones_Otac and SSC checkout

  Scenario Outline: CFU_Phones_Otac and SSC checkout
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    #And Navigate to upgrade phone
    And choose to upgrade any Phone in My upgrade page
    And Select a <handset> device from Recommended devices section
    And Select a tariff in upgrade journey
    Then I should see 'Your Sim Card'section
    And no option should be selected
    And Select a 'I dont need a new sim'option
    #And Select a tariff in upgrade journey
    And Click on 'Confirm CTA'
    And I Land on the basket page by clicking on Add to Basket button
    And click on "go to checkout" button
    And Click on Send button in OTAC page
    And verify copy text ‘You'll need to give details for all fields marked with an asterisk(*).’ is displayed
    And verify asterisk is displayed against mandatory fields of "OTAC page"
    And perform <Action> in OTAC page
    #Add a function above
    And verify copy text ‘You'll need to give details for all fields marked with an asterisk(*).’ is displayed
    And verify asterisk is displayed against mandatory fields of "CFU Delivery page"
 #delivery page
    And Click on the 'Continue button' in delivery page
    And verify copy text ‘You'll need to give details for all fields marked with an asterisk(*).’ is displayed
    And verify asterisk is displayed against mandatory fields of "CFU Payments page"
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

      #Close the browser
    Examples:
      | username               | password | handset        | tariff                   | Firstname | Surname | Username     | Action    | field     |
      | in04572q_141562@o2.com | test123  | Apple iPhone 7 | 129.99upfront37.00amonth | TEST      | ACCEPTA | TEST ACCEPTA | enterCode | OTAC page |
