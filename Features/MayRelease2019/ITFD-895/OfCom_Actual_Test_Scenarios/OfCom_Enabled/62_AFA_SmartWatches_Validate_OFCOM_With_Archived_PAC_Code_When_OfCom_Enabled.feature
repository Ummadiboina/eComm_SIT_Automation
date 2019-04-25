Feature: 62_AFA_SmartWatches_Validate_OFCOM_With_Archived_PAC_Code_When_OfCom_Enabled

  @Web
  Scenario Outline: Trustev PayM Tablets Click and Collect E2E journey with Accessory in Agent shop
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid smartTech devices <Accessory>
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Input valid details in agent for registration <Firstname>, <Surname>, <HouseNumber>, <PostCode> and valid <Username>
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Register customer with valid <Password>, <Confirm_Password>, <Security_Answer> in delivery page
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed
    And Validate Agent OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | Accessory | Firstname | Surname | HouseNumber | PostCode | Username     | Password | Confirm_Password | Security_Answer | Password | ofComStatus | journey   | codeStatus | ofComMobileNum | codeVariant | pacStacCheck |
      | Watch     | TEST      | ACCEPTA | 32          | SL11ER   | TEST ACCEPTA | test123  | test123          | Anything        | test123  | Enabled     | Accessory |            |                |             |              |
