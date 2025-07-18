import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const flags = [
    { name: "USA", src: "https://flagcdn.com/us.svg" },
    { name: "UK", src: "https://flagcdn.com/gb.svg" },
    { name: "France", src: "https://flagcdn.com/fr.svg" },
    { name: "Germany", src: "https://flagcdn.com/de.svg" },
    { name: "Japan", src: "https://flagcdn.com/jp.svg" },
];

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleFlagClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="bg-white p-2 text-black flex justify-between items-center shadow h-16 fixed top-0 left-0 w-full z-50">
            <h1 className="text-xl font-bold ml-4">E-Commerce Site</h1>
            <div className="flex items-center gap-2 mr-4">
                {!showSearch && (
                    <IconButton
                        color=""
                        sx={{ mr: 2 }}
                        onClick={() => setShowSearch(true)}
                    >
                        <SearchIcon />
                    </IconButton>
                )}
                {showSearch && (
                    <TextField
                        variant="outlined"
                        placeholder="Search..."
                        size="small"
                        autoFocus
                        onBlur={() => setShowSearch(false)}
                    />
                )}
                <div>
                    <img
                        src={flags[0].src}
                        alt={flags[0].name}
                        title={flags[0].name}
                        className="h-6 w-8 object-cover rounded shadow cursor-pointer"
                        onClick={handleFlagClick}
                    />
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        transformOrigin={{ vertical: "top", horizontal: "right" }}
                    >
                        {flags.map(flag => (
                            <MenuItem key={flag.name} onClick={handleMenuClose}>
                                <img
                                    src={flag.src}
                                    alt={flag.name}
                                    style={{ width: 32, height: 20, marginRight: 8, borderRadius: 4 }}
                                />
                                {flag.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <IconButton color="light-grey" sx={{ mr: 2 }}>
                    <NotificationsIcon />
                </IconButton>
            </div>
        </nav>
    );
};

export default Navbar;
