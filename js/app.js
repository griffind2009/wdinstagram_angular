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
  .controller("showCtrl", [showController])


function RouterFunction ($stateProvider) {
$stateProvider
.state ( "index", {
  url: "/",
  controller: "wdCtrl",
  controllerAs: "vm",
  templateUrl: "js/ng-views/index.html"
})
}

function wdController () {
  this.instagrams = wdData
}

function showController () {
  this.instagrams = this.instagram
}
