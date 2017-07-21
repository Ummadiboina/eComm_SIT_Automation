Feature: C1960_ECOM11430_11485_11433_11419_TC3_CFA_MBB_Show_basecomms_tariffs_on_T&E_page_for_my_offers_journey

  Scenario Outline: This scenario ensures that when the customer in Acquisition Journey lands on My offers page for 'MBB', then the customer should be able to see 'Basecomm' devices associated with basecomm tariffs in device tile and Tariff and extras page
    Given I launch the OldMBBURL
    And select Basecomm MBBDevice <Device_Name>
    And Navigate to PayM MBB page
    And I choose MBB PayM <Device_Name>
    And Navigate to device details page
    And verify that the Basecomms tariff for MBB is not displayed in the Tariff and Extras page <Device_Name>

    Examples: 
      | OldMBBURL                                                | Device_Name              |
      | https://www.ref.o2.co.uk/shop/my-offers/mobile-broadband | Huawei 4G Pocket Hotspot |
