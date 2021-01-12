import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import TimeTableView, { genTimeBlock } from 'react-native-timetable';
import ItemDetail from './ItemDetail';
import Location from './Location';

const events_data = [
  {
    title: "Check in",
    startTime: genTimeBlock("THU", 9),
    endTime: genTimeBlock("THU", 10, 0),
    location: "W Hotel",
    extra_descriptions: ["QR 2600"],
    bla : {
        title: 'QATAR NATIONAL LIBRARY',
        desc:'Qatar National Library is a non-profit organization under the umbrella of the Qatar Foundation for Education, Science and Community Development.',
        location: ['Education City'],
        hours: '8 AM - 8 PM',
        phone: '+974 44749365',
        illustration: [
          'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7',
          'https://qatartoday.online/wp-content/uploads/2017/11/QNL.jpg',
          'https://www.marhaba.qa/wp-content/uploads/2017/11/Qatar-National-Library-QNL.jpg'],
    },
  },
  {
    title: "Brunch",
    startTime: genTimeBlock("THU", 10, 30),
    endTime: genTimeBlock("THU", 13),
    location: "Market by John Georges",
    extra_descriptions: ["QR 400"],
    bla : {
        title: 'QATAR NATIONAL LIBRARY',
        desc:'Qatar National Library is a non-profit organization under the umbrella of the Qatar Foundation for Education, Science and Community Development.',
        location: ['Education City'],
        hours: '8 AM - 8 PM',
        phone: '+974 44749365',
        illustration: [
          'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7',
          'https://qatartoday.online/wp-content/uploads/2017/11/QNL.jpg',
          'https://www.marhaba.qa/wp-content/uploads/2017/11/Qatar-National-Library-QNL.jpg'],
    },
  },
  {
    title: "Qatar National Museum",
    startTime: genTimeBlock("THU", 13, 30),
    endTime: genTimeBlock("THU", 16, 30),
    location: "Doha",
    extra_descriptions: ["Free"],
    bla : {
        title: 'QATAR NATIONAL LIBRARY',
        desc:'Qatar National Library is a non-profit organization under the umbrella of the Qatar Foundation for Education, Science and Community Development.',
        location: ['Education City'],
        hours: '8 AM - 8 PM',
        phone: '+974 44749365',
        illustration: [
          'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7',
          'https://qatartoday.online/wp-content/uploads/2017/11/QNL.jpg',
          'https://www.marhaba.qa/wp-content/uploads/2017/11/Qatar-National-Library-QNL.jpg'],
    },
  },
  {
    title: "Souq Waqif",
    startTime: genTimeBlock("THU", 17),
    endTime: genTimeBlock("THU", 19, 30),
    location: "Corniche",
    extra_descriptions: ["Free"],
    bla : {
        title: 'QATAR NATIONAL LIBRARY',
        desc:'Qatar National Library is a non-profit organization under the umbrella of the Qatar Foundation for Education, Science and Community Development.',
        location: ['Education City'],
        hours: '8 AM - 8 PM',
        phone: '+974 44749365',
        illustration: [
          'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7',
          'https://qatartoday.online/wp-content/uploads/2017/11/QNL.jpg',
          'https://www.marhaba.qa/wp-content/uploads/2017/11/Qatar-National-Library-QNL.jpg'],
    },
  },
  {
    title: "Dinner",
    startTime: genTimeBlock("THU", 20),
    endTime: genTimeBlock("TUE", 22),
    location: "The Village Souq Waqif",
    extra_descriptions: ["QR 250"],
    bla : {
        title: 'QATAR NATIONAL LIBRARY',
        desc:'Qatar National Library is a non-profit organization under the umbrella of the Qatar Foundation for Education, Science and Community Development.',
        location: ['Education City'],
        hours: '8 AM - 8 PM',
        phone: '+974 44749365',
        illustration: [
          'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7',
          'https://qatartoday.online/wp-content/uploads/2017/11/QNL.jpg',
          'https://www.marhaba.qa/wp-content/uploads/2017/11/Qatar-National-Library-QNL.jpg'],
    },
  },
  {
    title: "Breakfast",
    startTime: genTimeBlock("FRI", 9),
    endTime: genTimeBlock("FRI", 10, 30),
    location: "Chef's Garden",
    extra_descriptions: ["QR 200"],
    bla : {
        title: 'QATAR NATIONAL LIBRARY',
        desc:'Qatar National Library is a non-profit organization under the umbrella of the Qatar Foundation for Education, Science and Community Development.',
        location: ['Education City'],
        hours: '8 AM - 8 PM',
        phone: '+974 44749365',
        illustration: [
          'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7',
          'https://qatartoday.online/wp-content/uploads/2017/11/QNL.jpg',
          'https://www.marhaba.qa/wp-content/uploads/2017/11/Qatar-National-Library-QNL.jpg'],
    },
  },
  {
    title: "Qatar National Library",
    startTime: genTimeBlock("FRI", 11),
    endTime: genTimeBlock("FRI", 13),
    location: "Education City",
    extra_descriptions: ['Free'],
    bla : {
        title: 'QATAR NATIONAL LIBRARY',
        desc:'Qatar National Library is a non-profit organization under the umbrella of the Qatar Foundation for Education, Science and Community Development.',
        location: ['Education City'],
        hours: '8 AM - 8 PM',
        phone: '+974 44749365',
        illustration: [
          'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7',
          'https://qatartoday.online/wp-content/uploads/2017/11/QNL.jpg',
          'https://www.marhaba.qa/wp-content/uploads/2017/11/Qatar-National-Library-QNL.jpg'],
    },
  },
  {
    title: "Lunch",
    startTime: genTimeBlock("FRI", 13, 30),
    endTime: genTimeBlock("FRI", 15),
    location: "Zouq",
    extra_descriptions: ['QR 125'],
    bla : {
        title: 'QATAR NATIONAL LIBRARY',
        desc:'Qatar National Library is a non-profit organization under the umbrella of the Qatar Foundation for Education, Science and Community Development.',
        location: ['Education City'],
        hours: '8 AM - 8 PM',
        phone: '+974 44749365',
        illustration: [
          'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7',
          'https://qatartoday.online/wp-content/uploads/2017/11/QNL.jpg',
          'https://www.marhaba.qa/wp-content/uploads/2017/11/Qatar-National-Library-QNL.jpg'],
    },
  },
  {
    title: "Beach",
    startTime: genTimeBlock("FRI", 15, 30),
    endTime: genTimeBlock("FRI", 18),
    location: "Sealine Beach Resort",
    extra_descriptions: ['QR 40 for transportation using Metro'],
    bla : {
        title: 'QATAR NATIONAL LIBRARY',
        desc:'Qatar National Library is a non-profit organization under the umbrella of the Qatar Foundation for Education, Science and Community Development.',
        location: ['Education City'],
        hours: '8 AM - 8 PM',
        phone: '+974 44749365',
        illustration: [
          'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7',
          'https://qatartoday.online/wp-content/uploads/2017/11/QNL.jpg',
          'https://www.marhaba.qa/wp-content/uploads/2017/11/Qatar-National-Library-QNL.jpg'],
    },
  },
  {
    title: "Shopping",
    startTime: genTimeBlock("FRI", 18, 30),
    endTime: genTimeBlock("FRI", 20, 30),
    location: "Mall of Qatar",
    extra_descriptions: ['Free + Shopping'],
    bla : {
        title: 'QATAR NATIONAL LIBRARY',
        desc:'Qatar National Library is a non-profit organization under the umbrella of the Qatar Foundation for Education, Science and Community Development.',
        location: ['Education City'],
        hours: '8 AM - 8 PM',
        phone: '+974 44749365',
        illustration: [
          'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7',
          'https://qatartoday.online/wp-content/uploads/2017/11/QNL.jpg',
          'https://www.marhaba.qa/wp-content/uploads/2017/11/Qatar-National-Library-QNL.jpg'],
    },
  },
  {
    title: "Dinner",
    startTime: genTimeBlock("FRI", 20, 30),
    endTime: genTimeBlock("FRI", 22, 30),
    location: "Paul",
    extra_descriptions: ['QR 250'],
    bla : {
        title: 'QATAR NATIONAL LIBRARY',
        desc:'Qatar National Library is a non-profit organization under the umbrella of the Qatar Foundation for Education, Science and Community Development.',
        location: ['Education City'],
        hours: '8 AM - 8 PM',
        phone: '+974 44749365',
        illustration: [
          'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7',
          'https://qatartoday.online/wp-content/uploads/2017/11/QNL.jpg',
          'https://www.marhaba.qa/wp-content/uploads/2017/11/Qatar-National-Library-QNL.jpg'],
    },
  },
];
const ITEM = [{
    title: 'QATAR NATIONAL LIBRARY',
    illustration: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/82620208_134418117579183_6808605126659482896_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=iXUs8GV3E7EAX8sjDfq&oh=12cd3fa2aa6146812aca5703fb791e87&oe=5EA000F7'
}];

export default class Itenerary extends Component {
  constructor(props) {
    super(props);
    this.numOfDays = 2;
    this.pivotDate = genTimeBlock('THU');
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (item) => {
    return (this.props.navigation.navigate('Location', {item: item.bla}));
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={events_data}
            pivotTime={8}
            pivotEndTime={24}
            pivotDate={this.pivotDate}
            numberOfDays={this.numOfDays}
            onEventPress={this.onEventPress}
            headerStyle={styles.headerStyle}
            formatDateHeader="dddd"
            locale="en"
          />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#7C3538'
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});
