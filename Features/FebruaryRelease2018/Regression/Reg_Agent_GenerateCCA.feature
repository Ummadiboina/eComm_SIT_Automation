Feature: Reg_Agent_Generate CCA

  #launch hooks and get browser
  @Web
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
    And Register the customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And get the emailid
    And Click on 'Generate CCA' button
   # And click on the 'CCA' link
    #And Signin using CCA valid emailid and <password1> credentials
    #And Click on 'Continue' button on upgrade page
    #And Click on the 'Continue button' in delivery page
    #And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    #And Continue to Agreements page and confirm all the agreement checks
    #And Continue to Review page, check order contract text and review the order
    #Then order confirmation is displayed


    Examples:
      | user        | Device                   | Tariffs | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | emailid        | password1    |
      | 07521000051 | Galaxy S7 Edge 32GB Pink | Refresh | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | Flat 6      | SL11EL   | tester@tes.com | SitTester123 |
