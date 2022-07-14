// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import Icon from './Icon';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年7月7日 18:24</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年7月7日 18:24</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年7月7日 18:24</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2022年7月7日 18:24</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundClor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alighnItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },

});
