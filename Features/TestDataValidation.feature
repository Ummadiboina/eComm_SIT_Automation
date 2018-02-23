Feature: Test Data Validation

  Scenario Outline:  Test Data Validation
  This scenario ensures that when the customer on an upgrade journey has selected a PayM phone having associated tariffs and lands on the tariff and extras section  then the insurance price should be in a sorted order and the free insurance is auto selected

    Given Read the data from exel with the location <LocationOFSheet>


    Examples:
      | LocationOFSheet                                               |
      | C:\\Users\\subbaiv1\\Desktop\\RegTC_Debug_Status_Tracker.xlsx |