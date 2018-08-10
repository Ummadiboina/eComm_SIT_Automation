Feature: 55_Reg_CS_AccessoriesOnly

  @Web
  Scenario Outline: Accessories only E2E journey
    Given I am an CFA user and Lands on shop page
    And Navigate to Accessories
    And select an "Random" Accessory
    And add Accessories to basket within limit in details page and navigate to basket
    And I Land on the Non Phone related basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the Non Credit check payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Review page and review the order
    Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | Firstname | Surname | Username     | consumer | B1     | B2  | B3  | B4  | Text   | Email | Phone | Post | status  | MBBStatus | DeviceType    |
      | TEST      | ACCEPTA | TEST ACCEPTA | Me       | Select | Not | Not | Not | Select | Not   | Not   | Not  | Enabled | No        | Non Connected |