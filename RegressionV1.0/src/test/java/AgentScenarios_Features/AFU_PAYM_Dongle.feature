Feature: Successful completion of a PAY M dongle upgrade Journey by selecting a dongle

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: Successful completion of a PAY M dongle upgrade Journey by selecting a dongle
    Given I login to Agent shop
    And performs Upgrade for <user>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And accept the O2 Refresh deal summary
    Then check if CCA link is generated and click on the Generate CCA link
    When user select CCA link
    Then user should land on signin page
    When user enters valid user credentials
    Then user should be logged in and user should be directly taken to the Otac Page
    And continue in Delivery page and Click on the 'Continue'
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    Examples: 
      | user        | AcquistionOrUpgrade | Device              | Username     | Tariffs   |
      | 07521119805 | Upgrade             | S7 edge black 32 GB | TEST ACCEPTA | 24 Months |
