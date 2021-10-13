import React from "react";
import { Link } from "gatsby";
import { Menu, Icon } from "semantic-ui-react";

const Nav = () => {
  return (
    <React.Fragment>
      <Menu>
        <Menu.Item>
          <Link to="/">
            <Icon color="black" name="home"></Icon>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/games">
            <Icon color="black" name="gamepad"></Icon>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/contact">
            <Icon color="black" name="users"></Icon>
          </Link>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default Nav;
