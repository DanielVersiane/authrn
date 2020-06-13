import React from 'react';
import {Button, View} from 'react-native';
import {useAuth} from '../../contexts/auth';
import styles from './styles';

const SignIn: React.FC = () => {
  const {signIn} = useAuth();

  const handleSignIn = () => {
    signIn();
  };

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
