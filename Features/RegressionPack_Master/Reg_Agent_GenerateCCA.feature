Feature: Reg_Agent_Generate CCA

  #launch hooks and get browser
  @AgentsRegression
  Scenario Outline: Successful completion of a PAY M Acquistion journey by CCA settlement
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination such that there is monthly
    # And Select valid <Extras> from extras tab
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And update the <emailid>
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <emailid> and <password1> credentials
    And click on 'Continu'
    And land on Delivery page and click on 'Continue'
    And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed

    # And Update Device Plan Link Email Address
    # Then CCALink Should be generated
    Examples: 
      | Device              | Tariffs | Extras | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | emailid | password1 |
      | S7 edge black 32 GB | Random  | Base   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | Flat 6      | SL11EL   |         |           |
