Feature: CFU_Refresh_Partner_end_Point_with_Buyout

  @Web
  Scenario Outline: CFA_PAYG_sims_Asterisk validation
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go bundle
    And Verify unlimited data is displayed under recommended tariff from <Contract> option
    #And verify copy text You will need to give details for all fields marked with an asterisk is displayed in PAYG Sim Journey
    #And verify asterisk is displayed against mandatory fields of "PAYG Free sim"
    #Add url redirection step above
    And I enter details in Delivery Page <Firstname> and <Surname>
    #And Enter details in Delivery Page <Firstname> and <Surname> for GDPR <CheckBox>
    Then order confirmation is displayed

      #Close the browser
    Examples:
      | Firstname | Surname | CheckBox |Contract |
      | TEST      | ACCEPTA | No       |18 months|

