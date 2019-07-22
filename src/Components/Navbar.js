import React from 'react'
import { Menu, Image, Button } from 'semantic-ui-react'

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
      <Button color="yellow" href="https://github.com/login/oauth/authorize?client_id=8072f40fd7fb862b08a0&state=my_app&&scope=read:user">
        Login
      </Button>
      </Menu.Item>
    :
    <Menu.Item position="right">
    <Image id="avatar" size="mini" circular src={props.img_url}/>
    {props.name}
    </Menu.Item>
    }

  </Menu>
)

export default Navbar
