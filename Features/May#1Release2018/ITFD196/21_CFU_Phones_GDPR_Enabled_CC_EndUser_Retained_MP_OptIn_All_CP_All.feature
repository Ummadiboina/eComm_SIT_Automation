Feature:21_CFU_Phones_GDPR_Enabled_CC_EndUser_Retained_MP_OptIn_All_CP_All

  @Web
  Scenario Outline: 21_CFU_Phones_GDPR_Enabled_CC_EndUser_Retained_MP_OptIn_All_CP_All
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
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    And perform <Action> in OTAC page
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Click on the 'Continue button' in delivery page
    #And land on the payment page and input <Username> and other details and click 'Continue' on next step for otac
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus>

    Examples:
      | username         | password | handset           | Username     | Action |tariff|consumer| B1     | B2     | B3     | B4     | Text   | Email    | Phone     | Post    |status|MBBStatus|
      | ash@o2.com       | test123  | Samsung Galaxy S8 | TEST ACCEPTA | skip   |      |    Me  | Select | Select | Select | Select |Select|Select | Select | Select|Enabled|No                |
