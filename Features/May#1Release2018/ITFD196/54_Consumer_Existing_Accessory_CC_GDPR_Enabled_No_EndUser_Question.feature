Feature: 54_Consumer_Existing_Accessory_CC_GDPR_Enabled_No_EndUser_Question.feature

  This scenario ensures that when a customer in Existing customer journey selects 'Accessory' with GDPR enabled
  and Click and collect then End user question should not be displayed in Delivery page and Preferences should not be displayed in Order confirmation page

  @Web

  Scenario Outline: 54_Consumer_Existing_Accessory_CC_GDPR_Enabled_No_EndUser_Question
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And Navigate to Accessories
    And Select <accessoryname> from accessories
    And add quantity of accessories to basket within <limit1> in details page and navigate to basket
    And I Land on the basket page and choose to collect from store
    And click on "go to checkout" button
    And Select existing account and begin fast checkout
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>


    Examples:
      | username   | password | accessoryname     | Username     | limit1 | user         | status  | consumer            | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | MBBStatus | DeviceType    |
      | ash@o2.com | test123  | Samsung Galaxy S8 | test accepta | 2      | TEST ACCEPTA | Enabled | No End user section | Not | Not | Not | Not | Not  | Not   | Not   | Not  | No        | Non Connected |
