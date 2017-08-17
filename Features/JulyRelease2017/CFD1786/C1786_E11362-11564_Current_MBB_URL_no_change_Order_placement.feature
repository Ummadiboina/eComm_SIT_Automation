Feature: C1786_E11362-11564_Current_MBB_URL_no_change_Order_placement

  Scenario Outline: This scenario ensures that there should not be any change for customer with Current MBB URL and customer should be able to place order
    
    Current URL:
    https://www.o2.co.uk/shop/my-offers/mobile-broadband

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And I launch the OldMBBURL
    And select "random" MBBtariff
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    And land on the payment page and input <user> and other details for upgrade and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed

    #Modify the above step to include pdf download
    Examples: 
      | username             | password | OldMBBURL                                                | user         |
      | inavl0wx_355207@o2.com | test123  | https://www.ref.o2.co.uk/shop/my-offers/mobile-broadband | TEST ACCEPTA |
