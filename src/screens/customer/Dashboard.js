import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { theme } from '../../styles/theme';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, John</Text>
            <Text style={styles.subtitle}>Welcome to HUEZO</Text>
          </View>
          <View style={styles.avatar}>
            <Ionicons name="person" size={24} color={theme.colors.primary} />
          </View>
        </View>

        <Card style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Total Orders</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>9</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </Card>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionRow}>
            <Card style={styles.actionCard} onPress={() => navigation.navigate('Create Order')}>
              <Ionicons name="add-circle" size={32} color={theme.colors.primary} />
              <Text style={styles.actionText}>New Order</Text>
            </Card>
            <Card style={styles.actionCard} onPress={() => navigation.navigate('Orders')}>
              <Ionicons name="list" size={32} color={theme.colors.primary} />
              <Text style={styles.actionText}>My Orders</Text>
            </Card>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Orders</Text>
            <Text style={styles.seeAll} onPress={() => navigation.navigate('Orders')}>See All</Text>
          </View>
          
          {[1, 2].map((item) => (
            <Card key={item} style={styles.orderCard} onPress={() => {}}>
              <View style={styles.orderInfo}>
                <Text style={styles.orderId}>Order #100{item}</Text>
                <Text style={styles.orderDate}>Oct {10 + item}, 2023</Text>
              </View>
              <View style={styles.orderStatusContainer}>
                <Text style={styles.orderStatus}>In Production</Text>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  greeting: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textLight,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    ...theme.typography.h2,
    color: theme.colors.primary,
  },
  statLabel: {
    ...theme.typography.caption,
    marginTop: theme.spacing.xs,
  },
  statDivider: {
    width: 1,
    backgroundColor: theme.colors.border,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
  },
  seeAll: {
    ...theme.typography.body,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  actionRow: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  actionCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
  },
  actionText: {
    ...theme.typography.body,
    fontWeight: '600',
    marginTop: theme.spacing.sm,
  },
  orderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  orderInfo: {
    flex: 1,
  },
  orderId: {
    ...theme.typography.body,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  orderDate: {
    ...theme.typography.caption,
  },
  orderStatusContainer: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: theme.borderRadius.round,
  },
  orderStatus: {
    color: '#2E7D32',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
