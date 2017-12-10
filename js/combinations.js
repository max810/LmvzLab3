/**
 * Created by maxbe on 19.11.2017.
 */
function Combinations() {
    this._combs = {
        "water fire": "steam",
        "rock fire": "lava",
        "rock water": "leaf"
    };
    this.getCombo = function (first, second) {
        return this._combs[first + " " + second] || this._combs[second + " " + first];
    };
}

var comb = new Combinations();
var chosen = new Chosen();
function Chosen() {
    this._chosen = [];
    this.isFull = function () {
        if (this.first() && this.second()) {
            return true;
        }
        return false;
    };
    this.add = function (el) {
        if (this.isFull()) {
            this._chosen[0] = this._chosen[1];
        }
        if (this._chosen[0])
            this._chosen[1] = el;
        else
            this._chosen[0] = el;
    };
    this.remove = function (el) {
        if (this._chosen[0] == el)
            this._chosen.shift();
        else if (this._chosen[1] == el)
            this._chosen.pop();
    };
    this.first = function () {
        return this._chosen[0];
    };
    this.second = function () {
        return this._chosen[1];
    };
    this.empty = function () {
      this._chosen = [];
    };
    this.isEmpty = function () {
        return this._chosen.length == 0;
    };
    this.count = function () {
      return this.isFull() ? 2 : this.isEmpty() ? 0 : 1;
    }
}