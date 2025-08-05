import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Popover, Box } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import DashboardCustomizeIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import ArticleIcon from '@mui/icons-material/Article';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ExpandMore from '@mui/icons-material/ExpandMore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [anchorEl, setAnchorEl] = useState(null);
    const [activeItem, setActiveItem] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('Team 1');

    useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path === '/') setActiveItem('Dashboard');
    else if (path.startsWith('/user')) setActiveItem('User');
    else if (path.startsWith('/product')) setActiveItem('Product');
    else if (path.startsWith('/blog')) setActiveItem('Blog');
    else if (!['/', '/user', '/product'].includes(path)) setActiveItem('NotFound');
    else setActiveItem('');
}, [location.pathname]);


    const navItems = [
        { id: 'Dashboard', label: 'Dashboard', icon: DashboardCustomizeIcon,Path:"/" },
        { id: 'User', label: 'User', icon: PersonIcon,Path:"/user" },
        { id: 'Product', label: 'Product', icon: ShoppingCartIcon,Path:"/product" },
        { id: 'Blog', label: 'Blog', icon: ArticleIcon,Path:"/blog" },
        { id: 'Signin', label: 'Signin', icon: LockIcon },
        { id: 'NotFound', label: 'Not Found', icon: NotInterestedIcon,Path:"/*" },
    ];

    const teamItems = [
        { id: 'Team1', label: 'Team 1', icon: EmojiEventsIcon, type: 'free' },
        { id: 'Team2', label: 'Team 2', icon: WorkspacePremiumIcon, type: 'pro' },
        { id: 'Team3', label: 'Team 3', icon: WorkspacePremiumIcon, type: 'pro' },
    ];

    const handleTeamClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const handleTeamSelect = (teamId) => {
        const team = teamItems.find(t => t.id === teamId);
        if (team) {
            setSelectedTeam(team.label);
            setActiveItem(teamId);
        }
        handlePopoverClose();
    };

    const handleNavClick = (item) => {
        setActiveItem(item);
        if (item.id === 'Signin') {
            navigate('/');
        } else {
            navigate(item.Path);
        }
    };

    const open = Boolean(anchorEl);

    const getHoverStyles = (isSelected) => ({
        '&:hover': {
            backgroundColor: '#e3f2fd',
            borderRadius: '8px',
            margin: '2px 8px',
            '& .MuiListItemIcon-root': {
                color: '#1976d2',
            },
            '& .MuiListItemText-primary': {
                color: '#1976d2',
            },
        },
        ...(isSelected && {
            backgroundColor: '#e3f2fd',
            borderRadius: '8px',
            margin: '2px 8px',
            '& .MuiListItemIcon-root': {
                color: '#1976d2',
            },
            '& .MuiListItemText-primary': {
                color: '#1976d2',
            },
        }),
        borderRadius: '8px',
        margin: '2px 8px',
        gap: '8px',
        padding: '8px',
    });

    const getTeamSelectorStyles = () => ({
        '&:hover': {
            backgroundColor: '#e3f2fd',
            borderRadius: '8px',
            margin: '2px 8px',
            '& .MuiListItemIcon-root': {
                color: '#1976d2',
            },
            '& .MuiListItemText-primary': {
                color: '#1976d2',
            },
        },
        borderRadius: '8px',
        margin: '2px 8px',
        gap: '8px',
        padding: '8px',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        backgroundColor: '#f8f9fa',
    });

    const renderLabel = (type) => (
        <Box
            component="span"
            sx={{
                ml: 1,
                px: 1,
                py: 0.2,
                borderRadius: '6px',
                fontSize: '10px',
                fontWeight: 'bold',
                color: type === 'free' ? '#637381' : '#006C9C',
                backgroundColor: type === 'free' ? '#919EAB29' : '#00B8D929',
            }}
        >
            {type.toUpperCase()}
        </Box>
    );

    const getSelectedTeamData = () => {
        return teamItems.find(team => team.label === selectedTeam) || teamItems[0];
    };

    const selectedTeamData = getSelectedTeamData();

    const LogoSvg = () => (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                pt: 3,
                px: 2,
                backgroundColor: '#ffffff',
                marginBottom: 1,
            }}
        >
            <svg
                width="48"
                height="48"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    filter: 'drop-shadow(0px 2px 4px rgba(25, 118, 210, 0.1))'
                }}
            >
                <defs>
                    <linearGradient id="logo-gradient-1" x1="152" y1="167.79" x2="65.523" y2="259.624" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1976d2" />
                        <stop offset="1" stopColor="#1565c0" />
                    </linearGradient>
                    <linearGradient id="logo-gradient-2" x1="86" y1="128" x2="86" y2="384" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#42a5f5" />
                        <stop offset="1" stopColor="#1976d2" />
                    </linearGradient>
                    <linearGradient id="logo-gradient-3" x1="402" y1="288" x2="402" y2="384" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#42a5f5" />
                        <stop offset="1" stopColor="#1976d2" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#logo-gradient-1)"
                    d="M86.352 246.358C137.511 214.183 161.836 245.017 183.168 285.573C165.515 317.716 153.837 337.331 148.132 344.418C137.373 357.788 125.636 367.911 111.202 373.752C80.856 388.014 43.132 388.681 14 371.048L86.352 246.358Z"
                />
                <path
                    fill="url(#logo-gradient-2)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M444.31 229.726C398.04 148.77 350.21 72.498 295.267 184.382C287.751 198.766 282.272 226.719 270 226.719V226.577C257.728 226.577 252.251 198.624 244.735 184.24C189.79 72.356 141.96 148.628 95.689 229.584C92.207 235.69 88.862 241.516 86 246.58C192.038 179.453 183.11 382.247 270 383.858V384C356.891 382.389 347.962 179.595 454 246.72C451.139 241.658 447.794 235.832 444.31 229.726Z"
                />
                <path
                    fill="url(#logo-gradient-3)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M450 384C476.509 384 498 362.509 498 336C498 309.491 476.509 288 450 288C423.491 288 402 309.491 402 336C402 362.509 423.491 384 450 384Z"
                />
            </svg>
        </Box>
    );

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: 240,
                    boxSizing: 'border-box',
                    backgroundColor: '#f8f9fa',
                    borderRight: '1px solid #eee',
                },
            }}
        >
            <LogoSvg />

            <List sx={{ pt: 0 }}>
                <ListItemButton
                    onClick={handleTeamClick}
                    sx={getTeamSelectorStyles()}
                >
                    <ListItemIcon>
                        <selectedTeamData.icon />
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <Box display="flex" alignItems="center">
                                {selectedTeamData.label} {renderLabel(selectedTeamData.type)}
                            </Box>
                        }
                        primaryTypographyProps={{ fontWeight: 400 }}
                    />
                    <ExpandMore />
                </ListItemButton>

                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    sx={{
                        '& .MuiPopover-paper': {
                            width: 200,
                            borderRadius: '12px',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            mt: 1,
                        }
                    }}
                >
                    <List sx={{ py: 1 }}>
                        {teamItems.map((team) => {
                            const IconComponent = team.icon;
                            const isSelected = selectedTeam === team.label;
                            return (
                                <ListItemButton
                                    key={team.id}
                                    onClick={() => handleTeamSelect(team.id)}
                                    sx={{
                                        mx: 1,
                                        borderRadius: '8px',
                                        ...(isSelected && {
                                            backgroundColor: '#e3f2fd',
                                            '& .MuiListItemIcon-root': {
                                                color: '#1976d2',
                                            },
                                            '& .MuiListItemText-primary': {
                                                color: '#1976d2',
                                            },
                                        }),
                                        '&:hover': {
                                            backgroundColor: isSelected ? '#e3f2fd' : '#f5f5f5',
                                            borderRadius: '8px',
                                        },
                                    }}
                                >
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <IconComponent fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Box display="flex" alignItems="center">
                                                {team.label} {renderLabel(team.type)}
                                            </Box>
                                        }
                                        primaryTypographyProps={{ 
                                            fontWeight: isSelected ? 600 : 400,
                                            fontSize: '14px'
                                        }}
                                    />
                                </ListItemButton>
                            );
                        })}
                    </List>
                </Popover>

                <div style={{ height: '20px' }}></div>

                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <ListItemButton
                            key={item.id}
                            selected={activeItem === item.id}
                            onClick={() => handleNavClick(item)}
                            sx={getHoverStyles(activeItem === item.id)}
                        >
                            <ListItemIcon>
                                <IconComponent />
                            </ListItemIcon>
                            <ListItemText
                                primaryTypographyProps={{ fontWeight: activeItem === item.id ? 600 : 400 }}
                                primary={item.label}
                            />
                        </ListItemButton>
                    );
                })}
            </List>
        </Drawer>
    );
};

export default Sidebar;