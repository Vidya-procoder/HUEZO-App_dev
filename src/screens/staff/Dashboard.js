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
            <Text style={styles.greeting}>Staff Portal</Text>
            <Text style={styles.subtitle}>Welcome back, Manager</Text>
          </View>
          <View style={[styles.avatar, { backgroundColor: '#2E7D32' }]}>
            <Ionicons name="briefcase" size={24} color={theme.colors.background} />
          </View>
        </View>

        <Card style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statLabel}>Active Orders</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: '#E65100' }]}>8</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: '#2E7D32' }]}>12</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </Card>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.overviewGrid}>
            <Card style={styles.overviewCard}>
              <Ionicons name="people" size={28} color={theme.colors.primary} />
              <Text style={styles.overviewValue}>124</Text>
              <Text style={styles.overviewLabel}>Total Customers</Text>
            </Card>
            <Card style={styles.overviewCard}>
              <Ionicons name="cash" size={28} color="#2E7D32" />
              <Text style={styles.overviewValue}>$12.5k</Text>
              <Text style={styles.overviewLabel}>Revenue (Oct)</Text>
            </Card>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Needs Attention</Text>
            <Text style={styles.seeAll} onPress={() => navigation.navigate('Orders')}>View All</Text>
          </View>
          
          {[1, 2].map((item) => (
            <Card key={item} style={styles.orderCard} onPress={() => {}}>
              <View style={styles.orderHeader}>
                <Text style={styles.orderId}>Order #200{item}</Text>
                <View style={styles.urgentBadge}>
                  <Text style={styles.urgentText}>Pending Fabric</Text>
                </View>
              </View>
              <Text style={styles.customerName}>Customer: Brand Co.</Text>
              <Text style={styles.orderDate}>Updated: 2h ago</Text>
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
  overviewGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  overviewCard: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  overviewValue: {
    ...theme.typography.h2,
    marginTop: theme.spacing.sm,
    color: theme.colors.text,
  },
  overviewLabel: {
    ...theme.typography.caption,
  },
  orderCard: {
    marginBottom: theme.spacing.sm,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  orderId: {
    ...theme.typography.body,
    fontWeight: 'bold',
  },
  urgentBadge: {
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  urgentText: {
    color: '#E65100',
    fontSize: 10,
    fontWeight: 'bold',
  },
  customerName: {
    ...theme.typography.body,
    marginBottom: 4,
  },
  orderDate: {
    ...theme.typography.caption,
  },
});
