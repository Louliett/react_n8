import React from "react";
import { useHistory } from 'react-router-dom'
import { logout } from '../../services/auth.service';
import { Header } from './Header';

export function HeaderContainer() {

    const history = useHistory();
    const navItems = [
        {
            name: 'Home',
            url: '/admin/home'
        },
        {
            name: 'Products',
            url: '/admin/products'
        },
        {
            name: 'Create Product',
            url: '/admin/create-product'
        },
        {
            name: 'Classifications',
            url: '/admin/classifications'
        },        {
            name: 'Create Classifications',
            url: '/admin/create-classification'
        },        
        {
            name: 'Users',
            url: '/admin/users'
        },
        {
            name: 'Pages',
            url: '/admin/pages'
        }
    ];

    function handleLogout() {
        logout();
        history.push("/admin");
    }

    return (
        <Header onClick={handleLogout} navItems={navItems} />
    );

}