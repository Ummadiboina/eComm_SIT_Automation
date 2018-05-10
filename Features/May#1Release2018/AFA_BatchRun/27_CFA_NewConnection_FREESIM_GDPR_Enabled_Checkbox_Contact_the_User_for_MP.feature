Feature: 27_CFA_NewConnection_FREESIM_GDPR_Enabled_Checkbox_Contact_the_User_for_MP

  This Scenario ensures that when the Customer in acquisition journey selects 'FreeSIM'  with Home delivery and placed an order by not selecting the checkbox,
  then the customer should be contacted

  @Web
  Scenario Outline: 27_CFA_NewConnection_FREESIM_GDPR_Enabled_Checkbox_Contact_the User for MP
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go bundle
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed in PAYG Sim Journey
    And Enter details in Delivery Page <Firstname> and <Surname> for GDPR <CheckBox>
    Then Free Sim order confirmation is displayed
    #And verify asterisk is displayed against mandatory fields of "PAYG Free sim"
    #Add url redirection step above
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button' in GDPR
    #customer is either Me or Someone else
    #And Is this order for You or Someone else <consumer>
    #Then order confirmation is displayed
    #Then Choose <consumer> <status> Business preferences <B1> <B2> <B3> <B4> And Channel Preferences <Text> <Email> <Phone> <Post> <MBBStatus> <DeviceType>


    Examples:
      | handset  | Firstname | Surname | Username     | consumer | B1     | B2  | B3     | B4     | Text   | Email  | Phone | Post | CheckBox | MBBStatus |DeviceType|
      | iPhone 6 | TEST      | ACCEPTA | TEST ACCEPTA | Me       | Select | Not | Select | Select | Select | Select | Not   | Not  | No       | No        |Connected |