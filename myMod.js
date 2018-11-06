// function comCounter() {
//     var i = 0;
//     return function () {
//         console.log(++i);
//     }
// }
// var counter1 = comCounter();
// counter1();
// counter1();

// function () {console.log(1);}()
// function foo() {console.log(1);}()
// function foo(i) {console.log(i);}(11)
// var i = function (a) { return a; } (100);
// var bFlag = true && function (a) {return a} (false);

// var createEventRegister = function () {
// 	if (window.addEventListener) {
// 		return function (ele, type, fn) {
// 			ele.addEventListener(type, fn);
// 		}
// 	} else if (window.attachEvent) {
// 		return function (ele, type, fn) {
// 			ele.attachEvent("on" + type, function () {
// 				fn.call(ele, window.event);
// 			});
// 		}
// 	} else {
// 		return function (ele, type, fn) {
// 			ele["on" + type] = fn;
// 		}
// 	}
// }
// var eleA = document.getElementsByTagName("a");
// var addEvent = createEventRegister();
// for(var i = 0, len = eleA.length; i < len; i ++) {
//     addEvent(eleA[i], "click", (function (lockIndex) {
//         return function (e) {
//             e.preventDefault();
//             console.log(lockIndex);
//         }
//     }(i)));
// }


// var counter = (function () {
//     var i = 0;
//     return {
//         get : function () {
//             return i;
//         },
//         set : function (val) {
//             i = val;
//         },
//         increment : function () {
//             return ++ i;
//         }
//     }
// }());
// counter.increment()
// counter.get();
// counter.set(3);
// counter.get();

// var Mod = function () {
//     var eleA = document.getElementsByTagName("a");
//     return {
//         modify : function (str1, str2) {
//             var sStr = str1 + str2;
//             for(var i = 0, len = eleA.length; i < len; i ++) {
//                 eleA[i].innerHTML = sStr;
//             }
//         }
//     }
// }
// var mod = new Mod();
// mod.modify("aaa", "=====bbb");

// var blogModule = (function () {
//     var my = {}, privateName = "博客园";
//     var innerFn = {};
//     innerFn.add = function () {
//         console.log(11111);
//     } 
//     my.name = privateName;
//     my.add = function () {
//         innerFn.add();
//     }
//     return my;
// }());
// blogModule.add();


// var myMod = (function (mod) {
//     var oldFn = mod.add;
//     mod.add = function () {
//         console.log(1);
//     }
// }(myMod));

// var cusModule = (function (mod) {
//     mod.init = function () {
// 
//     }
//     var _private = mod._private = mod._private || {}
//         _seal = mod._seal = mod._seal || function () {
//             delete mod._private;
//             delete mod._seal;
//             delete mod._unseal;
//         },
//         _unseal = mod._unseal = mod._unseal || function () {
//             mod._private = _private;
//             mod._seal = _seal;
//             mod._unseal = _unseal;
//         }
//         return mod;
// }(cusModule || {}));

(function () {
    console.log('aaa');
}());
setTimeout(function () {
    console.log('bbb');
}, 0);


