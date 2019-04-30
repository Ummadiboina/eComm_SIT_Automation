Feature: 63_AFA_FitnessTracker_Validate_OFCOM_When_OfCom_Enabled

  @Web
  Scenario Outline: 63_AFA_FitnessTracker_Validate_OFCOM_When_OfCom_Enabled
    Given I login to Agent shop
    And performs Acquisition for New user
    And Select a valid smartTech devices <Accessory>
    And Validate all the Basket content and checkout
    Then perform all the advisory checks
    And Register the OFCOM PayG customer with valid <Firstname>, <Surname>, <HouseNumber>, <PostCode> and other valid details in delivery page
    And Validate Agent OFCOM switching functionality in consumer channel when ofCom status is <ofComStatus> and performing <journey> journey
    And Click on Register CTA to register OFCOM PayG Customer
    When Pay by card for PAYM device
    Then Order confirmation message should be displayed
    And Validate Agent OFCOM switching input <ofComMobileNum> <codeVariant> and status in Order Confirmation page in <journey> when <codeStatus> Pac and Stac code <pacStacCheck> selected when ofcom status is <ofComStatus>

    Examples:
      | Accessory | Firstname | Surname | HouseNumber | PostCode | Username     | Password | Confirm_Password | Security_Answer | Password | ofComStatus | journey   | codeStatus | ofComMobileNum | codeVariant | pacStacCheck |
      | Fitness   | TEST      | ACCEPTA | 32          | SL11ER   | TEST ACCEPTA | test123  | test123          | Anything        | test123  | Enabled     | Accessory |            |                |             |              |
