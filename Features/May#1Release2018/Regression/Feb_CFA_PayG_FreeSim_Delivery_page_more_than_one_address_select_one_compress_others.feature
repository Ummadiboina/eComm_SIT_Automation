Feature: Feb_CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others
  This scenario ensures that when the customer on acquisition journey selects 'Freesim' for Phones  and enters the postcode in Delivery page, then all the other addresses in the drop down should be compressed on selecting one of the address

  @Web
  Scenario Outline: CFA_PayG_FreeSim_Delivery_page_more_than_one_address_select_one_compress_others
    Given I am an CFA user and Lands on shop page
    And navigate to PayG SIMO page
    And Select a pay as you go bundle
    #And Land on the 'Tariffs and extra' page
    And I enter details in Delivery Page <Firstname> and <Surname>
    Then Free Sim order confirmation is displayed

    Examples:
      | Firstname | Surname |
      | TEST      | ACCEPTA |