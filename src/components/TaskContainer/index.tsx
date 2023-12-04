import React, {ReactNode} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

interface TaskContainerProps {
  index: number;
  children: ReactNode;
}

export function TaskContainer({index, children}: TaskContainerProps) {
  if (index % 2 === 0)
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['rgba(196, 196, 196, 0.24)', 'rgba(196, 196, 196, 0)']}>
        {children}
      </LinearGradient>
    );

  return <View style={styles.container}>{children}</View>;
}
