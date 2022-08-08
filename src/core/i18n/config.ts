import {createI18n} from "vue-i18n";
import deDE from "@/core/i18n/locales/de-DE.json";
import enUS from "@/core/i18n/locales/en-US.json";
import cnCN from "@/core/i18n/locales/cn-CN.json";

/**
 * setup vue-i18n with i18n resources with global type definition.
 * if you define the i18n resource schema in your `*.d.ts`, this is checked with typeScript.
 * you can check global type definition at `./vue-i18n.d.ts`
 */
const i18n = createI18n({
    legacy: false,
    locale: 'de-DE',
    fallbackLocale: 'en-US',
    globalInjection: true,
    messages: {
        'de-DE': deDE,
        'en-US': enUS,
        'cn-CN': cnCN
    },
    datetimeFormats: {
        'de-DE': {
            short: {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
                timeZone: 'Europe/Berlin'
            }
        }
    },
    numberFormats: {
        'de-DE': {
            currency: {
                style: 'currency',
                currencyDisplay: 'symbol',
                currency: 'EUR'
            }
        },
        'en-US': {
            currency: {
                style: 'currency',
                currencyDisplay: 'symbol',
                currency: 'USD'
            }
        },
        'cn-CN': {
            currency: {
                style: 'currency',
                currencyDisplay: 'symbol',
                currency: 'RMB'
            }
        }
    }
})

const $t = i18n.global.t

export { i18n, $t };