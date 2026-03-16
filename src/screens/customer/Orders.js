import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { theme } from '../../styles/theme';
import Card from '../../components/Card';

const dummyOrders = [
  { id: '1001', date: 'Oct 15, 2023', status: 'In Production', total: '$1,250', items: 50 },
  { id: '1002', date: 'Oct 10, 2023', status: 'Pending Fabric', total: '$850', items: 30 },
  { id: '1003', date: 'Sep 28, 2023', status: 'Delivered', total: '$2,400', items: 100 },
  { id: '1004', date: 'Sep 15, 2023', status: 'Delivered', total: '$600', items: 25 },
];

export default function Orders() {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Production': return { bg: '#E3F2FD', text: '#1565C0' };
      case 'Pending Fabric': return { bg: '#FFF3E0', text: '#E65100' };
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
        
        <View style={styles.details}>
          <View style={styles.detailCol}>
            <Text style={styles.detailLabel}>Date</Text>
            <Text style={styles.detailValue}>{item.date}</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.detailLabel}>Items</Text>
            <Text style={styles.detailValue}>{item.items} pcs</Text>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.detailLabel}>Total</Text>
            <Text style={styles.detailValue}>{item.total}</Text>
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
    marginBottom: theme.spacing.md,
  },
  orderId: {
    ...theme.typography.h3,
    color: theme.colors.text,
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
