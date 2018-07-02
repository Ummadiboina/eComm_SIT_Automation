Feature: 07_Reg_CFA_PayG_Freesim_To_Show_BigBundle_DataRollOver_In_DeliveryPage
  This scenario ensures that when the customer on acquisition journey selects Big Bundle 'Pay As You Go' Sim
  then Data Roll over copy text is displayed in the tile info and Delivery page

  @Web
  Scenario Outline: CFA_PayG_Simo_To_Show_BigBundle_DataRollOver_In_Delivery_Page
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go data roll over <FreeSim_Type> and validate Data Roll over copy for <Tariff_Value> and <Data>
    And Validate Your order section in Delivery page
    And Enter details in Delivery Page <Firstname> and <Surname> for GDPR <CheckBox>
    Then Free Sim order confirmation is displayed

    Examples:
      | Firstname | Surname | FreeSim_Type | Tariff_Value | Data | CheckBox |
      | TEST      | ACCEPTA | BigBundle    | £15          | 5GB  | No       |