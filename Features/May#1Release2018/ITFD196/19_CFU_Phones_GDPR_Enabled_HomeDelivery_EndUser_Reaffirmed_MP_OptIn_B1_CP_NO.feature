Feature: 19_CFU_Phones_GDPR_Enabled_HomeDelivery_EndUser_Reaffirmed_MP_OptIn_B1_CP_NO

  @Web
  Scenario Outline: 19_CFU_Phones_GDPR_Enabled_HomeDelivery_EndUser_Reaffirmed_MP_OptIn_B1_CP_NO
    Given I am existing user and I click on Signin button
    And Signin using valid <username> and <password> credentials
    #And Navigate to upgrade phone
    And choose to upgrade any Phone in My upgrade page
    And Select a <handset> device from Recommended devices section
    And Select a tariff <tariff>
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
    And perform <Action> in OTAC page
    And Is this order for You or Someone else <consumer>
    #And Click on the 'Continue button' in delivery page
    And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <C1> <C2> <C3> <C4>

    Examples:
      | username         | password | handset           | Username     | Action |tariff|consumer| B1     | B2  | B3  | B4  | C1| C2 | C3  | C4 |
      | ash@o2.com       | test123  | Samsung Galaxy S8 | TEST ACCEPTA | skip   |      |    Me  | Select | Not | Not | Not |Not|Not | Not | Not|
