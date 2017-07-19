Feature: C1960_ECOM11430_11485_11433_11419_TC3_CFA_MBB_Show_basecomms_tariffs_on_T&E_page_for_my_offers_journey

  Scenario Outline: This scenario ensures that when the customer in Acquisition Journey lands on My offers page for 'MBB', then the customer should be able to see 'Basecomm' devices associated with basecomm tariffs in device tile and Tariff and extras page
    Given I launch the OldMBBURL
    And select "random" MBBtariff
    And Navigate to PayM MBB page
    And I choose MBB PayM <MBBName>
    And Navigate to device details page
    And verify that the Basecomms tariff is not displayed in the Tariff and Extras page

    Examples: 
      | username           | password  | OldMBBURL                                            | user         | MBBName   |
      | bvt2.cfu@gmail.com | cfubvt123 | https://www.o2.co.uk/shop/my-offers/mobile-broadband | TEST ACCEPTA | MBBDEVICE |
