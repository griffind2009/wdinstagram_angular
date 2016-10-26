"use strict";

let wdData = [
  {author: "a", photoUrl: "", body: "d"},
  {author: "b", photoUrl: "", body: "e"},
  {author: "c", photoUrl: "", body: "f"}
]


  angular
  .module("wdinstagram", ["ui.router"])
  .controller("wdCtrl", [ wdController])

  .config([
    "$stateProvider",
    RouterFunction
  ])


function RouterFunction ($stateProvider) {
console.log("Working")
}

function wdController () {
  this.wd = wdData
}
