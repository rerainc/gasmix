import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F66463',
    flex: 1
  },
  section: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24
  },
  split: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    flexGrow: 1
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    color: '#999'
  },
  input: {
    paddingTop: 18,
    paddingBottom: 6,
    borderBottomColor: '#999',
    flexDirection: 'row'
  },
  text: {
    fontSize: 72,
    fontWeight: '300',
    flexGrow: 1
  },
  iconContainer: {
    justifyContent: 'center',
    marginRight: 18
  },
  icon: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  },
  button: {
    marginTop: 4
  },
  secondary: {
    fontSize: 18,
    paddingBottom: 6,
    paddingTop: 6,
    color: 'white',
    borderBottomColor: 'white'
  }
})