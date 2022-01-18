import { action, makeObservable, observable } from "mobx";
import { Component } from "react";
import Url from "../appConstants/ImageUrl";

class ProductListStore extends Component {
  constructor() {
    super();
    makeObservable(this)
    
  }
  data = [
    {
      id: 1,
      name: 'Pant',
      stock: 10,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.imageUrl.Pant
    },
    {
      id: 2,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.imageUrl.Shirt
    },
    {
      id: 3,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.imageUrl.Shoes
    },
    {
      id: 4,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 3000,
      description: 'size: 35, color: black',
      image: Url.imageUrl.Jacket
    },
    {
      id: 5,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.imageUrl.Sweater
    },
    {
      id: 6,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.imageUrl.Kurta
    },
    {
      id: 7,
      name: 'pajama',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.imageUrl.Pajama
    },
    {
      id: 8,
      name: 't-shirt',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: yellow',
      image: Url.imageUrl.tshirt
    },
    {
      id: 9,
      name: 'Cap',
      stock: 10,
      added: 0,
      price: 300,
      description: 'size: 10, color: white',
      image: Url.imageUrl.cap
    },
    {
      id: 10,
      name: 'Pant',
      stock: 11,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.imageUrl.Pant
    },
    {
      id: 11,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.imageUrl.Shirt
    },
    {
      id: 12,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.imageUrl.Shoes
    },
    {
      id: 13,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 3000,
      description: 'size: 35, color: black',
      image: Url.imageUrl.Jacket
    },
    {
      id: 14,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.imageUrl.Sweater
    },
    {
      id: 15,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.imageUrl.Kurta
    },
    {
      id: 16,
      name: 'pajama',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.imageUrl.Pajama
    },
    {
      id: 17,
      name: 't-shirt',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: yellow',
      image: Url.imageUrl.tshirt
    },
    {
      id: 18,
      name: 'Cap',
      stock: 10,
      added: 0,
      price: 300,
      description: 'size: 10, color: white',
      image: Url.imageUrl.cap
    },
    {
      id: 19,
      name: 'Pant',
      stock: 10,
      added: 0,
      price: 1000,
      description: 'size: 35, color: brown',
      image: Url.imageUrl.Pant
    },
    {
      id: 20,
      name: 'Shirt',
      stock: 5,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.imageUrl.Shirt
    },
    {
      id: 21,
      name: 'Shoes',
      stock: 20,
      added: 0,
      price: 1100,
      description: 'size: 8, color: white',
      image: Url.imageUrl.Shoes
    },
    {
      id: 22,
      name: 'Jacket',
      stock: 10,
      added: 0,
      price: 'Rs: 3000',
      description: 'size: 35, color: black',
      image: Url.imageUrl.Jacket
    },
    {
      id: 23,
      name: 'Sweater',
      stock: 5,
      added: 0,
      price: 900,
      description: 'size: 35, color: grey',
      image: Url.imageUrl.Sweater
    },
    {
      id: 24,
      name: 'Kurta',
      stock: 20,
      added: 0,
      price: 1000,
      description: 'size: 35, color: pink',
      image: Url.imageUrl.Kurta
    },
    {
      id: 25,
      name: 'pajama',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.imageUrl.Pajama
    },
    {
      id: 26,
      name: 't-shirt',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: yellow',
      image: Url.imageUrl.tshirt
    },
    {
      id: 27,
      name: 'Cap',
      stock: 10,
      added: 0,
      price: 300,
      description: 'size: 10, color: white',
      image: Url.imageUrl.cap
    },
    {
      id: 28,
      name: 'pajama',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: blue',
      image: Url.imageUrl.Pajama
    },
    {
      id: 29,
      name: 't-shirt',
      stock: 10,
      added: 0,
      price: 500,
      description: 'size: 35, color: yellow',
      image: Url.imageUrl.tshirt
    },
    {
      id: 30,
      name: 'Cap',
      stock: 111,
      added: 0,
      price: 300,
      description: 'size: 10, color: white',
      image: Url.imageUrl.cap
    },
  ]
  @observable data = this.data;
  @observable id = '';
  @observable count = 0;
  @observable tempArr = [];
  @observable page = 0;
  @observable product = [];
  @observable arrr = [];

  @action upDatingData = (value) => {
    this.data = value;
  };

  @action upDatingPage = (value) => {
    this.page = value;
  };

  @action upDatingProduct = (value) => {
    this.product = value;
  };

  @action upDatingArrr = (value) => {
    this.arrr = value
  };

  @action upDatingCount = (value) => {
    this.count = value
  }
}

export default new ProductListStore();