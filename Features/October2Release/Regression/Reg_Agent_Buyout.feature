Feature: Reg_Agent_Buyout

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a BuyOut Journey
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <User>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And clicks on 'Buyout' button
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials
    And Click on 'Continue' button on upgrade page
    And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed

    Examples: 
      | User        | Device              | Tariffs | username               | DeliveryType | Firstname | Surname | HouseNumber | PostCode | Username     | password |
      | 07521121347 | S7 edge black 32 GB | Refresh | in06541m_926168@o2.com | HomeDelivery | Test      | Accepta | Flat 9      | SL11EL   | Test Accepta | test123  |
