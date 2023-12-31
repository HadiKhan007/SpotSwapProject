import {appIcons, appImages} from '../theme/assets';

const web_client_id =
  '396667718237-b5871eer19sabub7jg8qhneksq75d443.apps.googleusercontent.com';

const stripe_publishableKey =
  'pk_test_51Lf25xJxAUizx0q5OIWfv41879r73FiP61ItNOlcUbE6MsGY8WCmULqWC9KrYyCYz18pbUBPDM7Lbb8N3giMguHh00P7XAmQlT';

const image_options = {
  width: 300,
  height: 400,
  multiple: true,
  mediaType: 'photo',
};

const networkText = 'Check Internet Connection';

const drawerList = [
  {
    id: 1,
    label: 'Home',
    screen: 'Home',
    icon: appIcons.homeIcon,
  },
  {
    id: 2,
    label: 'History',
    screen: 'History',
    icon: appIcons.historyIcon,
  },
  {
    id: 3,
    label: 'Inbox',
    screen: 'Chat',
    icon: appIcons.chatIcon,
  },
  {
    id: 4,
    label: 'Wallet',
    screen: 'Wallet',
    icon: appIcons.walletIcon,
  },
];

const commonSettings = [
  {
    id: 1,
    icon: appIcons.personIcon,
    screen: 'PersonalInfo',
    title: 'Personal Information',
    iconStyle: {width: 17, height: 20},
  },
  {
    id: 2,
    screen: 'UpdateCarInfo',
    icon: appIcons.carIcon,
    title: 'Car Information',
    iconStyle: {width: 29, height: 12},
  },
  {
    id: 3,
    screen: 'Payment',
    icon: appIcons.cardIcon,
    title: 'Payment Methods',
    iconStyle: {width: 29, height: 22},
  },
  {
    id: 4,
    screen: 'QuickChats',
    icon: appIcons.speechIcon,
    title: 'Quick Chats',
    iconStyle: {width: 28, height: 28},
  },
];

const guideLines = [
  {
    id: 1,
    screen: 'Support',
    title: 'Support',
    icon: appIcons.supportIcon,
    iconStyle: {width: 21, height: 20},
  },
  {
    id: 2,
    screen: 'FAQs',
    icon: appIcons.helpIcon,
    title: 'Frequently Asked Questions',
    iconStyle: {width: 22, height: 22},
  },
  {
    id: 3,
    screen: 'TermsConditions',
    icon: appIcons.helpIcon,
    title: 'Terms & Conditions',
    iconStyle: {width: 22, height: 22},
  },
  {
    id: 4,
    screen: 'PrivacyPolicy',
    icon: appIcons.privacyIcon,
    title: 'Privacy Policy',
    iconStyle: {width: 20, height: 23},
  },
  {
    id: 5,
    screen: 'BlockList',
    icon: appIcons.blockIcon,
    title: 'Block List',
    iconStyle: {width: 20, height: 20},
  },
  {
    id: 6,
    screen: 'LogOut',
    icon: appIcons.logoutIcon,
    title: 'Log out',
    iconStyle: {width: 19, height: 18},
  },
];

const faq = [
  {
    id: 1,
    ques: 'How does SpotSwap works?',
    ans: 'SpotSwap will be a mobile app that allows EV owners to dynamically update ranges estimates based on real-time driving factors.',
    isSelected: false,
  },
  {
    id: 2,
    ques: 'How does SpotSwap works?',
    ans: 'SpotSwap will be a mobile app that allows EV owners to dynamically update ranges estimates based on real-time driving factors.',
    isSelected: false,
  },
  {
    id: 3,
    ques: 'How does SpotSwap works?',
    ans: 'SpotSwap will be a mobile app that allows EV owners to dynamically update ranges estimates based on real-time driving factors.',
    isSelected: false,
  },
  {
    id: 4,
    ques: 'How does SpotSwap works?',
    ans: 'SpotSwap will be a mobile app that allows EV owners to dynamically update ranges estimates based on real-time driving factors.',
    isSelected: false,
  },
  {
    id: 5,
    ques: 'How does SpotSwap works?',
    ans: 'SpotSwap will be a mobile app that allows EV owners to dynamically update ranges estimates based on real-time driving factors.',
    isSelected: false,
  },
  {
    id: 6,
    ques: 'How does SpotSwap works?',
    ans: 'SpotSwap will be a mobile app that allows EV owners to dynamically update ranges estimates based on real-time driving factors.',
    isSelected: false,
  },
  {
    id: 7,
    ques: 'How does SpotSwap works?',
    ans: 'SpotSwap will be a mobile app that allows EV owners to dynamically update ranges estimates based on real-time driving factors.',
    isSelected: false,
  },
  {
    id: 8,
    ques: 'How does SpotSwap works?',
    ans: 'SpotSwap will be a mobile app that allows EV owners to dynamically update ranges estimates based on real-time driving factors.',
    isSelected: false,
  },
  {
    id: 9,
    ques: 'How does SpotSwap works?',
    ans: 'SpotSwap will be a mobile app that allows EV owners to dynamically update ranges estimates based on real-time driving factors.',
    isSelected: false,
  },
];

