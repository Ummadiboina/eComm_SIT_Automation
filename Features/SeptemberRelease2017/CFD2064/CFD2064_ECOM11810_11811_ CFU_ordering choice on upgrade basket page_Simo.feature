Feature: CFD2064_ECOM11810_11811_ CFU_ordering choice on upgrade options page_Phone_Option not selected

  Scenario Outline: This test ensures that customer is given a choice to take a sim when the customer is on a simo upgrade journey
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page
    And I Click on 'Pick a sim only tariff' link
    And Click on different <Contract>  Months Tariff in Tab
    And Select any Random Tariff in the displayed list of Tariffs under different <Contract> tab
    And I Land on the Plan included basket page and choose home delivery option
    Then I should see 'Your Sim Card'section
    And no option should be selected
    And verify that Confirm CTA is not displayed
    And verify that copy text 'Your Sim Card'section
    And verfiy that two option are displayed
    And verify that 'Sim Swap Form'link is diplayed
    When I click on 'Sim Swap Form' I should be opned with a new tab
    And Select a 'I need a sim'option
    And Verify that 'Confirm CTA' is displayed
    And Click on 'Confirm CTA'   
    And click on "go to checkout" button
    And The OTAC page should be displayed
    And I enter the OTAC code and click on Submit button
    Then I should land on the Delivery page and click on 'Continue'button
    And I enter all the details and click on 'Submit' button
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page, check order contract text and review the order
    And Check order contract text in Order Confirmation page
    Then order confirmation is displayed

    Examples: 
      | username    | password | Contract  |
      | ina_mar1132 | test123  | 30 Days   |
      | ina_mar1618 | test123  | 12 Months |
