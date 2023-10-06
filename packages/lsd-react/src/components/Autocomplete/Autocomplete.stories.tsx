import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { Autocomplete, AutocompleteProps } from './Autocomplete'

const list = JSON.parse(
  '["BitTorrent","VANIG","BenjiRolls","Status Network Token","GigTricks","Vechain","Insureum","Instant Sponsor Token","IslaCoin","Kcash","Litecoin","BoutsPro","Valorem","Artcoin","Insureum","Zen Protocol","CryptoPennies","MediBond","WishFinance","BlockNet","Big Data Block","Loom Network","Gamedex","Universal Recognition Token","Soarcoin","IZX","aelf","Bitcoin Private","TerraCoin","Coinnec","Revolution VR","SecureCoin","Swarm Fund","Fan360","LakeBanker","16BitCoin","CyberTrust","Actinium","ZestCoin","Monero 0","DACash","Bitswift","Bethereum","Hedge Token","Megastake","HeelCoin","RealChain","LiteBitcoin","SexCoin","Suretly","Internet of People","Rate3","Invictus","WorldPay","iOlite","Cashaa","NovaCoin","U Network","Gimli","Chynge.net","BMChain","Ethereum Premium","BlackShadowCoin","Javvy","Befund","Bancor Network Token","BOONSCoin","Pantos","IDEX Membership","BitStation","Lynx","Encrybit","HighVibe.Network","Credo","HiCoin","RiptideCoin","BitBoss","NXTTY","Presale Ventures","Urbit Data","Xeonbit","Newbium","Mint","Crypto Wine Exchange","HARA","Pioneer Coin","Ethereum Dark","FazzCoin","Fitrova","The EFFECT Network","CargoX","PolicyPal Network","Vechain","President Clinton","GenesysCoin","Trivver","Bitdeal","ShareMeAll","Primas","RoboAdvisorCoin","Liquid","Napoleon X","NOKU Master token","Liqnet","ZeroState","0chain","DarkCash","Sudan Gold Coin","PokerSports","Bankera","Think And Get Rich Coin","ELTCOIN","USOAMIC","XDNA","Autoria","Cosmo","Bigbom","EagsCoin","Stakinglab","SaffronCoin","BnrtxCoin","FoodCoin","PutinCoin","SID Token","Quartz","IOU1","Spend","NEO Gold","High Voltage Coin","Unobtanium","Sandcoin","FrazCoin","Sudan Gold Coin","VeriCoin","Aurora","NANJCOIN","Muse","DuckDuckCoin","Saifu","CryCash","Rustbits","BitFlip","Cpollo","Monkey Project","Coin Analyst","Scanetchain Token","Aditus","LendConnect","FOREXCOIN","Crypto Improvement Fund","Electra","Psilocybin","GameLeagueCoin","Switcheo","BitQuark","BinaryCoin","CyberVein","KATZcoin","BtcEX","ByteCoin","Shping Coin","Liquid","Stacktical","Tezos","ParkByte","Imbrex","Pinmo","Sigil","LePenCoin","OmiseGO Classic","Digix DAO","ShareRing","CryptoCarbon","CDX Network","SONM","PhoenixCoin","Incent","Tokyo Coin","Premium","Unattanium","Biotron","WETH","Rublebit","KRCoin","Aegis","Legends Cryptocurrency","VARcrypt","Witcoin","GlowShares","HOQU","VARcrypt","Linx","BlackholeCoin","NumbersCoin","ZayedCoin","CarVertical","Securosys","ElliotCoin","Zelcash","AcesCoin","EtherInc"]',
)

export default {
  title: 'Autocomplete',
  component: Autocomplete,
  argTypes: {
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
      },
      defaultValue: 'large',
    },
    variant: {
      type: {
        name: 'enum',
        value: ['outlined', 'outlined-bottom'],
      },
      defaultValue: 'large',
    },
  },
} as Meta

export const Root: StoryObj<AutocompleteProps> = {
  render: (args) => <Autocomplete {...args}>Autocomplete</Autocomplete>,

  args: {
    id: 'cryptocurrency',
    size: 'large',
    disabled: false,
    withIcon: false,
    error: false,
    variant: 'outlined',
    placeholder: 'Placeholder',
    onChange: undefined,
    options: list,
    label: 'Cryptocurrency',
  },
}
