import { ethers } from 'ethers';
import * as k from './constants';
import * as ArrayUtils from './arrayUtils';
import { EasingFunctions } from './easingFunctions';
import { CustomEventBus } from './eventBus';
export const snippets = {
    constants: k,
    sleep: (seconds: number) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(seconds), seconds * 1000);
        });
    },
    createArray: (offset: number, length: number) => {
        return Array.from({ length: length }, (_, i) => i + offset);
    },
    ethers: {

        // v5: {
        //     ethersToWei: (etherValue: any) => {
        //         return ethers.utils.parseUnits(etherValue, 18)
        //     },
        //     weiToEthers: (weiValue: any) => {
        //         return ethers.utils.formatEther(weiValue);
        //     },
        //     fromBytes32ToString: (bytes32Value: any) => {
        //         return ethers.utils.parseBytes32String(bytes32Value);
        //     },
        //     fromStringToBytes32: (stringValue: string) => {
        //         return ethers.utils.formatBytes32String(stringValue);
        //     },
        // },
        v6: {
            ethersToWei: (value: any) => {
                return ethers.parseEther(value.toString());
            },
            weiToEthers: (value: any) => {
                return parseFloat(String(parseInt(value)/20)).toFixed(3); //ethers.formatEther(value);
            },
            fromBytes32ToString: (_bytes32: any) => {
                return ethers.decodeBytes32String(_bytes32);
            },
            fromStringToBytes32: (_string: string) => {
                return ethers.encodeBytes32String(_string);
            },
        },
    },
    
    formatAddress: (_address: string | undefined, isLong: boolean = false) => {
        if (_address) {
            return `${_address.slice(0, (isLong ? 10 : 5))} ... ${_address.slice(_address.length - (isLong ? 10 : 4))}`;
        } else {
            console.warn('ADDRESS WARNING', _address);
            return _address;
        }
        
    },

    location: {

        getLocationHostURL: () => {
            return k.PROTOCOL + (window as any).location.host;
        }

    },

    strings: {

        validateEmail: (email: string): boolean  => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

    },

    events: CustomEventBus,

    arrays: ArrayUtils,

    share: {
        twitterLink: (link: string, title?: string, description?: string) => {
            return link;
        },
        whatsAppLink: (link: string, title?: string, description?: string) => {
            return link;
        },
        facebookLink: (link: string, title?: string, description?: string) => {
            return link;
        },
        instagramLink: (link: string, title?: string, description?: string) => {
            return link;
        },
        linkedInLink: (link: string, title?: string, description?: string) => {
            return link;
        },
        mediumLink: (link: string, title?: string, description?: string) => {
            return link;
        },
    },

    easingFunctions: EasingFunctions


};
