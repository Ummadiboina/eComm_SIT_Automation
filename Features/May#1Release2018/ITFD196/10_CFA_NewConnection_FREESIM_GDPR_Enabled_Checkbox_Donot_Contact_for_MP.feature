Feature: 10_CFA_NewConnection_FREESIM_GDPR_Enabled_Checkbox_Donot_Contact_for_MP

  @Web
  Scenario Outline: 10_CFA_NewConnection_FREESIM_GDPR_Enabled_Checkbox_Donot_Contact_for_MP
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go bundle
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed in PAYG Sim Journey
    And I enter details in Delivery Page<Firstname> and <Surname>  for GDPR <CheckBox>
    Then Free Sim order confirmation is displayed
    #And verify asterisk is displayed against mandatory fields of "PAYG Free sim"
    #Add url redirection step above
    #And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button' in GDPR
    #customer is either Me or Someone else
    #And Is this order for You or Someone else <consumer>
    #Then order confirmation is displayed
    #And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <C1> <C2> <C3> <C4> for <Consumer>


    Examples:
      | handset  | Firstname | Surname | Username       |consumer| B1       | B2   | B3       | B4      | C1     | C2    | C3  | C4 |CheckBox|
      | iPhone 6 | TEST       | ACCEPTA | TEST ACCEPTA  |    Me   | Select  | Not | Select     | Select |Select  |Select | Not | Not|Yes     |