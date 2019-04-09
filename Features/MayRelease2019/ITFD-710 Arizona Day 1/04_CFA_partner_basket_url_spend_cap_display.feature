Feature: 04_CFA_partner_basket_url_spend_cap_display


  @Web
  Scenario Outline: CFA_partner_basket_url_spend_cap_display
    Given I am an CFA user and Lands on shop page
    And I am provided with the partner Basket page url <url>
    And customer lands on basket page
    And Verify BSC section on Basket page

    Examples:
     |url           |
     |              |