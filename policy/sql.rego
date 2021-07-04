package main

deny[msg] {
  input.select.where.left.column == "n"
  input.select.where.operator == ">"
  input.select.where.right.value != "0"

  msg = "required WHERE n > 0"
}