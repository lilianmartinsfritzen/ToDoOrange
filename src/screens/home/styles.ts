import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#FF5A23',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tasks: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tasksCounter: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Regular',
  },
  tasksCounterBold: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Bold',
  },
});
