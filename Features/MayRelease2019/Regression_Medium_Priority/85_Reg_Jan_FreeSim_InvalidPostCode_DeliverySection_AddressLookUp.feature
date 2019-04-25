Feature: 85_Reg_Jan_FreeSim_InvalidPostCode_DeliverySection_AddressLookUp

  This ensures that a valid error message should get displayed when user enters invalid postcode while doing address look up in the Delivery section

  @Web
  Scenario Outline: This ensures that a valid error message should get displayed when user enters invalid postcode while doing address look up in the Delivery section

    Given I am an CFA user and Lands on shop page
    And Navigate to FreeSim page
    And I select 'iPads and Tablets' tab
    And I select <Surfer_Type> surfer and <sim_type> sim
    #And enter a <houseNumber> and an <PostCode> in Delivery section
    #Then the respective <error> message should be displayed in address look up section
    And input <postcode> <HouseNumber> <Firstname> and <Surname> and other valid details in Delivery page

    Examples:
      | Surfer_Type  | sim_type | houseNumber | PostCode    | error                     | postcode | HouseNumber | Firstname | Surname |
      | Light surfer | iPad     | 100         | SL111ER1232 | Enter a valid UK postcode | IN24LD   | 12          | TEST      | ACCEPTA |