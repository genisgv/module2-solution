(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
  var listToBuy = this;

  listToBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  listToBuy.toMove = function (itemIndex) {
    ShoppingListCheckOffService.toMove(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
  var listBought = this;

  listBought.itemsBought = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService()
{
  var service = this;

  var itemsToBuy = [
  {name: "Milk", quantity: "2"},
  {name: "Donuts", quantity: "200"},
  {name: "Cookies", quantity: "300"},
  {name: "Chocolate", quantity: "5"},
  {name: "Kitkat", quantity: "3"}
  ];

  var itemsBought = [];

  service.toMove = function (itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };
}

})();
