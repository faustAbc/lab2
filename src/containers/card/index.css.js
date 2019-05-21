export default theme => ({
  [theme.breakpoints.down('sm')]: {
    card: {
      width: '90vw',
    },
  },
  [theme.breakpoints.up('md')]: {
    card: {
      maxWidth: 500,
      minWidth: "30vw",
    },
  },
  media: {
    width: '50%',
    margin: theme.spacing.unit * 5,
  },
});