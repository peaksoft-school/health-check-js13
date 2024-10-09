import Button from '@mui/material/Button';
import Users from '../../../assets/icons/UserIcon.svg';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Box, styled } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import { logout } from '../../../store/slices/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function AuthDropdown() {
  const { isAuth } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => setOpen(prevOpen => !prevOpen);

  const handleClose = () => {
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const logoutFn = () => {
    dispatch(logout({ navigate }));
  };
  const toPersone = () => {
    navigate('profile/pesonalData');
  };

  const signInFn = () => {
    navigate('sign-in');
  };
  const signUpFn = () => {
    navigate('sign-up');
  };
  const MyEtries = () => {
    navigate('appointment');
  };

  return (
    <Stack direction="row" spacing={2}>
      <Box>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}>
          <Users />
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          style={{ zIndex: 2500 }}
          disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}>
                    {isAuth ? (
                      <div>
                        <ButtonMui onClick={toPersone}>Мой Профиль</ButtonMui>
                        {/* <ButtonMui onClick={MyEtries}>Мои записи</ButtonMui> */}
                        <ButtonMui onClick={logoutFn}>Выйти</ButtonMui>
                      </div>
                    ) : (
                      <div>
                        <ButtonMui onClick={signInFn}>Войти</ButtonMui>
                        <ButtonMui onClick={signUpFn}>Регистрация</ButtonMui>
                      </div>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </Stack>
  );
}

const ButtonMui = styled(MenuItem)(() => ({
  '&:hover': {
    color: '#048741',
  },
}));
