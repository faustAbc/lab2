export default theme => ({
  [theme.breakpoints.up('md')]: {
    img: {
      width: 200,
      margin: theme.spacing.unit * 6,
    }
  },
  [theme.breakpoints.down('sm')]: {
    img: {
      width: '90%',
    }
  },
  imgGrid: {
    height: '100%',
  },
  title: {
    textAlign: 'center',
  }
})