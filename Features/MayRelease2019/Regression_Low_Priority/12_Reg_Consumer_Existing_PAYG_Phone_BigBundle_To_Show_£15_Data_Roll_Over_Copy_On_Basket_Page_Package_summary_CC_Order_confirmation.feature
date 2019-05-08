Feature: 12_Reg_Consumer_Existing_PAYG_Phone_BigBundle_To_Show_£15_Data_Roll_Over_Copy_On_Basket_Page_Package_summary_CC_Order_confirmation
  This scenario ensures that when the customer on Existing customer new aquisition journey selects 'Freesim' for Phones then
  Data Roll over copy text is displayed in the tile info, Your package section and Basket page

  @Web
  Scenario Outline: CFU_New_PayG_To_Show_DataRollover_In_Basket_Page
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to Pay as you Go Phones page
    And I choose PayG <handset>
    #And I choose PayM <handset>
    And click on the color dropdown
    And verify the name of the colour is next to the colour tile in CFAPhoneColour
    And select <color> color of the connected device
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page and validate Data Roll over copy for <Tariff_Value> and <Data>
    And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    #And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And I Land on the basket page and choose to collect from store
    And Validate all the Basket contents
    And click on "go to checkout" button
    #And Select existing account and begin fast checkout
    And scroll to an element in DeliveryPage for taking screenshots
    #And Is this order for You or Someone else <consumer> when GDPR is <status>
    #And Validate consumer GDPR consent section and choose Business preferences <B1> <B2> <B3> with <KeyEvent> for <DeviceType> in delivery page when GDPR is <GDPRstatus> and <PreSelected>
    And Click on GDPR Continue CTA
    #And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And land on the existing customer payment page and input <Username> and other details for Click and collect order
    #And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>
    Then Validate consumer GDPR consent section is hidden in Order confirmation page or not

    Examples:
      | username                      | password | handset       | color      | Username     | Tariff_Value | Data | consumer | BSCstatus | B1     | B2  | B3     | B4  | Text   | Email  | Phone | Post | GDPRstatus | MBBStatus | DeviceType | PreSelected | KeyEvent |
      | till53420195@stf.ref.o2.co.uk | test123  | iPhone 8 Plus | Space Grey | TEST ACCEPTA | £15          | 5GB  | Me       | Disabled  | Select | Not | Select | Not | Select | Select | Not   | Not  | Enabled    | No        | Connected  | No          | No       |