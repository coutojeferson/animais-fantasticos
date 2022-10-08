import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImg: {
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    padding: 24,
  },
  img: {
    width: 110,
    height: 32,
  },
  containerList: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    padding: 24,
  },
  viewInput: {
    bottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginRight: 5,
    padding: 16,
    height: 54,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#0D0D0D',
    color: '#F2F2F2',
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
  },
  iconAdd: {
    width: 16,
    height: 16,
  },
  viewCountTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    bottom: 16,
  },
  viewCreated: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  created: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE',
    marginRight: 10,
  },
  viewDone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  done: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284FA',
    marginRight: 10,
  },
  line: {
    height: 1,
    marginBottom: 24,
    backgroundColor: '#333333',
  },
  viewEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgEmpty: {
    width: 56,
    height: 56,
    marginBottom: 24,
  },
  firstTextEmpty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',
  },
  secondTextEmpty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
});
