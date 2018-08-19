Feature: 31_Reg_Agent_GenerateCCA

  #launch hooks and get browser
  @Web
  Scenario Outline: Successful completion of a PAY M Acquistion journey by CCA settlement
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid PayM <Device>
    And Select valid <Tariffs> from tariffs tab
    And select a valid Handset and Tariff combination_new
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And perform the credit checks using valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Register customer with valid <Password>, <confirmPassword>, <SecurityAnswer> in delivery page
    And validate register status
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <Text> <Email> <Phone> <Post> for <Consumer> when GDPR <status> <DeviceType> <DeviceModule> for AFA journey
    And Choose <DeliveryType> delivery address and delivery time
    #And Update Device Plan Link Email Address
    #And Accept O2 Refresh Deal Summary
    And Click on 'Generate CCA' button
    #Then CCALink Should be generated
    And click on the 'CCA' link
    And Signin using valid <username> and <password> credentials
    #And Click on 'Continue' button on upgrade page
    #And Is this order for You or Someone else <consumer> when GDPR is <status2>
    #And land on the payment page and input details and click 'Continue on next step' in upgrade journey for CCA Link
    #And Continue to CCA or Buyout or Trade In Agreements page and confirm all the agreement checks for SECCI and CCA not accepted
    #And Continue to Review page, check order contract text and review the order
    #Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Device                          | Tariffs | Extras | DeliveryType | Firstname | Surname | Username     | HouseNumber | PostCode | Password | confirmPassword | SecurityAnswer | B1     | B2     | B3     | B4  | Text   | Email  | Phone  | Post   | Consumer | status  | status2  | consumer | username                            | password | MBBStatus | DeviceType | DeviceModule |
      | Apple iPhone X 256GB Space Grey | Refresh | Base   | HomeDelivery | TEST      | ACCEPTA | TEST ACCEPTA | 14          | SL11UP   | test1234 | test1234        | vinudeep       | Select | Select | Select | Not | Select | Select | Select | Select | Me       | Enabled | Disabled | Me       | hardeepashwini3398@stf.ref.o2.co.uk | test1234 | No        | Connected  | Phone        |
