/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from 'react';
import { useHistory } from 'react-router';
import LoginIcon from '@mui/icons-material/Login';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import './styles.scss';

let items = [
    {
        label: 'login',
        children: [],
        path: '/login',
        icon: '',
        mobileBottom: true,
    },
    {
        label: 'login',
        children: [],
        path: '/login',
        icon: '',
        mobileBottom: true,
    },
    {
        label: 'login',
        children: [],
        path: '/login',
        icon: '',
        mobileBottom: true,
    }
];

const initialState = {xInitial: 0, yInitial: 0, xFinal: 0, yFinal: 0, end: false};

const BottomNavigation = () => {
    const [isOpen, setIsOpen] = useState();
    const [touch, setTouch] = useState(initialState);
    const history = useHistory();

    useEffect(() => {
        eventListerner();
        return () => {
            removeEventListerner();
        }
    }, [])

    useEffect(() => {
        if (touch.end) {
            let diffY =  touch.yFinal - touch.yInitial;
            if (diffY <= -100 && !isOpen) {
                setIsOpen(true);
            } else if (diffY >=80 && isOpen) {
                setIsOpen(false);
            }
            setTouch(initialState);
        }
    }, [touch, isOpen])

    const onTouchStart = useCallback((e) => {
        const coords = e.changedTouches[0];
        setTouch(state => ({...state, xInitial: coords.pageX, yInitial: coords.pageY, end: false}));
    }, [setTouch]);

    const onTouchEnd = useCallback((e) => {
        const coords = e.changedTouches[0];
        setTouch(state => ({...state, xFinal: coords.pageX, yFinal: coords.pageY, end: true}));
    }, [setTouch]);
    

    const eventListerner = () => {
        const el = document.getElementsByClassName('bottom-navigation-container')['0']
        el.addEventListener('touchstart', onTouchStart, false);
        el.addEventListener('touchend', onTouchEnd, false)
    }
    
    const removeEventListerner = () => {
        const el = document.getElementsByClassName('bottom-navigation-container')['0']
        el.removeEventListener('touchstart', onTouchStart);
        el.removeEventListener('touchend', onTouchEnd);
    }

    const redirect = (path) => {
        history.push(path);
        isOpen && setIsOpen(false);
    };

    const renderItems = () => {
        return [
            (<div className='arrow-down' key='-1' >
                <div onClick={onClick} className='bottom-navigation-item'>
                    <ArrowCircleDownIcon/>
                </div>
            </div>),
            ...items.map((e, index) => {
                return (
                    <div className='bottom-navigation-item' key={index} onClick={() => redirect(e.path)} >
                        <span>{e.label}</span>
                        <LoginIcon/>
                    </div>
                )
            })
        ]
    }

    const onClick = () => {
        setIsOpen(state => !state);
    }
    return (
        <div className={`bottom-navigation-container ${isOpen ? 'open' : 'close'}`} >
            { isOpen ? renderItems() : (
                <div onClick={onClick} className='bottom-navigation-item'>
                    <ArrowCircleUpIcon/>
                </div>
            )}
        </div>
    )
};

export default BottomNavigation;