Feature: CFU_Targeted_promotions_upgrade_options_page_Basket_page_SSC_and_PDF_changes
  This scenario ensures that the customer in upgrade journey lands on upgrade option page, then the customer should be presented with targeted promotion section and the changed should be reflected in the following page
  1.Basket page 2.Deleviery page 3.Payment page 4.Agreement page 5.Review page 6.Review delivery page 7.Order confirmation

  @Web
  Scenario Outline:  CFU_Targeted_promotions_upgrade_options_page_Basket_page_SSC_and_PDF_changes

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And verify updated copytext is displayed displayed under 'You're ready to upgrade panel'
    And click on "No thanks, I'll keep my device" and continue to Upgrade
    And verify that the targeted promotion section <promotion> is displayed just below the 'recycle options' section
    And verify that the heading of the panel is 'A package just for you:'
    And verify that the promotion description <promotion description> is displayed
    And verify that SIMO or handset make/model and tariff combination is presented in the targeted promotion section
    And click on 'Select' CTA in the tariff tile of targeted promotion
    And Verify that the title 'Device' is displayed above the selected device for Your Order section
    And verify that 'What’s my Device Plan?' is displayed below device description
    And verify that the following is displayed in lower case
    And verify that there is no space on either side of the slash
    And Verify that at the end of the total in note copy ‘doesn’t’ is displayed instead of ‘does not’
    And verify that the 'Promotions' section is displayed with all applied promotions description in the Your Order section
    And verify that for more than 1 promotions returned, display 'Promotions' one after another separated by a line
    And verify the customer is presented with a note just under the Airtime plan
    And select 'I don't need a new sim' in 'Your sim card' section
    And Click on 'Confirm CTA'
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And click on "go to checkout" button
    And verify that the 'Promotions' section is displayed with all applied promotions description in the Your Order section
    And verify that for more than 1 promotions returned, display 'Promotions' one after another separated by a line
    And verify that a note 'Discount applied to bill' is displayed underneath each Promotion
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
    And verify that the 'Promotions' section is displayed with all applied promotions description in the Your Order section
    And verify that for more than 1 promotions returned, display 'Promotions' one after another separated by a line
    And verify that a note 'Discount applied to bill' is displayed underneath each Promotion
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And verify that the 'Promotions' section is displayed with all applied promotions description in the Your Order section
    And verify that for more than 1 promotions returned, display 'Promotions' one after another separated by a line
    And verify that a note 'Discount applied to bill' is displayed underneath each Promotion
    And Continue to Agreements page and confirm all the agreement checks
    And verify that the 'Promotions' section is displayed with all applied promotions description in the Your Order section
    And verify that for more than 1 promotions returned, display 'Promotions' one after another separated by a line
    And verify that a note 'Discount applied to bill' is displayed underneath each Promotion
    And click on 'Change delivery date and time' link
    And verify that the 'Promotions' section is displayed with all applied promotions description in the Your Order section
    And verify that for more than 1 promotions returned, display 'Promotions' one after another separated by a line
    And Verify that a note 'Discount applied to bill' is displayed underneath each Promotion
    And Continue to Review page and review the order
    Then order confirmation is displayed
    And verify that the 'Promotions' section is displayed with all applied promotions description in the Your Order section in PDF
    And verify that for more than 1 promotions returned, display 'Promotions' one after another separated by a line
    And verify that a note 'Discount applied to bill' is displayed underneath each Promotion

    Examples:
      | username                        | password |  Username     |
      | simsjj20gbsdspoubngsd@sdsds.com | test123  | TEST ACCEPTA  |