const chats = [
  {
    id: 1,
    title: 'Ofcourse!',
  },
  {
    id: 2,
    title: 'Yes!',
  },
  {
    id: 3,
    title: 'Yes but kindly wait',
  },
  {
    id: 4,
    title: 'No, sorry',
  },
  {
    id: 5,
    title: 'My bad, maybe next time',
  },
];
const History_List = [
  {
    id: 1,
    PlaceName: 'Washington DC, USA',
    price: '$11.00',
    time: '10:00AM',
    monthDate: 'July 25, 2022',
    onPress: () => {},
  },
  {
    id: 2,
    PlaceName: 'Mall Parking',
    price: '$11.00',
    time: '10:00AM',
    monthDate: 'July 25, 2022',
    onPress: () => {},
  },
  {
    id: 3,
    PlaceName: 'Alley Park Parking',
    price: '$11.00',
    time: '10:00AM',
    monthDate: 'July 25, 2022',
    onPress: () => {},
  },
  {
    id: 4,
    PlaceName: 'Mall Parking',
    price: '$11.00',
    time: '10:00AM',
    monthDate: 'July 25, 2022',
    onPress: () => {},
  },
  {
    id: 5,
    PlaceName: 'Washington Main DC, USA',
    price: '$11.00',
    time: '10:00AM',
    monthDate: 'July 25, 2022',
    onPress: () => {},
  },
  {
    id: 6,
    PlaceName: 'Washington Main DC, USA',
    price: '$11.00',
    time: '10:00AM',
    monthDate: 'July 25, 2022',
    onPress: () => {},
  },
];
const Completed_List = [
  {
    id: 1,
    numberText: '123423',
    monthYear: 'July 25, 2022',
    time: '10:00AM',
    messageText:
      'Hello, I’d like to raise a few questions regarding the app as I see some features aren’t working...',
  },
];
const Pending_List = [
  {
    id: 1,
    numberText: '123423',
    monthYear: 'July 25, 2022',
    time: '10:00AM',
    messageText:
      'Hello, I’d like to raise a few questions regarding the app as I see some features aren’t working...',
  },
  {
    id: 2,
    numberText: '123423',
    monthYear: 'July 25, 2022',
    time: '10:00AM',
    messageText:
      'Hello, I’d like to raise a few questions regarding the app as I see some features aren’t working...',
  },
];
const CardMethod = [
  {
    id: 1,
    title: 'Credit Card',
    selected: false,
    route: 'AddCardDetail',
  },
  {
    id: 2,
    title: 'Paypal',
    selected: false,
    route: 'AddPaypalDetails',
  },
];
const PaymentCardList = [
  {
    id: 1,
    leftIcon: appIcons.VisaIcon,
    titleText: '**** **** **** 4545',
    subTitle: 'Expires 10/26',
    route: 'EditCardDetails',
  },
  {
    id: 2,
    leftIcon: appIcons.PayPalIcon,
    titleText: 'Lilac Macbeth',
    subTitle: 'lilacmc@gmail.com',
    route: 'EditCardDetails',
  },
];
const TopUp_List = [
  {
    id: 1,
    title: 'Top Up',
    subTitle: 'Bank Transfer',
    price: '+ $20.00',
    leftIcon: appIcons.arrowUp,
  },
  {
    id: 2,
    title: 'Top Up',
    subTitle: 'Bank Transfer',
    price: '+ $20.00',
    leftIcon: appIcons.arrowUp,
  },
  {
    id: 3,
    title: 'Payment',
    subTitle: 'SpotSwap',
    price: '+ $20.00',
    leftIcon: appIcons.arrowDown,
  },
];
const ChatCard_List = [
  {
    id: 1,
    Iconimage: appImages.car,
    Title: 'Ali',
    subTitle: 'Thanks',
    onPress: 'Inbox',
  },
  {
    id: 2,
    Iconimage: appImages.david,
    Title: 'James Kenter',
    subTitle: 'Thanks for the slot',
    onPress: 'Inbox',
  },
];
export {
  web_client_id,
  stripe_publishableKey,
  networkText,
  image_options,
  drawerList,
  commonSettings,
  guideLines,
  faq,
  chats,
  History_List,
  Completed_List,
  Pending_List,
  CardMethod,
  PaymentCardList,
  TopUp_List,
  ChatCard_List,
};
