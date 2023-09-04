
import { ethers } from "ethers";
// import dotenv from 'dotenv';
// dot env.REACT_APP_config();


// Zero constants
export const ZERO_ADDRESS = process.env.REACT_APP_API_BASE_URL || ethers.ZeroAddress;//ethers.constants.AddressZero; //

export const ZERO_HASH = process.env.REACT_APP_API_BASE_URL || ethers.ZeroHash;//ethers.constants.HashZero; //

export const PROTOCOL = process.env.REACT_APP_PROTOCOL || "http://";

export const SITE_NAME = process.env.REACT_APP_SITE_NAME || "Enftis Marketplace";

export const LTR = process.env.REACT_APP_LTR || "ltr";

export const RTL = process.env.REACT_APP_RTL || "rtl";

export const DEFAULT_DIRECTION = process.env.REACT_APP_DEFAULT_DIRECTION || "ltr";

export const DEFAULT_SEPERATOR = process.env.REACT_APP_DEFAULT_SEPERATOR || "|";

export const DEFAULT_LOCALE = process.env.REACT_APP_DEFAULT_LOCALE || "en";

export const LOCALES = process.env.REACT_APP_LOCALES || "en";

export const DEFAULT_TYPE = process.env.REACT_APP_DEFAULT_TYPE || "";

export const DEFAULT_TITLE = process.env.REACT_APP_DEFAULT_TITLE || "Enftis";

export const DEFAULT_DESCRIPTION = process.env.REACT_APP_DEFAULT_DESCRIPTION || "NFT marketplace";

export const DEFAULT_KEYWORDS = process.env.REACT_APP_DEFAULT_KEYWORDS || "NFT";

export const DEFAULT_AUTHOR = process.env.REACT_APP_DEFAULT_AUTHOR || "@enftis";

export const DEFAULT_THUMBNAIL = process.env.REACT_APP_DEFAULT_THUMBNAIL || "enftis.png";

export const DEFAULT_CARD = process.env.REACT_APP_DEFAULT_CARD || "summary_large_image";

export const THEME_COLOR = process.env.REACT_APP_THEME_COLOR || "#4400FF";

export const TWITTER_USERNAME = process.env.REACT_APP_TWITTER_USERNAME || "@enftis";

export const TWITTER_AUTHOR = process.env.REACT_APP_TWITTER_AUTHOR || "@enftis";

export const FAVICONS = process.env.REACT_APP_FAVICONS || "32,64,128,256,512";

export const STYLES = process.env.REACT_APP_STYLES || "main.css,fonts.css,vendors.css";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api/v1/services';