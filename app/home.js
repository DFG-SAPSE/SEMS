import * as React from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

export default function Home(props) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const data = [1, 2, 3, 4, 5, 6]

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            onChangeText={handleSearch}
            value={searchQuery}
            placeholder="Search consultant"
            placeholderTextColor={'black'}
          />
          <Ionicons
            style={styles.searchIcon}
            name="ios-search"
            size={20}
            color="black"
          />
        </View>
        <View style={styles.container}>
          {data.map((item, index) => (
            <View key={index} style={styles.box}>
              <Image
                resizeMode="contain"
                source={{
                  uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/131bb728735b5613ad46152ae2fb8afe4ea761c73ca55bb4d43f36db7875ce9d?apiKey=978f41e0131a442f8daf873f3d5553aa&',
                }}
                style={styles.consultantImage}
              />
              <View style={styles.textContent}>
                <Text style={styles.textSize}> Andrea Beatrice </Text>
              </View>
              <View style={styles.textContent}>
                <Text style={styles.textSize}> GreenCycle </Text>
              </View>
              <View style={styles.consultantIndustry}>
                <Text style={styles.colorText}> Healthcare and Wellbeing </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.Text}>
        Complete your profile to schedule a call with and see other Social
        Enterprise Consultants
      </Text>
      <View style={styles.Button}>
        <Text style={styles.buttonText}> Complete Profile </Text>
      </View>
      <Link style={styles.Button} href="/about">
        Go to about page
      </Link>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Text: {
    color: '#444',
    letterSpacing: 0.1,
    font: '400 14px/20px Roboto, sans-serif ',
    margin: 15,
    padding: 15,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    padding: 12,
    position: 'relative',
    gap: 20,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
  },
  input: {
    flex: 1,
    height: 35,
    paddding: 40,
    color: '#424242',
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
  },
  box: {
    margin: 15,
    width: '40 %',
    height: 230,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#999',
  },
  consultantImage: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  textContent: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 6,
  },
  textSize: {
    fontSize: 12,
    alignSelf: 'stretch',
    letterSpacing: 0.1,
  },
  colorText: {
    color: '#999',
    fontSize: 12,
    alignSelf: 'stretch',
    letterSpacing: 0.1,
  },
  consultantIndustry: {
    marginTop: 6,
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    fontSize: 11,
    fontFamily: 'Roboto',
    fontWeight: '400',
    lineHeight: 20,
  },

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  Button: {
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#00367C',
    alignSelf: 'center',
    width: '100%',
    maxWidth: 350,
    marginTop: 0,
    marginBottom: 35,
    paddingVertical: 15,
    paddingHorizontal: 25,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
  },
  buttonText: {
    color: '#FFF',
  },
})
