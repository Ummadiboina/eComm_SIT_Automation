Feature: 35_Reg_CFA_Basket page cross sell insurance

  @Web
  Scenario Outline: CFA_Basket page cross sell insurance
  This scenario ensures that when the customer
  has selected a PayM phone having one associated tariffs which had free insurance and has selected that  tariff
  in the tariff and extras page without selecting the free insurance then free insurance is displayed as cross sell on basket page

    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And select a <tariff> which has free insurance
    #And Validate consumer Bill Spend Caps section when BSC is <BSCstatus>
    And Click on Dont Select Cap My Bill CTA when BSC is <BSCstatus>
    And deselect if any insurance is autoselected
    And verify that the insurance is in a sorted order
    And I Land on the basket page by clicking on Add to Basket button
    And verify that the cheapest insurance is shown to crossell in the basket page
    And verify if the 'Add Now' button is displayed for the cheapest insurance shown in basket page
    And click on the 'Add now' button and verify Insurance gets added successfully
    And click on "go to checkout" button
    And enter a <Firstname> and <Surname> and ten digit home number
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    When order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>

    Examples:
      | handset  | tariff                 | BSCstatus | consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status  | MBBStatus | DeviceType | Firstname | Surname | Username     |
      | iPhone X | 9.99upfront44.00amonth | Disabled  | Someone  | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled | No        | Connected  | TEST      | ACCEPTA | TEST ACCEPTA |
