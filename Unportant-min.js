(function(){checkForFunctionBind();var unportant={};Array.prototype.jumble=function(){var newArray=this.slice(0);for(var i=0;i<this.length;i++)this[i]=newArray.splice(getRandomNumber(0,newArray.length-1),1)[0]};function getRandomNumber(minNo,maxNo){return Math.floor(Math.random()*Number(maxNo)+Number(minNo))}function checkForFunctionBind(){if(!Function.prototype.bind)Function.prototype.bind=function(oThis){if(typeof this!=="function")throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
var fSlice=Array.prototype.slice,aArgs=fSlice.call(arguments,1),fToBind=this,fNOP=function(){},fBound=function(){return fToBind.apply(this instanceof fNOP?this:oThis||window,aArgs.concat(fSlice.call(arguments)))};fNOP.prototype=this.prototype;fBound.prototype=new fNOP;return fBound}}window.unportant=unportant})();