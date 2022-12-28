import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        focusVisible: 'transparent',
      },
    },
    // dark: {
    //   palette: {
    //     focusVisible: 'transparent',
    //   }
  },
  components: {
    JoySlider: {
      styleOverrides: {
        track: {
          backgroundColor: 'orange',
        },
        thumb: {
          color: 'orange',
          borderColor: 'orange',
          '&:hover': {
            borderColor: 'yellow',
          },
        },
      },
    },
  },
});

export default theme;
