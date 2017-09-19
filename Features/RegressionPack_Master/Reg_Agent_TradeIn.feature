Feature: Reg_Agent_TradeIn

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: Successful completion of a PAY M dongle Acqusistion Journey
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Clicks on 'Trade In'button
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials
    And Click on 'Continue' button on upgrade page
    And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed

    Examples: 
      | user        | Device              | Tariffs | username                      | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | password |
      | 07521117063 | S7 edge black 32 GB | Refresh | 13ma88212553@stf.ref.o2.co.uk | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | Flat 6      | SL11EL   | test123  |
