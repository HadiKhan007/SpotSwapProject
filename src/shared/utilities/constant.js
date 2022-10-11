import {appIcons} from '../theme/assets';

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
    screen: 'PaymentMethods',
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

export {
  web_client_id,
  stripe_publishableKey,
  networkText,
  image_options,
  drawerList,
  commonSettings,
  guideLines,
  faq,
};
