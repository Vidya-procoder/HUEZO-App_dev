import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { theme } from '../../styles/theme';
import Card from '../../components/Card';

const dummyOrders = [
  { id: '2001', customer: 'Brand Co.', date: 'Oct 15, 2023', status: 'In Production', items: 500, assigned: 'Mike T.' },
  { id: '2002', customer: 'StyleX', date: 'Oct 10, 2023', status: 'Pending Fabric', items: 150, assigned: 'Sarah L.' },
  { id: '2003', customer: 'John Doe', date: 'Sep 28, 2023', status: 'Review', items: 50, assigned: 'Unassigned' },
  { id: '2004', customer: 'Apex Apparel', date: 'Sep 15, 2023', status: 'Delivered', items: 2000, assigned: 'Mike T.' },
];

export default function Orders() {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Production': return { bg: '#E3F2FD', text: '#1565C0' };
      case 'Pending Fabric': return { bg: '#FFF3E0', text: '#E65100' };
      case 'Review': return { bg: '#F3E5F5', text: '#8E24AA' };
      case 'Delivered': return { bg: '#E8F5E9', text: '#2E7D32' };
      default: return { bg: '#F5F5F5', text: '#757575' };
    }
  };

  const renderItem = ({ item }) => {
    const statusColors = getStatusColor(item.status);

    return (
      <Card style={styles.card} onPress={() => {}}>
        <View style={styles.header}>
          <Text style={styles.orderId}>Order #{item.id}</Text>
          <View style={[styles.statusBadge, { backgroundColor: statusColors.bg }]}>
            <Text style={[styles.statusText, { color: statusColors.text }]}>{item.status}</Text>
          </View>
        </View>
        
        <Text style={styles.customerName}>{item.customer}</Text>
        
        <View style={styles.details}>
          <View style={styles.detailCol}>
            <Text style={styles.detailLabel}>Assigned</Text>
            <Text style={styles.detailValue}>{item.assigned}</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.detailLabel}>Items</Text>
            <Text style={styles.detailValue}>{item.items}</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.detailLabel}>Date Added</Text>
            <Text style={styles.detailValue}>{item.date}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyOrders}
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
    marginBottom: theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  orderId: {
    ...theme.typography.h3,
    color: theme.colors.text,
  },
  customerName: {
    ...theme.typography.body,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.round,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: theme.spacing.md,
  },
  detailCol: {
    alignItems: 'flex-start',
  },
  detailLabel: {
    ...theme.typography.caption,
    marginBottom: 4,
  },
  detailValue: {
    ...theme.typography.body,
    fontWeight: '600',
  },
});
