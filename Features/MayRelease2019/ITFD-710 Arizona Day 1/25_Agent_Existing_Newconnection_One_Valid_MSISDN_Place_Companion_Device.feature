#######################################Not Required######################################

Feature: 25_Agent_Existing_Newconnection_One_Valid_MSISDN_Place_Companion_Device

  #launch hooks and get browser
  @Web
  Scenario Outline: 25_Agent_Existing_Newconnection_One_Valid_MSISDN_Place_Companion_Device
    Given I login to Agent shop
    And performs Agent Existing customer journey for <user>
    And Select a valid companion device PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination
    And Validate Bill Spend Cap in agent deal builder section when BSC is <BSCstatus>
    And Validate all the Basket content and checkout
    And Verify lead device pairing section is displayed
    #Write code for selecting the MSISDN in this
    And Verify number of MSISDN
    Then perform all the advisory checks
    And perform the credit checks for Agent Existing <username> by Bank details
    #And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Choose <DeliveryType> delivery address and delivery time
    #And Accept O2 Refresh Deal Summary
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials for New User
    And Click on 'Continue' button on upgrade page
    And Is this order for You or Someone else <consumer> when GDPR is <status2>
    And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted
    And Continue to Review page, check order contract text and review the order
    Then order confirmation is displayed

    Examples:
      | user        | Device | Tariffs | BSCstatus | username | consumer | B1     | B2     | B3     | B4  | Text   | Email  | Phone | Post | status  | password | DeviceType | DeliveryType | status2  |    Firstname   |   Surname   |   HouseNumber  |    PostCode    |   Username    |   Password    |   confirmPassword   |   SecurityAnswer    |   Consumer    |  DeviceModule   |
      | 07568414065 |  | Standard | Disabled   |            | Me       | Select | Select | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  | Yes         |            |                |             |                |                |               |               |                     |                     |               |                 |

