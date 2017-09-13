Feature: CFD2064_ECOM11810_11811_ CFU_ordering choice on upgrade options page_Phone_Option selected

  Scenario Outline: This test ensures that customer is given a choice to take a sim when the customer is on a phones upgrade journey
    Given I am existing user and I click on Signin button 
	  And Signin using valid <username> and <password> credentials 
	  #And Navigate to upgrade phone
    And choose to upgrade any Phone in My upgrade page
    And Select a <handset> device from Recommended devices section
    And Select a tariff <tariff> with ribbons in upgrade journey
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
    And I Land on the basket page by clicking on Add to Basket button
    And verify that 'Go to checkout' CTA is enabled
    And Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained
    And click on "go to checkout" button
    
    Examples: 
      | username             | password | handset        | tariff                  | Username     |
      | sushiliker@email.com | test123  | Apple iPhone 7 | 19.99upfront42.00amonth | TEST ACCEPTA |
