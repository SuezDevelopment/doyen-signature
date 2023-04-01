import React from 'react';
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Box } from "../../styles";
import {useTheme as useNextTheme} from 'next-themes';
import {Switch, useTheme} from '@nextui-org/react';

interface Props {
    [x: string]: any
}
export const NavbarWrapper = (prop: Props) => {
    const collapseItems = [
        {
            name: "Home",
            href: "/",
            icon: "home",
            active: true
        },
        {
            name: "Shop",
            href: "/shop",
            icon: "shopping-bag",
            active: false
        },
        {
            name: "Fashion Trends",
            href: "/fashion-trends",
            icon: "fashion-trends",
            active: false
        }
    ];
    return (
        <Box>
            <Navbar isBordered variant="sticky">
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                          w: "12%",
                        },
                    }}
                >
                    <Link href="/">
                        <a>
                            <Avatar src="/doyen-signature.jpg" />
                        </a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="secondary"
                    hideIn="xs"
                    variant="highlight-rounded"
                >

                </Navbar.Content>
                
                <Navbar.Collapse>
                    
                </Navbar.Collapse>
            </Navbar>
            {prop.children}
        </Box>
    );
}