$(document).ready(function() {
  let button_value = "";
  let initial_flag = true;
  let enable_zero_flag = false;
  let enable_math_notation_flag = false;
  let enable_equal_flag = false;
  let decimal_point_flag = true;
  let number_calc_display = "0";

  function display_number() {
    $(".calc-display").html(number_calc_display);
  }
  display_number();

  $(".natural-number").click(function() {
    button_value = this.value;
    if (initial_flag == true) {
      if (number_calc_display != "-") {
        number_calc_display = "";
      }
      number_calc_display += button_value;
      display_number();
      initial_flag = false;
    }
    else {
      if (number_calc_display.slice(-1) != "0") {
        number_calc_display += button_value;
        display_number();
      }
    }
    enable_math_notation_flag = true;
    enable_zero_flag = true;
    enable_equal_flag = true;
  });

  $(".zero-number").click(function() {
    if (enable_zero_flag == false) {}
    else if (initial_flag == true) {
      if (number_calc_display != "-") {
        number_calc_display = "";
      }
      number_calc_display += "0";
      display_number();
      enable_zero_flag = false;
    }
    else {
      button_value = this.value;
      number_calc_display += button_value;
      display_number();
    }
    enable_equal_flag = true;
  });

  $(".math-notation").click(function() {
    button_value = this.value;
    if (initial_flag == true) {
      if (button_value == "-") {
        number_calc_display = "";
        number_calc_display += button_value;
        display_number();
        enable_zero_flag = true;
      }
    }
    else {
      if (number_calc_display.slice(-1) != ".") {
        if (enable_math_notation_flag == false) {
          number_calc_display = number_calc_display.slice(0, -1);
          number_calc_display += button_value;
          display_number();
        }
        else {
          number_calc_display += button_value;
          display_number();
          enable_math_notation_flag = false;
          decimal_point_flag = true;
        }
      }
    }
    enable_equal_flag = false;
  });

  $(".decimal-point").click(function() {
    button_value = this.value;
    if (decimal_point_flag == false) {}
    else {
      if (initial_flag == true) {
        number_calc_display = "";
      }
      number_calc_display += button_value;
      display_number();
      enable_math_notation_flag = false;
      decimal_point_flag = false;
      initial_flag = false;
    }
  });

  $(".equal-button").click(function() {
    if (enable_equal_flag == false) {}
    else {
      $(".calc-display").html(String(Function('"use strict";return (' + number_calc_display + ')')().toFixed(2)));
      number_calc_display = "";
      initial_flag = true;
      enable_zero_flag = true;
      enable_math_notation_flag = false;
      enable_equal_flag = false;
      decimal_point_flag = true;
    }
  });

  $(".all-clear-button").click(function() {
    number_calc_display = "0";
    display_number();
    button_value = "";
    initial_flag = true;
    enable_zero_flag = false;
    enable_math_notation_flag = false;
    enable_equal_flag = false;
    decimal_point_flag = true;
  });
});
