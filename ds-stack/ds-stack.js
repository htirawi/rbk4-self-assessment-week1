var Stack = function() {
	this._storage = [];
	this.add = function(value){
		this._storage.unshift(value);
	};
	this.remove = function() {
		this._storage.shift();

	};
};