Feature: Reg_October2Release_ECOM-12004_CFA_PayG_Freesim_Phones_DeliveryPageMarkMandatoryFieldsWithAsterisk.feature

  @Web
  Scenario Outline: CFA_PAYG_sims_Asterisk validation
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go bundle
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed in PAYG Sim Journey
    And verify asterisk is displayed against mandatory fields of "PAYG Free sim"
    #Add url redirection step above
    And input <Firstname> and <Surname> and other valid details in Delivery page for Click and collect and Click on the 'Continue button' in GDPR
    #customer is either Me or Someone else
    And Is this order for You or Someone else <consumer>
    Then order confirmation is displayed
    And Choose Business preferences <B1> <B2> <B3> <B4> and Channel Preferences <C1> <C2> <C3> <C4> for <Consumer>


    Examples:
      | handset  | Firstname | Surname | Username       |consumer| B1       | B2   | B3       | B4      | C1     | C2    | C3  | C4 |
      | iPhone 6 | TEST       | ACCEPTA | TEST ACCEPTA  |    Me   | Select  | Not | Select     | Select |Select  |Select | Not | Not|