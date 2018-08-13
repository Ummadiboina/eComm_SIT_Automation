Feature: 10_Reg_CFA_Phones_customers_moved_to_new_address_Payment_page_Home_Address_copy_update

  This scenario ensures that when the customer in acquisition journey who have moved address recently selects 'PayM Phone', then the customer should be prompted with updated copy of 'Home Address' to ensure that their address is up to date

  @Web
  Scenario Outline: CFA_Phones_CustomersMovedToNewAddressPaymentPageHomeAddressCopyUpdate
    Given I am an CFA user and Lands on shop page
    And navigate to PAYM Phones page
    And I choose PayM <handset>
    And Navigate to device details page
    And Land on the 'Tariffs and extra' page
    And I Land on the basket page and choose home delivery option
    And click on "go to checkout" button
    #And input <Firstname> and <Surname> and other valid details in Delivery page and Click on the 'Continue button'
    And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Is this order for You or Someone else <consumer> when GDPR is <status>
    And land on the payment page and verify copy text message below home address
    And land on the payment page and input <Username> and other details and click 'Continue on next step'
    And Continue to Agreements page and confirm all the agreement checks
    And Continue to Review page and review the order
    Then order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>


    Examples:
      | handset  | Firstname | Surname | Username     | consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status  | MBBStatus | DeviceType |
      | iPhone X | TEST      | ACCEPTA | TEST ACCEPTA | Someone  | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Enabled | No        | Connected  |
