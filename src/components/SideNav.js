import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'

export default class SideNav extends Component {
  state = { activeItem: 'trending' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <>

        <Menu secondary vertical>
          <Menu.Item
            name='My Upload'
            active={activeItem === 'trending'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='music'
            active={activeItem === 'music'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='video-games'
            active={activeItem === 'video-games'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='sports'
            active={activeItem === 'sports'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </>

    )
  }
}
