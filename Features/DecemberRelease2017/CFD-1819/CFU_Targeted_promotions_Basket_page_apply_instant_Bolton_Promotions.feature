Feature: CFU_Targeted_promotions_Basket_page_apply_instant_Bolton_Promotions
  This sceanrio ensures that the customer in upgrade journey selected the targeted promotion option in upgrade options page and laned on basket page, then the instant Bolton Promotions should be applied if applicable

  @Web
  Scenario Outline: CFU_Targeted_promotions_Basket_page_apply_instant_Bolton_Promotions

    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    And Verify that the targeted promotion section is displayed just below the 'recycle options' section
    And Verify that the heading of the panel is 'A package just for you:'
    And verify that the promotion description is displayed just after the below statement
    And verify that SIMO and tariff combination is presented in the targeted promotion section
    And click on 'Select' CTA in the tariff tile of targeted promotion
    And verify that the title 'Device' is displayed above the selected device for Your Order section
    And verify that the 'Promotions' section is displayed with all applied promotions description in the Your Order section
    And verify that for more than 1 promotions returned
    And Verify that the promotion returned is displayed in a single line
    And verify the customer is displayed with a note just under the Airtime plan
    And verify the basket contents and apply instant bolt-on promotion if applicable

    Examples:
      | username                        | password |
      |                                 | test123  |
