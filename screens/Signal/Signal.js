import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BottomNavBar = () => {
  const navigation = useNavigation();

  const home = require('../../assets/images/home-21.png');
  const chart = require('../../assets/images/ChartBarG.png');
  const msg = require('../../assets/images/messages-11.png');
  const user = require('../../assets/images/User.png');
  const plus = require('../../assets/images/PIcon.png');

  return (
    <View style={navbarStyles.navbar}>
      <View style={navbarStyles.navigationContainer}>
        <TouchableOpacity
          style={navbarStyles.nav}
          onPress={() => navigation.navigate('Home')}>
          <Image source={home} />
          <View style={navbarStyles.dot1} />
        </TouchableOpacity>
        <TouchableOpacity style={navbarStyles.nav}>
          <Image source={chart} />
          <View style={navbarStyles.dot} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
          <Image source={msg} />
          <View style={navbarStyles.dot1} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={navbarStyles.nav}>
          <Image source={user} />
          <View style={navbarStyles.dot1} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={navbarStyles.nav}>
        <Image source={plus} />
        <View style={navbarStyles.dot1} />
      </TouchableOpacity>
    </View>
  );
};

const navbarStyles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    alignSelf: 'center',
  },
  navigationContainer: {
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderRadius: 40,
    height: 64,
    width: 254,
    alignItems: 'center',
    gap: 30,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  nav: {
    alignItems: 'center',
    gap: 5,
  },
  dot: {
    backgroundColor: 'rgba(35,197,98,1)',
    width: 4,
    height: 4,
    borderRadius: 50,
  },
  dot1: {
    width: 4,
    height: 4,
    borderRadius: 50,
  },
});

