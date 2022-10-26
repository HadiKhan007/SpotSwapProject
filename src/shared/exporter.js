export {
  appSvgs,
  appIcons,
  appLogos,
  appVideos,
  appImages,
} from './theme/assets';

export {colors} from './theme/colors';
export {size} from './theme/sizes';
export {family} from './theme/family';
export {
  WP,
  HP,
  scrWidth,
  scrHeight,
  platformOrientedCode,
} from './theme/responsive';

export {
  LoginVS,
  loginFormFields,
  registerVS,
  registerFormFields,
  sendMailVS,
  sendMailFormFields,
  resetPassVS,
  resetPassFormFields,
  carInfoVS,
  carInfoFormFields,
  personalInfoVS,
  personalInfoFormFields,
  updateCarInfoVS,
  updateCarInfoFormFields,
  quickChatVS,
  quickChatFormFields,
  socialRegisterVS,
  socialRegisterFormFields,
  ticketVs,
  ticketFormField,
  cardDetailsVs,
  cardFormField,
  payPalDetailVs,
  payPalDetailFormField,
} from './utilities/validations';
export {
  StatusBarHeight,
  DimensionsWindowHeight,
  DimensionsWindowWidth,
} from './theme/statusBarHeight';

export {setupAxios, HTTP_CLIENT, initialConfig} from './utilities/config';
export {BASE_URL, ENDPOINTS} from './utilities/endpoints';
export {
  web_client_id,
  stripe_publishableKey,
  networkText,
  image_options,
  History_List,
  Completed_List,
  Pending_List,
  CardMethod,
  PaymentCardList,
  TopUp_List,
  ChatCard_List,
} from './utilities/constant';
export {header, authHeader} from './utilities/headers';
export {
  checkConnected,
  responseValidator,
  checkBrand,
} from './utilities/helper';
