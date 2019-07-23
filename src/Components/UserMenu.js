import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'

const UserMenu = (props) => {

  const { imgUrl, name } = props

  const trigger = (
    <span><Image avatar src={imgUrl} />
    {name}
    </span>
  )

  const options = [
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: props.handleLogout }
  ]

  return(
    <Dropdown
      trigger={trigger}
      options={options}
      pointing='top left'
      icon={null}
    />
  )
}

export default UserMenu
