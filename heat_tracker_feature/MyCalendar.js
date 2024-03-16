import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = ({ onSelectDate }) => {
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = async (day) => {
    const updatedMarkedDates = { ...markedDates, [day.dateString]: { selected: true, marked: true, selectedColor: 'red' } };
    setMarkedDates(updatedMarkedDates);
    setSelectedDate(day.dateString); // Update selected date state
    await onSelectDate(day.dateString); // Call parent function to handle selected date
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={handleDayPress} // Pass handleDayPress function
        markedDates={markedDates} // Pass all marked dates
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
