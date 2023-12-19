import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  saveOrdersToLocalStorage = () => {
    localStorage.setItem('orders', JSON.stringify(this.state.orders));
  };

  loadOrdersFromLocalStorage = () => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      this.setState({ orders: JSON.parse(storedOrders) });
    }
  };
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Air Jordan 1',
          img: 'AJ1.jpg',
          desc: 'Air Jordan 1: Культовые кроссовки, икона стиля, выдающийся дизайн.',
          category: 'nike',
          price: '20000'
        },
        {
          id: 2,
          title: 'Cat',
          img: 'Cat.jpg',
          desc: 'CAT обувь: надежность, комфорт и стиль в каждом шаге.',
          category: 'boots',
          price: '30000'
        },
        {
          id: 3,
          title: 'New balance 574',
          img: 'NB.jpg',
          desc: 'New Balance 574: Элегантные, удобные кроссовки с характером.',
          category: 'new balance',
          price: '25000'
        },
        {
          id: 4,
          title: 'Adidas forum',
          img: 'adidas.jpg',
          desc: 'Adidas Forum: Ультрасовременные кроссовки, идеальное сочетание стиля и комфорта.',
          category: 'adidas',
          price: '15000'
        },
        {
          id: 5,
          title: 'Puma RM',
          img: 'Puma.jpg',
          desc: 'Puma RM: Современные кроссовки с дерзким дизайном и комфортом.',
          category: 'puma',
          price: '35000'
        },
        {
          id: 6,
          title: 'Air max',
          img: 'nike2.jpg',
          desc: 'Иконичные Nike Air Max 90: стиль, комфорт, инновации.',
          category: 'nike',
          price: '10000'
        },
        {
          id: 7,
          title: 'Martins',
          img: 'martins.jpg',
          desc: 'Dr. Martens: неповторимый стиль, прочность и авангард.',
          category: 'boots',
          price: '50000'
        },
        {
          id: 8,
          title: 'Nike Dunk',
          img: 'dunk.jpg',
          desc: 'Nike Dunk: ультрасовременный дизайн, легендарное качество, уверенность.',
          category: 'nike',
          price: '55000'
        },
        {
          id: 9,
          title: 'North Face ',
          img: 'north.jpg',
          desc: 'The North Face ботинки: надежная защита, стиль, приключения.',
          category: 'boots',
          price: '15000'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer/>
    </div>
  )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all' ) {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)}, () => {
      this.saveOrdersToLocalStorage();})
  }

  componentDidMount() {
    this.loadOrdersFromLocalStorage(); 
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] },() => {
        this.saveOrdersToLocalStorage();})
  }
}

export default App;
