import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { theme } from '../../styles/theme';
import { Ionicons } from '@expo/vector-icons';

const dummyNotifications = [
  { id: '1', title: 'New Order Received', message: 'Brand Co. submitted a new Private Label order.', time: '10m ago', read: false },
  { id: '2', title: 'Customer Message', message: 'StyleX replied to your comment regarding the GSM requirements.', time: '1h ago', read: false },
  { id: '3', title: 'System Alert', message: 'Fabric inventory for 100% Cotton 200GSM is low.', time: '1d ago', read: true },
];

export default function Notifications() {
  const renderItem = ({ item }) => (
    <View style={[styles.card, !item.read && styles.unreadCard]}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.title.includes('System') ? 'warning' : 'notifications'} size={24} color={item.title.includes('System') ? '#E65100' : theme.colors.primary} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, !item.read && styles.unreadText]}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyNotifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  list: {
    padding: theme.spacing.md,
  },
  card: {
    flexDirection: 'row',
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  unreadCard: {
    backgroundColor: '#FAF0F0',
    borderColor: '#E6C8C8',
  },
  iconContainer: {
    marginRight: theme.spacing.md,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    ...theme.typography.body,
    fontWeight: '600',
    color: theme.colors.text,
  },
  unreadText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  time: {
    ...theme.typography.caption,
  },
  message: {
    ...theme.typography.caption,
    color: theme.colors.textLight,
    lineHeight: 20,
  },
});
