import React from 'react'
import { Menu, Image, Button, Icon } from 'semantic-ui-react'
import UserMenu from './UserMenu'

const Navbar = (props) => (

  <Menu inverted>
    <Menu.Item>
    <Image
      src="https://jerryjcchang.github.io/learntube_frontend/images/logo.png"
      size="tiny"
      id="logo"
    />
    </Menu.Item>

    {!props.name ?
      <Menu.Item position="right">
      <Button id="login-btn" color="black" href="https://github.com/login/oauth/authorize?client_id=8072f40fd7fb862b08a0&state=my_app&&scope=read:user">
        <Icon name="github" /> Login
      </Button>
      </Menu.Item>
    :
    <Menu.Item position="right">
    <UserMenu name={props.name} imgUrl={props.img_url} handleLogout={props.handleLogout} />
    </Menu.Item>
    }

  </Menu>
)

export default Navbar
