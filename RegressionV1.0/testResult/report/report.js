$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01PayMPhonesHomeDelivery.feature");
formatter.feature({
  "line": 1,
  "name": "CFA PayM Phones Home delivery E2E journey",
  "description": "",
  "id": "cfa-paym-phones-home-delivery-e2e-journey",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15289205467,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "CFA PayM Phones Home delivery E2E journey",
  "description": "",
  "id": "cfa-paym-phones-home-delivery-e2e-journey;cfa-paym-phones-home-delivery-e2e-journey",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTesthomedelivery"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I choose PayM \"handset\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Choose to view all tariffs from device details page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "input all the fields on the Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I land on the payment page and input all the details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 287917707,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 18926054288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "handset",
      "offset": 15
    }
  ],
  "location": "E2EOrderPlaced_Steps.i_choose_PayM(String)"
});
formatter.result({
  "duration": 423363891,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.choose_to_view_all_tariffs_from_device_details_page()"
});
formatter.result({
  "duration": 37279,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 52272,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 44573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "go to checkout",
      "offset": 10
    }
  ],
  "location": "E2EOrderPlaced_Steps.click_on_button(String)"
});
formatter.result({
  "duration": 107786,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.input_all_the_fields_on_the_Delivery_page_and_Click_on_the_Continue_button()"
});
formatter.result({
  "duration": 37684,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_land_on_the_payment_page_and_input_all_the_details_and_click_Continue_on_next_step()"
});
formatter.result({
  "duration": 31607,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_to_Agreements_page_and_confirm_all_the_agreement_checks()"
});
formatter.result({
  "duration": 30390,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_to_Review_page_and_review_the_order()"
});
formatter.result({
  "duration": 32822,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_is_displayed()"
});
formatter.result({
  "duration": 36064,
  "status": "passed"
});
formatter.after({
  "duration": 2002874971,
  "status": "passed"
});
});