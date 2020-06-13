import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAuth} from '../../contexts/auth';
import styles from './styles';

const Dashboard: React.FC = () => {
  const {user, signOut} = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text>Bem vindo {user?.name}!</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
