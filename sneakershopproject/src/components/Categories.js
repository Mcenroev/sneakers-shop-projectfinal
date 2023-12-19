import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'nike',
                    name: 'Найк'
                },
                {
                    key: 'new balance',
                    name: 'Нью Беланс'
                },
                {
                    key: 'adidas',
                    name: 'Адидас'
                },
                {
                    key: 'boots',
                    name: 'Ботинки'
                },
                {
                    key: 'puma',
                    name: 'Пума'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories