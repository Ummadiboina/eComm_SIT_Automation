Feature: 04_CFA_partner_package_options_page_url_spend_cap_display


  @Web
  Scenario Outline: CFA_partner_package_options_page_url_spend_cap_display
    Given I am an CFA user and Lands on shop page
    And I am provided with the partner package options page url <url>
    ##And Verify if the customer is redirected to the Basket page means the below step
    And customer lands on basket page
    And Verify BSC section on Basket page

    Examples:
      |url           |
      |              |