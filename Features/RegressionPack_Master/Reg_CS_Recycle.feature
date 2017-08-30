Feature: Reg_CS_Recycle

  Scenario Outline: This scenario ensures that the customer is able to recycle and upgrade 
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And choose to upgrade any Phone in My upgrade page
    And click on choose device link in upgrade and recycle section
    And Select make more or network
    And click on update device
    And select a recycle option
    And click on 'Yes,get an accurate quote'
    And answer all the questions and click on 'Accept and continue to upgrade' button 
    And I select a Phone from the recommended section
    And I select a tariff from the recommended section
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
    And I click on 'Add and go to basket' CTA
    And verify that 'Go to checkout' CTA is enabled
    And Verify that the option selected by the user in 'Your sim card' section in upgrade options page is retained
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
      | username    | password |
      | inp_dec2034 | test123  |
