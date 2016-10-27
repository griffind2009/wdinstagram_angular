"use strict";

let wdData = [
  {author: "a", photoUrl: "http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-30.jpg", body: "d"},
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
.state ("instagramShow", {
  url: "/instagrams/:id",
  controller: "showCtrl",
  controllerAs: "vm",
  templateUrl: "js/ng-views/show.html"
})
}

function wdController () {
  this.instagrams = wdData
 this.addInstagram = function () {
   console.log("working")
 }
}

function showController () {
  this.instagram = {}
}
