$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01PayMPhonesHomeDelivery.feature");
formatter.feature({
  "line": 1,
  "name": "CFA PayM Phones Home delivery E2E journey",
  "description": "",
  "id": "cfa-paym-phones-home-delivery-e2e-journey",
  "keyword": "Feature"
});
formatter.before({
  "duration": 33786022332,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#launch hooks and get browser"
    }
  ],
  "line": 5,
  "name": "CFA PayM Phones Home delivery E2E journey",
  "description": "",
  "id": "cfa-paym-phones-home-delivery-e2e-journey;cfa-paym-phones-home-delivery-e2e-journey",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smokeTesthomedelivery"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am an CFA user and Lands on shop page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigate to PAYM Phones page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose PayM \"handset\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to device details page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Land on the \u0027Tariffs and extra\u0027 page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Land on the basket page and choose home delivery option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on \"go to checkout\" button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "input all the fields on the Delivery page and Click on the \u0027Continue button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I land on the payment page and input all the details and click \u0027Continue on next step\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Continue to Agreements page and confirm all the agreement checks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Continue to Review page and review the order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "order confirmation is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_am_an_CFA_user_and_Lands_on_shop_page()"
});
formatter.result({
  "duration": 265455248,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.navigate_to_PAYM_Phones_page()"
});
formatter.result({
  "duration": 12813342864,
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
  "duration": 15720150447,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.Navigate_to_device_details_page()"
});
formatter.result({
  "duration": 13637504047,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.land_on_the_Tariffs_and_extra_page()"
});
formatter.result({
  "duration": 12928312122,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_Land_on_the_basket_page_and_choose_home_delivery_option()"
});
formatter.result({
  "duration": 14500722693,
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
  "duration": 10873833,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.input_all_the_fields_on_the_Delivery_page_and_Click_on_the_Continue_button()"
});
formatter.result({
  "duration": 10664744,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.i_land_on_the_payment_page_and_input_all_the_details_and_click_Continue_on_next_step()"
});
formatter.result({
  "duration": 9924019,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_to_Agreements_page_and_confirm_all_the_agreement_checks()"
});
formatter.result({
  "duration": 10994991,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.continue_to_Review_page_and_review_the_order()"
});
formatter.result({
  "duration": 9813801,
  "status": "passed"
});
formatter.match({
  "location": "E2EOrderPlaced_Steps.order_confirmation_is_displayed()"
});
formatter.result({
  "duration": 9875799,
  "status": "passed"
});
formatter.after({
  "duration": 4433881949,
  "status": "passed"
});
});