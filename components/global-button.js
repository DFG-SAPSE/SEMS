import * as React from 'react'
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native'

function MyComponent(props) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <View style={styles.view4}>
            <Text>10:00</Text>
          </View>
          <View style={styles.view5}>
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6f942064522c186fc11b8b284986ff2f9e4c9902ac4c73681b448a49181efffa?apiKey=978f41e0131a442f8daf873f3d5553aa&',
              }}
              style={styles.image1}
            />
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2fe106a7c1e046186bda9605f6e78e8ffd0e0b4491c1c6f11f97c301a980f47d?apiKey=978f41e0131a442f8daf873f3d5553aa&',
              }}
              style={styles.image2}
            />
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9b625d8f05388b6c5a59976383c219b0f2c22282ed1562b8451a60dfa560ae35?apiKey=978f41e0131a442f8daf873f3d5553aa&',
              }}
              style={styles.image3}
            />
          </View>
        </View>
      </View>
      <View style={styles.view6}>
        <View style={styles.view7}>
          <View style={styles.view8}>
            <Text>Search consultant</Text>
          </View>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a76c897eb6687e12e451f9c6d97e478c32b5361d84ee114cf1063cab80f57f6a?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image4}
          />
        </View>
      </View>
      <View style={styles.view9}>
        <View style={styles.view10}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/131bb728735b5613ad46152ae2fb8afe4ea761c73ca55bb4d43f36db7875ce9d?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image5}
          />
          <View style={styles.view11}>
            <Text>Andrea Beatrice</Text>
          </View>
          <View style={styles.view12}>
            <Text>GreenCycle</Text>
          </View>
          <View style={styles.view13}>
            <Text>Healthcare and Wellbeing</Text>
          </View>
        </View>
        <View style={styles.view14}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5b502b662a0038d198873a8710172744b6f5e03b9c662a0428fcdbf057933318?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image6}
          />
          <View style={styles.view15}>
            <Text>Marsha Jones</Text>
          </View>
          <View style={styles.view16}>
            <Text>TechBridge</Text>
          </View>
          <View style={styles.view17}>
            <Text>Technology Inclusion</Text>
          </View>
        </View>
      </View>
      <View style={styles.view18}>
        <View style={styles.view19}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc33ab67cabe5facfd9709c433d38e028d9ee1d7c1b7c0d0b0ad577fd413da1f?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image7}
          />
          <View style={styles.view20}>
            <Text>Emil Rhodes</Text>
          </View>
          <View style={styles.view21}>
            <Text>CleanWave Energy</Text>
          </View>
          <View style={styles.view22}>
            <Text>Environment Conservation</Text>
          </View>
        </View>
        <View style={styles.view23}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a4f99f119a6782fc4b81b5f04a118c611c0d64bba7757f9d5cadf2b023665396?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image8}
          />
          <View style={styles.view24}>
            <Text>Melissa Bloom</Text>
          </View>
          <View style={styles.view25}>
            <Text>HealHub</Text>
          </View>
          <View style={styles.view26}>
            <Text>Healthcare and Wellbeing</Text>
          </View>
        </View>
      </View>
      <View style={styles.view27}>
        <View style={styles.view28}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b74a54deca9efd89c045120b0218cce40b7177080b198fd0c0c0f96bc14e82a9?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image9}
          />
          <View style={styles.view29}>
            <Text>Justin Gartner</Text>
          </View>
          <View style={styles.view30}>
            <Text>EcoHarvest</Text>
          </View>
          <View style={styles.view31}>
            <Text>Community Development</Text>
          </View>
        </View>
        <View style={styles.view32}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/537850c5c3423227b07b5bda9ce14b83fa709d4b5c60c98e916464ab07eff236?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image10}
          />
          <View style={styles.view33}>
            <Text>Haley Izumi</Text>
          </View>
          <View style={styles.view34}>
            <Text>GreenScape Solutions</Text>
          </View>
          <View style={styles.view35}>
            <Text>Environment Conservation</Text>
          </View>
        </View>
      </View>
      <View style={styles.view36}>
        <View style={styles.view37}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/780dbcf92ce5849b80e29558368dc6ce2e5edff1b1d39e2963a3817aa2b453ef?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image11}
          />
          <View style={styles.view38}>
            <Text>Nick Silva</Text>
          </View>
          <View style={styles.view39}>
            <Text>CommunityCuisine</Text>
          </View>
          <View style={styles.view40}>
            <Text>Food Security and Nutrition</Text>
          </View>
        </View>
        <View style={styles.view41}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7709631f225bca7502525d6b8134bafbe551e675077cb9d2ac92f8f9a5d61592?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image12}
          />
          <View style={styles.view42}>
            <Text>Rachel Green</Text>
          </View>
          <View style={styles.view43}>
            <Text>ArtTherapy Connect</Text>
          </View>
          <View style={styles.view44}>
            <Text>Arts and Culture</Text>
          </View>
        </View>
      </View>
      <View style={styles.view45}>
        <View style={styles.view46}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90c3b858d3e9299f2bca6e0f3dd6b1e1795d88408105be7d7fd97f9ef17b2ff8?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image13}
          />
          <View style={styles.view47}>
            <Text>Gale Emeron</Text>
          </View>
          <View style={styles.view48}>
            <Text>EmpowerYouth Apparel</Text>
          </View>
          <View style={styles.view49}>
            <Text>Arts and Culture</Text>
          </View>
        </View>
        <View style={styles.view50}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bba9d6af7d402c7d92f2c6f44ca16f222b3b81d2263b93e428367f8af6c0cf0e?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image14}
          />
          <View style={styles.view51}>
            <Text>Deanna Lee</Text>
          </View>
          <View style={styles.view52}>
            <Text>TechForAll</Text>
          </View>
          <View style={styles.view53}>
            <Text>Technology Inclusion</Text>
          </View>
        </View>
      </View>
      <View style={styles.view54}>
        <View style={styles.view55}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5fd8a8ae904336bb30c5a7b42c2c4d52c71295de61ba5d33ff95e23ca1bf2a20?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image15}
          />
          <View style={styles.view56}>
            <Text>George Cruz</Text>
          </View>
          <View style={styles.view57}>
            <Text>SmartSpending</Text>
          </View>
          <View style={styles.view58}>
            <Text>Financial Inclusion</Text>
          </View>
        </View>
        <View style={styles.view59}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c86e93a80dbac8a7b0bd608de14762570b9cc0c023c85dd781c03eed9b30d4f6?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image16}
          />
          <View style={styles.view60}>
            <Text>Theresa Garcia</Text>
          </View>
          <View style={styles.view61}>
            <Text>CleanWater Innovations</Text>
          </View>
          <View style={styles.view62}>
            <Text>Environment Conservation</Text>
          </View>
        </View>
      </View>
      <View style={styles.view63}>
        <View style={styles.view64}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b74a54deca9efd89c045120b0218cce40b7177080b198fd0c0c0f96bc14e82a9?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image17}
          />
          <View style={styles.view65}>
            <Text>Name</Text>
          </View>
          <View style={styles.view66}>
            <Text>Social Enterprise</Text>
          </View>
          <View style={styles.view67}>
            <Text>Industry</Text>
          </View>
        </View>
        <View style={styles.view68}>
          <Image
            resizeMode="cover"
            fitContent={true}
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5b502b662a0038d198873a8710172744b6f5e03b9c662a0428fcdbf057933318?apiKey=978f41e0131a442f8daf873f3d5553aa&',
            }}
            style={styles.image18}
          >
            <View style={styles.view69}>
              <Text>
                Complete your profile to schedule a call with and see other
                Social Enterprise Consultants
              </Text>
            </View>
            <View style={styles.view70}>
              <Text>Complete profile</Text>
            </View>
          </Image>
          <View style={styles.view71}>
            <Text>Name</Text>
          </View>
          <View style={styles.view72}>
            <Text>Social Enterprise</Text>
          </View>
          <View style={styles.view73}>
            <Text>Industry</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view1: {
    background:
      'linear-gradient(180deg, #FFF 14.17%, #FCFCFC 18.18%, #FCFCFC 100%)',
    display: 'flex',
    flexDirection: 'column',
  },
  view2: {
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  view3: {
    backgroundColor: '#FFF',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    padding: '5px 14px',
  },
  view4: {
    justifyContent: 'flex-end',
    color: '#35363A',
    flexGrow: '1',
    whiteSpace: 'nowrap',
    margin: 'auto 0',
    font: '400 13px Product Sans, sans-serif ',
  },
  view5: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 2,
  },
  image1: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: 14,
    flexShrink: 0,
    maxWidth: '100%',
    flexDirection: 'column',
    aspectRatio: '1',
  },
  image2: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: 14,
    flexShrink: 0,
    maxWidth: '100%',
    flexDirection: 'column',
    aspectRatio: '1',
  },
  image3: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: 14,
    flexShrink: 0,
    maxWidth: '100%',
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view6: {
    alignItems: 'stretch',
    borderRadius: 28,
    backgroundColor: '#F4F4F4',
    alignSelf: 'center',
    display: 'flex',
    marginTop: 16,
    width: '100%',
    maxWidth: 328,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  view7: {
    alignItems: 'stretch',
    display: 'flex',
    justifyContent: 'space-between',
    gap: 20,
    padding: '16px 18px',
  },
  view8: {
    color: '#212529',
    letterSpacing: 0.1,
    flexGrow: '1',
    whiteSpace: 'nowrap',
    font: '400 16px/24px Roboto, sans-serif ',
  },
  image4: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: 24,
    flexShrink: 0,
    maxWidth: '100%',
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view9: {
    alignSelf: 'center',
    display: 'flex',
    marginTop: 24,
    width: '100%',
    maxWidth: 328,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 20,
  },
  view10: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image5: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view11: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view12: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view13: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view14: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image6: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view15: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view16: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view17: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view18: {
    alignSelf: 'center',
    display: 'flex',
    marginTop: 24,
    width: '100%',
    maxWidth: 328,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 20,
  },
  view19: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image7: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view20: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view21: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view22: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    whiteSpace: 'nowrap',
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view23: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image8: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view24: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view25: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view26: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view27: {
    alignSelf: 'center',
    display: 'flex',
    marginTop: 24,
    width: '100%',
    maxWidth: 328,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 20,
  },
  view28: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image9: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view29: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view30: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view31: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view32: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image10: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view33: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view34: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view35: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    whiteSpace: 'nowrap',
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view36: {
    alignSelf: 'center',
    display: 'flex',
    marginTop: 24,
    width: '100%',
    maxWidth: 328,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 20,
  },
  view37: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image11: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view38: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view39: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view40: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    whiteSpace: 'nowrap',
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view41: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image12: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view42: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view43: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view44: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view45: {
    alignSelf: 'center',
    display: 'flex',
    marginTop: 24,
    width: '100%',
    maxWidth: 328,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 20,
  },
  view46: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image13: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view47: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view48: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view49: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view50: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image14: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view51: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view52: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view53: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view54: {
    alignSelf: 'center',
    display: 'flex',
    marginTop: 24,
    width: '100%',
    maxWidth: 328,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: 20,
  },
  view55: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image15: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view56: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view57: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view58: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view59: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image16: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view60: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 8,
    font: '500 12px/20px Roboto, sans-serif ',
  },
  view61: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view62: {
    alignSelf: 'stretch',
    color: '#999',
    letterSpacing: 0.1,
    whiteSpace: 'nowrap',
    font: '400 11px/20px Roboto, sans-serif ',
  },
  view63: {
    alignItems: 'stretch',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    filter: 'blur(12.5px)',
    alignSelf: 'center',
    display: 'flex',
    marginTop: 24,
    width: '100%',
    maxWidth: 328,
    justifyContent: 'space-between',
    gap: 20,
  },
  view64: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image17: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    width: 136,
    flexDirection: 'column',
    aspectRatio: '1',
  },
  view65: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 12,
    font: '400 12px/20px Roboto, sans-serif ',
  },
  view66: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 12px/20px Roboto, sans-serif ',
  },
  view67: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 12px/20px Roboto, sans-serif ',
  },
  view68: {
    alignItems: 'flex-start',
    borderRadius: 10,
    border: '0.25px solid #CCC',
    backgroundColor: '#FFF',
    display: 'flex',
    flexGrow: '1',
    flexBasis: '0%',
    flexDirection: 'column',
    padding: 8,
  },
  image18: {
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    aspectRatio: '1',
    width: 136,
    flexDirection: 'column',
    alignItems: 'start',
    padding: '12px 0 24px',
  },
  view69: {
    color: '#444',
    letterSpacing: 0.1,
    position: 'relative',
    font: '400 14px/20px Roboto, sans-serif ',
  },
  view70: {
    color: '#FFF',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#00367C',
    position: 'relative',
    marginTop: 26,
    padding: '11px 60px',
    font: '400 14px Source Sans Pro, sans-serif ',
  },
  view71: {
    color: '#000',
    letterSpacing: 0.1,
    alignSelf: 'stretch',
    marginTop: 12,
    font: '400 12px/20px Roboto, sans-serif ',
  },
  view72: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 12px/20px Roboto, sans-serif ',
  },
  view73: {
    alignSelf: 'stretch',
    color: '#000',
    letterSpacing: 0.1,
    font: '400 12px/20px Roboto, sans-serif ',
  },
})