//
const Signal = () => {
  const navigation = useNavigation();

  const bell = require('../../assets/images/bellicon.png');
  const searchIcon = require('../../assets/images/MagnifyingGlass.png');
  const menuIcon = require('../../assets/images/Menu.png');
  const union = require('../../assets/images/Union.png');
  const msgUser1 = require('../../assets/images/Rectangle3.png');
  const msgUser2 = require('../../assets/images/msgUser2.png');
  const msgUser3 = require('../../assets/images/msgUser3.png');
  const msgUser4 = require('../../assets/images/msgUser4.png');
  const msgUser5 = require('../../assets/images/msgUser5.png');
  const msgUser6 = require('../../assets/images/msgUser6.png');
  const Viewmessage = require('../../assets/images/Viewmessage.png');
  const logo1 = require('../../assets/images/logo_PNG.png');
  const logo2 = require('../../assets/images/bitcoin.jpg');
  const logo3 = require('../../assets/images/signals.jpg');
  const logo4 = require('../../assets/images/safecalls.jpg');
  const logo5 = require('../../assets/images/photo_2023-09-22_23-24-31.jpg');

  //
  const [tab, setCurrentTab] = React.useState('Messenges');
  const [selectedMessage, setSelectedMessage] = React.useState(false);
  const handleLongPress = () => {
    setSelectedMessage(!selectedMessage);
  };

  const renderTab = () => {
    if (tab === 'Messenges') {
      return (
        <View style={styles.container}>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={logo1} style={styles.logo} />
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  <Text style={styles.textStyle3}>Cryptolab VIP</Text>
                  <Image source={union} />
                </View>
                <Text style={styles.textStyle4}>Today’s top chart</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.time}>15:20</Text>
              <View style={styles.messegesContainer}>
                <Text style={styles.msgNumber}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={logo5} style={styles.logo} />
              <TouchableOpacity>
                <Text style={styles.textStyle3}>Cruzebow Premium</Text>
                <Text style={styles.textStyle4}>
                  #PANDLE Take profit 1 done
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.time}>15:13</Text>
              <View style={styles.messegesContainer}>
                <Text style={styles.msgNumber}>135</Text>
              </View>
            </View>
          </View>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={logo2} style={styles.logo} />
              <TouchableOpacity>
                <Text style={styles.textStyle3}>Public vip signalFU...</Text>
                <Text style={styles.textStyle4}>
                  #INJ/USDT UPDATE: Target 1 done ni...
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.time}>15:13</Text>
              <View style={styles.messegesContainer}>
                <Text style={styles.msgNumber}>164</Text>
              </View>
            </View>
          </View>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={logo3} style={styles.logo} />
              <TouchableOpacity>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  <Text style={styles.textStyle3}>Crypto Signals</Text>
                  <Image source={union} />
                </View>
                <Text style={styles.textStyle5}>BTC/USDT 1 anticipated...</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.time}>8:30</Text>
              <Image source={Viewmessage} />
            </View>
          </View>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={logo4} style={styles.logo} />
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.textStyle3}>Crypto Safe Calls</Text>
                <Text style={styles.textStyle4}>Profit from free !!</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.time}>15:20</Text>
              <View style={styles.messegesContainer}>
                <Text style={styles.msgNumber}>150</Text>
              </View>
            </View>
          </View>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={logo3} style={styles.logo} />
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.textStyle3}>Mr Crypto: Free Signals</Text>
                <Text style={styles.textStyle4}>#C98 100% Completed</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.time}>15:20</Text>
              <View style={styles.messegesContainer}>
                <Text style={styles.msgNumber}>100</Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else if (tab === 'VIP') {
      return (
        <View style={styles.container}>
          <View style={styles.chatContainer}>
            <View style={styles.chat}>
              <Image source={msgUser1} />
              <TouchableOpacity>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  <Text style={styles.textStyle3}>Cryptolab VIP</Text>
                  <Image source={union} />
                </View>
                <Text style={styles.textStyle4}>Today’s top chart</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.time}>15:20</Text>
              <View style={styles.messegesContainer}>
                <Text style={styles.msgNumber}>2</Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else if (tab === 'Notification') {
      return (
        <View style={styles.notificationContainer}>
          <View style={styles.notification}>
            <Text style={styles.textStyle6}>
              Rs. 14 bil crypto fraud – 8,000 Lankans fooled
            </Text>
            <Text style={styles.textStyle7}>
              The Financial and Commercial Crimes Bureau of Sri Lanka's Criminal
              Investigations Department has arrested three people for committing
              massive crypto currency fraud amounting to around Rs. 14 Billion
              (US $ 37,891,504.00) Police Spokesperson & Attorney SSP Nihal
              Thalduwa told reporters on Thursday (27) that the scam was
              commited by a Chinese couple together with the Sri Lankan
              identified as Lamahewage Shamal Keerthi Bandara. The Chinese
              couple was arrested at the Katunayake International Airport, and
              the Police Spokesperson said that 8,000 people were scammed by
              these con artists. The Police Spokesperson said that Lamahewage
              Shamal Keerthi Bandara has started the conning people since 2020
              out of an office set up at the Colombo World Trade Center.
              However, he was released on bail after he was produced in court,
              said the Police Spokesperson. The Police Spokesperson said that
              the three criminals deceive unsuspecting individuals by promising
              them great returns for their crypto investments.
            </Text>
          </View>
          <View style={styles.notification}>
            <Text style={styles.textStyle6}>
              The Central Bank of Sri Lanka is considering criminally
              prosecuting operators of a Sports Chain cryptocurrency scam that
              caused investors to lose $47 million.
            </Text>
            <Text style={styles.textStyle7}>
              Victims of the recent Sports Chain scam have turned to the Central
              Bank for recovery of funds. Sources revealed that those who
              invested in Sports Chain reportedly deposited jewellery,
              refinanced the property, and sold vehicles in the middle of
              runaway inflation. The economic turmoil that gripped Sri Lanka
              since August 2022 saw inflation reach 50.6% in February 2023, and
              since then has marginally reduced to 50.3%. The Sri Lankan
              Financial Crimes Investigation Division (FCID) has apprehended
              nine suspects involved in money laundering and in connection with
              the scam. If found guilty, the suspects could be faced with a
              charge up to three times the amount of the funds stolen and will
              face a sentence between 5 to 20 years. The FCID has taken action
              against suspects by freezing their assets and bank accounts.
            </Text>
          </View>
        </View>
      );
    }
  };
  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.textStyle1}>Signal</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity>
              <Image source={searchIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={bell} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.segment}>
          <TouchableOpacity onPress={() => setCurrentTab('Messenges')}>
            <Text
              style={tab === 'Messenges' ? styles.currTab : styles.textStyle2}>
              Messenges
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentTab('VIP')}>
            <Text style={tab === 'VIP' ? styles.currTab : styles.textStyle2}>
              VIP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentTab('Notification')}>
            <Text
              style={
                tab === 'Notification' ? styles.currTab : styles.textStyle2
              }>
              Notification
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.menu}>
          <Image source={menuIcon} />
        </TouchableOpacity>
        {renderTab()}
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#141416',
  },
  header: {
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
  },
  segment: {
    marginTop: 30,
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderRadius: 32,
    height: 48,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
  },
  currTab: {
    height: 40,
    width: 109,
    backgroundColor: '#F9FBFC',
    borderRadius: 28,
    color: '#212121',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
  },
  textStyle2: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    height: 40,
    width: 109,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  menu: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 30,
    alignSelf: 'flex-end',
  },
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 30,
    gap: 28,
    marginBottom: 30,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  textStyle3: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 21,
    maxWidth: 220,
  },
  textStyle4: {
    color: '#34A853',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    width: 206,
  },
  time: {
    color: '#848484',
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
  },
  messegesContainer: {
    backgroundColor: '#34A853',
    height: 26,
    borderRadius: 30,
    width: 'auto',
    alignItems: 'center',
  },
  msgNumber: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  textStyle5: {
    color: '#848484',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  options: {
    height: 82,
    backgroundColor: '#34A853',
    width: 253,
    marginLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  chatContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: -200,
  },
  notificationContainer: {
    marginTop: 30,
    gap: 20,
    marginBottom: 30,
  },
  notification: {
    gap: 10,
  },
  textStyle6: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 21,
    marginLeft: 24,
    marginRight: 24,
  },
  textStyle7: {
    color: '#848484',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginLeft: 24,
    marginRight: 24,
  },
  logo: {
    width: 82,
    height: 82,
    borderRadius: 25,
  },
});

export default Signal;
