Feature: CFU_New_PayG_FreeSim_To_Show_DataRollOver_In_Delivery_Page

  @Web
  Scenario Outline: CFU_New_PayG_FreeSim_To_Show_DataRollOver_In_Delivery_Page
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to PayG SIMO page
    And Select a pay as you go data roll over <FreeSim_Type> and validate Data Roll over copy for <Tariff_Value> and <Data>
    And Validate Your order section in Delivery page
    And Select 'I’ll keep my current sim' option
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And Click on 'I agree to the terms and condition' checkbox in SIMO review page
    And Click on 'Place your order' CTA
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | username     | password | FreeSim_Type | Tariff_Value | Data | consumer | B1     | B2  | B3     | B4  | Text   | Email  | Phone | Post | status  | MBBStatus | DeviceType |
      | TEST ACCEPTA | test123  | Big_Bundle   | £15          | 6GB  | Me       | Select | Not | Select | Not | Select | Select | Not   | Not  | Enabled | No        | Connected  |
