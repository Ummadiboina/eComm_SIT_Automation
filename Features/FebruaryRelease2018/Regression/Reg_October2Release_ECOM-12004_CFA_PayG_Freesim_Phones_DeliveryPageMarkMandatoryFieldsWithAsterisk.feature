Feature: Reg_October2Release_ECOM-12004_CFA_PayG_Freesim_Phones_DeliveryPageMarkMandatoryFieldsWithAsterisk.feature

  @Web
  Scenario Outline: CFA_PAYG_sims_Asterisk validation
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go bundle
    And verify copy text You will need to give details for all fields marked with an asterisk is displayed
    And verify asterisk is displayed against mandatory fields of "PAYG Free sim Delivery page"
    #Add url redirection step above
    And I enter details in Delivery Page<Firstname> and <Surname>
    Then order confirmation is displayed

      #Close the browser
    Examples:
      | Firstname | Surname |
      | TEST      | ACCEPTA |
