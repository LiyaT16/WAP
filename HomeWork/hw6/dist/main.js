"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getUser(id, callback) {
    setTimeout(() => {
        const user = {
            id: id,
            name: "Smith"
        };
        callback(user);
    }, 2000);
}
getUser(1, (user) => {
    console.log("-------Callback Version-------");
    console.log(user);
});
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield getUser;
            console.log("-------Async/await Version-------");
            console.log(user);
        }
        catch (error) {
            console.log(error);
        }
    });
}
fetchUser();
