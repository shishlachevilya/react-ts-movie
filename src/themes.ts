type Themes = {
  dark: {
    backgroundColor: string,
    color: string,
    notice: {
      backgroundColor: string,
      color: string
    }
  },
  light: {
    backgroundColor: string,
    color: string,
    notice: {
      backgroundColor: string,
      color: string
    }
  },
}

const themes: Themes = {
  dark: {
    backgroundColor: '#343a40',
    color: '#ffffff',
    notice: {
      color: '#343a40',
      backgroundColor: '#ffffff'
    }
  },
  light: {
    backgroundColor: '#ffffff',
    color: '#343a40',
    notice: {
      color: '#ffffff',
      backgroundColor: '#343a40'
    }
  },
};

export default themes;
