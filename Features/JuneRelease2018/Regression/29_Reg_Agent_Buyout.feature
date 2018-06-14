Feature: 29_Reg_Agent_Buyout

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a BuyOut Journey
    Given I login to Agent shop
    #And performs Acquisition for New user
    And performs Upgrade for <User>
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    And clicks on 'Buyout' button
    #And Validate all the Basket content and checkout
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <consumer> when GDPR <status> <DeviceType> for AFU journey
    Then perform all the advisory checks_new
    And Click on 'Generate CCA' button
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials
    #And Click on 'Continue' button on upgrade page
    #And CiPhone 6s plus 128GB Rose Goldlick on the 'Continue button' in delivery page
    #And land on the payment page and input <Username> and other details and click 'Continue on next step' in upgrade journey
    #And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks
    #And Continue to Review page, check order contract text and review the order
    #Then order confirmation is displayed

    Examples:
      | User        | Device                                    | Tariffs | username      | DeliveryType | Firstname | Surname | HouseNumber | PostCode | Username     | password | consumer | B1  | B2  | B3     | B4  | Text   | Email  | Phone  | Post   | status  | MBBStatus | DeviceType |
      | 07521120466 | Samsung Galaxy S9 Plus 128GB Lilac Purple | Refresh | erto@1234.com | HomeDelivery | Test      | Accepta | Flat 9      | SL11EL   | Test Accepta | test123  | Me       | Not | Not | Select | Not | Select | Select | Select | Select | Enabled | No        | Connected  |