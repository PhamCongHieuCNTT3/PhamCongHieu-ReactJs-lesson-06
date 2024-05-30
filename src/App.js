import React, { Component } from 'react';
import PchProductlist from './component/PchProductlist';
import PchProductAddOrEdit from './component/PchProductAddOrEdit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: 'Pham Cong Hieu', id: 2210900101, status: 1 },
        { title: 'Cabbage', id: 1, status: 1 },
        { title: 'Garlic', id: 2, status: 0 },
        { title: 'Apple', id: 3, status: 0 },
        { title: 'Samsung', id: 4, status: 1 },
      ],
      product:"",
      flag:true
    }
  }

  PchHanldSubmit = (param) => {
    console.log("App:", param);
    //thêm vào bảng dữ liệu product
    let { products } = this.state;
    products.push(param);
    this.setState({
      products: products
    });
  }
  PchHandleEdit=(product)=>{
    console.log ("App-edit:",product);
    this.setState({
      product:product,
      flag:false
    })
  }
  render() {
    return (
      <div className='container'>
        <h1>Pham Cong Hieu -Event Form - Render Data</h1>
        <hr />
        <PchProductlist renderProducts={this.state.products}PchOnEit={this.PchHandleEdit} />
        <hr />
        <PchProductAddOrEdit onSubmit={this.PchHanldSubmit}
        renderProduct={this.state.product} renderFlag={this.state.flag}/>
      </div>
    );
  }
}

export default App;