import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = ({ onSelectDate }) => {
  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={onSelectDate}
        markedDates={{
          '2022-03-15': { selected: true, marked: true, selectedColor: 'blue' },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%', // Adjust the width as needed
    alignSelf: 'center', // Center the calendar horizontally
    marginTop: 100,

  },
  calendar: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#F0F0F0',

  },
});

export default MyCalendar;
