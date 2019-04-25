Feature: 17_Agent_Existing_NewConnection_Valid_Lead_Device_New_Companion_Device

  #launch hooks and get browser
  @Web
  Scenario Outline: 17_Agent_Existing_NewConnection_Valid_Lead_Device_New_Companion_Device
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    #code for below
    And Select a valid companion device PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    #Select a tariff for performing CCA journey
    And select a valid Handset and Tariff combination_new
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    #code for below along with error scenarios
    And Verify lead device pairing section is displayed when the user status is <user_status> and validate order summary section
    Then perform all the advisory checks
    And perform the credit checks for Agent Existing <username_bank> by Bank details
    And Click on 'Generate CCA' button
    #Then CCALink Should be generated
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials for New User
    And Click on 'Continue' button on upgrade page
    And Is this order for You or Someone else <consumer> when GDPR is <status2>
    And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed

    Examples:
      | user        | Device                           | Tariffs | BSCstatus | username                   | consumer |  password | status2 |  username_bank |    user_status    |
      | 07801056803 |   Galaxy Watch Active Silver     | Refresh | Disabled  | give the fun id of the user|          |  test123  | Disabled|  Test Accepta  |       Valid       |


