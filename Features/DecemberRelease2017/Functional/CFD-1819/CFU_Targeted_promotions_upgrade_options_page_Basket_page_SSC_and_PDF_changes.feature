  Feature: CFU_Targeted_promotions_upgrade_options_page_Basket_page_SSC_and_PDF_changes
  This scenario ensures that the customer in upgrade journey lands on upgrade option page, then the customer should be presented with targeted promotion section and the changed should be reflected in the following page
  1.Basket page 2.Deleviery page 3.Payment page 4.Agreement page 5.Review page 6.Review delivery page 7.Order confirmation

  @Web
  Scenario Outline:  CFU_Targeted_promotions_upgrade_options_page_Basket_page_SSC_and_PDF_changes

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And the targeted promotion section is displayed just below the 'recycle options' section
    And the heading of the panel is 'A package just for you:'
    And the promotion description is displayed
    And SIMO or handset make/model and tariff combination is presented in the targeted promotion section
    And click on 'Select' CTA in the tariff tile of targeted promotion
    And the title 'Device' is displayed above the selected device for Your Order section
    And "What’s my Device Plan?" is displayed below device description
    And verify whether 'sim' and 'collection' is in lower case
    And there is no space on either side of the slash
    And at the end of the total in note copy ‘doesn’t’ is displayed instead of ‘does not’
    And the 'Promotions' section is displayed with all applied promotions description in the Your Order section
    And for more than one promotions returned
    And 'Promotions' is displayed one after another separated by a line
    And verify the customer is presented with a note just under the Airtime plan
    And Select a 'I dont need a sim'option
    And Click on 'Confirm CTA'
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And click on "go to checkout" button
    And the 'Promotions' section is displayed with all applied promotions description in the Your Order section
     And more than one promotions is returned
    And the promotion returned is displayed in a single line
    And a note 'Discount applied to bill' is displayed underneath each Promotion
    And input the below details in Delivery page
      | HouseNumber           | 111          |
      | Post Code             | SL11ER       |
      | Title                 | Mr           |
      | FirstName             | Test         |
      | Surname               | Accepta      |
      | Contact Number        | 07822377333  |
      | Password              | TesterSit123 |
      | Security Answer       | test         |
      | Date of Birth - Date  | 22           |
      | Date of Birth - Month | 10           |
      | Date of Birth - Year  | 1990         |
    And Click on the 'Continue button'
    And the 'Promotions' section is displayed with all applied promotions description in the Your Order section
     And more than one promotions is returned
    And the promotion returned is displayed in a single line
    And a note 'Discount applied to bill' is displayed underneath each Promotion
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And the 'Promotions' section is displayed with all applied promotions description in the Your Order section
     And more than one promotions is returned
    And the promotion returned is displayed in a single line
    And a note 'Discount applied to bill' is displayed underneath each Promotion
    And Continue to Agreements page and confirm all the agreement checks
    And the 'Promotions' section is displayed with all applied promotions description in the Your Order section
     And more than one promotions is returned
    And the promotion returned is displayed in a single line
    And a note 'Discount applied to bill' is displayed underneath each Promotion
    And click on 'Change delivery date and time' link
    And the 'Promotions' section is displayed with all applied promotions description in the Your Order section
     And more than one promotions is returned
    And the promotion returned is displayed in a single line
    And a note 'Discount applied to bill' is displayed underneath each Promotion
    And Continue to Review page and review the order
    Then order confirmation is displayed


    Examples:
      | username                        | password |  Username     |
      | simsjj20gbsdspoubngsd@sdsds.com | test123  | TEST ACCEPTA  |
