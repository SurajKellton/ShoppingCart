import { observable } from "mobx";

class CartStore {
    @observable data = [];
    @observable cartArray = this.data;
    @observable productListArray = [] ;
}

export default new CartStore();