import React from 'react';
import PropTypes from 'prop-types';
import { Navbar as BPNavbar, NavbarGroup, Breadcrumbs, Breadcrumb, Alignment, Icon } from "@blueprintjs/core";
import './styles.css';

function Navbar({ items = [], ...restProps }) {
  return (
    <BPNavbar
      className="Navbar"
      {...restProps}
    >
      <NavbarGroup align={Alignment.LEFT}>
        <Breadcrumbs
          breadcrumbRenderer={({ text, icon, ...restProps }) => <Breadcrumb {...restProps}>{text} <Icon icon={icon}/></Breadcrumb>}
          items={items}
        />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Icon icon="user" />
        <div className="Username">Пользователь 1</div>
        <Icon icon="log-out" />
      </NavbarGroup>
    </BPNavbar>
  );
}

Navbar.propTypes = {
  items: PropTypes.instanceOf(Array),
};

Navbar.defaultProps = {
  items: [],
};

export default Navbar;