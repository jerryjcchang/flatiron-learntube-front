import React from 'react'
import { Menu, Image } from 'semantic-ui-react'

const Navbar = () => (
  <Menu inverted>
    <Menu.Item>
    <Image
      src="https://jerryjcchang.github.io/learntube_frontend/images/logo.png"
      size="tiny"
      id="logo"
    />
    </Menu.Item>
    <Menu.Item position="right" name="Welcome JC"/>
  </Menu>
)

export default Navbar
