Feature: CFU_New_PayG_To_Show_DataRollover_In_Basket_Page
  This scenario ensures that when the customer on Existing customer new aquisition journey selects 'Freesim' for Phones then
  Data Roll over copy text is displayed in the tile info, Your package section and Basket page

  @Web
  Scenario Outline: CFU_New_PayG_To_Show_DataRollover_In_Basket_Page
    Given I am an Existing user and Navigates to Signin page
    And Signin using valid <username> and <password> credentials
    And navigate to Pay as you Go Phones page
    And I choose PayG <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page and validate Data Roll over copy for <Tariff_Value> and <Data>
    And I Land on the basket page and choose to collect from store
    And Validate all the Basket contents
    And click on "go to checkout" button
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details for Click and collect order and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset       | Username     | Tariff_Value | Data | consumer | B1     | B2  | B3     | B4  | Text   | Email  | Phone  | Post | status  | MBBStatus | DeviceType |
      | Random Device | TEST ACCEPTA | £15          | 5GB  | Me       | Select | Not | Select | Not | Select | Select | Not    | Not  | Enabled | No        | Connected  |
      | Random Device | TEST ACCEPTA | £20          | 6GB  | Me       | Select | Not | Select | Not | Select | Not    | Select | Not  | Enabled | No        | Connected  |