import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { Calendar } from 'react-native-calendars';

const HeatCycleCalendar = ({ onSelectDate }) => {
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
      {/* Wrap the Calendar component in a fixed-size View */}
      <View style={styles.calendarContainer}>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleDayPress} // Call the handleDayPress function when a day is pressed
          markingType="period"
          style={styles.calendar} // Apply styles to the Calendar component
          theme={{
            // Customize the calendar theme
            calendarBackground: '#DEEBE9', // Background color of the entire calendar component
            selectedDayBackgroundColor: '#5B8F86', // Background color of the selected date
            selectedDayTextColor: 'red', // Text color of the selected date
            todayTextColor: '#5B8F86', // Text color of today's date
            dayTextColor: '#333333', // Default text color of days
            textDisabledColor: '#d9e1e8', // Text color of disabled days
            dotColor: '#5B8F86', // Color of the dots indicating marked dates
            selectedDotColor: '#ffffff', // Color of selected dots
            arrowColor: '#5B8F86', // Color of the arrows for changing months
            monthTextColor: '#5B8F86', // Text color of the month text
          }}
          enableSwipeMonths={true}
        />
      </View>

        <View style={styles.textContainer}>
            <Text style={styles.textHeader}>Hey there! 🐾 Noticed any changes in your furry friend lately?</Text>

            <Text>Is her vulva looking a bit swollen?
            Seeing any unusual vaginal discharge? (It might start as red and then shift to pink or straw-colored.)
            Has her behavior been a bit off? Maybe she's a tad irritable or uncomfortable?
            If you answered yes to any of these, let's track it together! Just tap the date when you first spotted these signs on the calendar above</Text>
        </View>
        {/* <View style={styles.buttonContainer}>
                <Button 
                title="Mark" 
                onPress={() => setMarkedDates({})} 
                buttonStyle={styles.ButtonStyle} />
        </View> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10, // Apply border radius to the container
    backgroundColor: '#DEEBE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
//    marginTop: 30,
   marginBottom: 50,
  },
  calendar: {
    borderRadius: 10,
    width: 300, // Set a fixed width for the calendar container
    height: 300, // Set a fixed height for the calendar container
    padding: 40,
  },
  calendarContainer: {
    overflow: 'hidden', // Ensure overflow is hidden to properly clip border radius
  },
  ButtonStyle: {
    backgroundColor: '#5B8F86', // Change button background color
    borderColor: '#5B8F86', // Change button border color
    borderWidth: 1, // Add button border width
    borderRadius: 16, // Add button border radius
    height: 55, // Set button height
    width: 100,
  },
  textContainer:{
    marginTop: 50,
    marginBottom: 50,
    width: 250, // Set a fixed width for the calendar container
    height: 250
  },
  textHeader: {
    fontWeight: 'bold',
    paddingBottom: 15,
  }
});

export default HeatCycleCalendar;
