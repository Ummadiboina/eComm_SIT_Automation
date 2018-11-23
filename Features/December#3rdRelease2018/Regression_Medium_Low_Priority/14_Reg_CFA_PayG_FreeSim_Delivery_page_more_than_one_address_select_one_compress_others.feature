Feature: 14_Reg_CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others

  This scenario ensures that when the customer on acquisition journey selects 'Freesim' for Phones  and enters the postcode in Delivery page, then all the other addresses in the drop down should be compressed on selecting one of the address

  @Web
  Scenario Outline: CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go bundle
    #And Land on the 'Tariffs and extra' page
    #And I enter details in Delivery Page <Firstname> and <Surname>
    #And input <Firstname> and <Surname> and other valid details in Delivery page to verify GDPR
    And Enter details in Delivery Page <Firstname> and <Surname> for GDPR <CheckBox>
    Then Free Sim order confirmation is displayed
    Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType> <PreSelected>

    Examples:
      | Firstname | Surname | consumer | B1  | B2  | B3  | B4  | Text | Email | Phone | Post | status   | MBBStatus | DeviceType | CheckBox | PreSelected |
      | TEST      | ACCEPTA | Me       | Not | Not | Not | Not | Not  | Not   | Not   | Not  | Disabled | No        | Connected  | Yes      | No          |