Feature: 94_CFA_PAYG_SIMO_Validate_OFCOM_PortIn_Section_And_TarckingStatus_When_OfCom_Disabled


  @Web
  Scenario Outline: 7_CFA_PayG_SIMO_Validate_OFCOM_PortIn_Section_When_OfCom_Enabled
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go bundle
    And Enter delivery details <HouseNumber> <PostCode> and about you info <Firstname> and <Surname> for PayG SIMO journey
    And Validate OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Input GDPR <CheckBox> and submit for PayG SIMO journey
    Then order confirmation is displayed

    Examples:
      | Firstname | Surname | CheckBox | HouseNumber | PostCode | journey | ofComStatus |
      | TEST      | ACCEPTA | No       |             | SL11ER   | SIMO    | Disabled    |
