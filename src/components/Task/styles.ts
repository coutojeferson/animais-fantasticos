import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingHorizontal: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
    backgroundColor: '#262626',
  },
  viewCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  done: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  textTask: {
    width: 235,
    fontSize: 14,
    lineHeight: 20,
    color: '#F2F2F2',
  },
  textDoneTask: {
    width: 235,
    fontSize: 14,
    lineHeight: 20,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  trash: {
    width: 16,
    height: 16,
  },
});
