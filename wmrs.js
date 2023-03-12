/*
完美人生App: 一诺庄园

变量：捉包https://hms.cignacmb.com域名headars里的authorization 多账号换行隔开
格式：export ynzy="authorization=Bearer_xxxxxx@Bearer_xxxxxx"  

CGkey: 脚本卡密   电报机器人 @CGKEYBot 处获取 (所有脚本通用)
格式：export CGkey="xxxxxxxx"

*/

const $ = new Env("一诺庄园");
let envSplitor = ['\n']  //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (Linux; Android 10; ProjectTitan Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36 ;hmsapp/5.5.36;HMS_APP_SESSIONID/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWduRGF0YSI6IkQ2QkY2NTRFNDA5N0UwMkMyQzJGRTVCQzFDNjg0RTg2OTI5MjQzIiwibG9naW5UaW1lIjoiMTY2ODAwOTAxMzY5NyIsIm5iZiI6MTY2ODAwOTAxMywiZXhwdCI6MTY2ODA5NTQxMzY5NywiaXNzIjoiSldUIiwiZnJvbSI6IkFQUCIsImV4cCI6MTY3MzE5MzAxMywidXNlcklkIjoiNjczMzQ5NCIsImlhdCI6MTY2ODAwOTAxM30.jFay4AUDuTq0ZQd2bzgGFw_WUZOz-An3UQc16aItE00;' //换成自己的UA



var _0xod6='jsjiami.com.v6',_0xod6_=['‮_0xod6'],_0x4511=[_0xod6,'worCh8K1aMK0wqXDrMO2DMO9wo59wqDCh8K0EMKIKiIpCWnCh8Ktw4F3w6TCp8OAwqXDtMOHU8OIIMOiw6nCsMKtNcK7wq49GwnDriVhDcKBwoduw6XDuGTCiHXCo8OywrTCpw==','w6NwbMObAw==','YnrDuAJ/w7TCuMKLLl/CoA5K','wpV3B8Ojwpc=','w4jChMO8BGQ=','wo1nUMO7Jg==','wpfDihnCqkVrwpfDjMOnw5c=','wotTOMOjwonDplleZsOxw4LCqA==','6LS+5YysKQ==','wqlBEgQ=','QeWWhuexqOaen8OpHg==','wo/CgMKm','Sy7Cn8Oyw74=','wrk9XcKQbw==','Q8OdwpLDqg==','MxMHw7TCt1o3','w5kPwpddwq8=','wp3Cjm9owrE=','wrVFDA4Zc8O2','w5I0wolQwqIuw47Co2gZw6ZZ','AQQswpRc','fsKyHirDqMOs','acKAwrRFWMKdw6g=','wrM2IsKLGUEXTsOjH8KNPsK2HMKtwpDotYLljLHmo43mnLJiTyDDkD9jwr0FLEnDiMKoCMOPwog=','KToCw7LCnA==','wr9iwq0Rw4w=','YcKww4t4U8KXBw==','woQucsKMSQ==','DsKMBcKjUg==','YUENQ35gw4Y=','GH/CosKfwoN1wrvCm8Ksw5LDvMOoFhg=','M8KrfHc=','PWFTwrI=','w6HDiy8Pwoko','U3rDvwI=','wpBTwp0Yd8O0w68gTcOPwpFlw54Gw7jDvMKmwrs=','Jx8Yw6/Cvl4=','f0UATn8=','DhsDw6MR','w790cMOdGgE=','AXrCgsKmwqI=','wonDtg7Crlw=','NA9/IMKK','wro7RcK5cQ==','b2zDvsKXw5Vnw77DisOVw4vCog==','wopNwpgFag==','B8KoA8Koaw==','worDl8O+YMO9','wpEqTR4=','wrBBFhU=','w73Cu8KDWCrCgigLCMOX','CuKYpu+4huaclOWunuaWlOS5jeWLn+WLreW/oOWdksOgw47DteeBrui+g+ijreS7u+avpMKZ','ecKgw5l0','KDo6J1g=','wo7CnMKm','Pn/ChcKFwrU=','MmgD','M8KyBMKsUHvDrw==','woRdK8OBwo8=','LMK1DA==','w57ChcKfP8KIw4DDqQ==','w57CocO3Fw==','EsKrdnoUw5/CjBTDuhrDvUzCqsKs','wq5jZ8OAAsKnwotrcA3CplLDrg==','LMKewpdNUMOJ','w6/DtURuwpg=','eMO2wrXDscKf','ekrDqAVS','w5F+bsOCUR5J','w5fCpMKhKsKl','LDg+Fn4=','wqwIe8O5aw==','w7I0woNB','wqAlXsKP','VWbDvA==','w6fChTbCuWY=','wrTDisO5fMOT','5Yyg5a6w6au46K2a5ouL5YqzcuafiuaXkuaekuiGqQ==','wql2WT0U','w5nCr8OtFw==','IcKkw59vFA==','wrctXcK4fzHDrA==','ecOpwprDi8KJ','IxEaNXo=','w7sfw6HCnw==','wojDkR/Cn158wprDjMO3w5t5Ew==','wqAMPw==','w4TorYnmorjmnLvljZHlr57mi4LlnovDl8O15pyl5ZiC5LuYYzPDosOrGMKXwqTCqT1fw67lp77oja3lj7DljozlrIM=','aksIQg==','Nwtu','wrjorbrli6jlpJHlp6nkvJ7nl51HwoHphKjooLTnjKjlo5rpgqfmiaLora/ogJvnspbkv5Tog4LopbrpmoU=','w7zCq8KSWi/CgB4=','YcO2eXFtAcOXCiVKFMO5wpvDoMKgJMOWw5bCo8O8wrt6wo1zwpdgwpzCv8OyJcK7KMOT','FMKwfVg/','A8KRak0/','w5jCtDHCpBw=','Eic9woJd','EAcuwqtvZhI=','w6LCocKGdC3CkjUNG8OQw6Jg','6La15Y+mRQ==','PWUCbA==','YMOkwpDDjcKswogWOg==','esKlw4Z1Qg==','wq14wrYqw4M=','FSIiwoxC','L3tEwqM=','UWrDvAZxw6XCtA==','wr5eL8ODwrA=','GwYuwrc=','UCVjS8OHwporwrAkwpkWw4s=','woPCoUpgwqVbCg==','OgYkwrpyRwDDnsKrJS/CuXkU','wobDkRzCpw==','fmvDmno=','w5jDgAYKwrU=','w7LCrsKHOMKr','QcOTwpg=','wr8aK1TCjcK7SA==','dMK0FQ==','c+WEmOaItOWLvg==','ScKEwoxQUcKaw7hUw5nCuHDCmA==','elQATm8=','YWEHUVA=','wonCq099','O2EObcKBw4Ft','Kw1dEMKT','w6zDnjEEwpQjw6NfwogTYUbDvX55E8KRw7vDgHnCoQ8PwrDCrAtzYSh6AcONGBd1w7rCnHvCryMfwrXDvcOmwozDi8K5','wqUaOV/ChMK/Xg==','wqRTMcOWwoLDrGMcXsO9w4rCtsOOw7U=','w7ofw6HCgw==','w6Uhwp7Ckg==','MlHCuMKpwqQ=','w7QIw5HCuMO1','FzdoN8Kk','a8K2w6J1UA==','wpZfwp4JfcOh','AcKBw4tHMg==','OWjCosKbwqc=','wqgpVcOwaw==','wpozR8OVew==','b2HDkGc=','w4LDl0Fjwp4=','wpQyeQ==','6K+U5rGN5aa96LWP','w7Qfw6I=','IsK1D8Ki','wpM0bMOKZQ==','woDCnMKlYQ==','w5IswpFzwr4=','wq8QPEI=','RFHDk2XCpg==','wpjDksOCZ8Og','w7HCgz/CpQ==','Z8OKwpnDl8Ks','wrXDo8OuGVI=','PcKrfw==','6Kyt5rO85aaD6LSS','O8Kqw5Q=','THEjSm8=','wrsFaB7Dpw==','OX/CqMKS','ccOqwrXDnMKEwoQB','ZcK6w41dWMKBOsOBwrlzw4PCtw==','w5PCjcKq5qCJ5b2M6Zev6K6U','wo3DjTbCsVR9','ecOoc2Q=','w5IcwoxBwr4=','w6DCocKFUG7CmxoBB8OQw6p8IcKLw48=','fsKDwodK','woldMsOH','w67DrHtiwok=','w7PDhVxMwrc=','wpDDnwvCtX55wrnDhg==','w7kcw6nCrsOZwpLCgg==','fcK0w5l3eMKEGcOL','Buaum+aWtA==','wqfDhsOwGG0rNsOF','w7cvwojCijk=','IsKwajwbw4LCl1c=','ak86Rnd7w5E=','wps2SMOcb8OUwpo=','QcOTwpjDjsKPPnfDq8OJw6EPGA==','Ak185qO35b6D6ZaR6K6k','wrnDlsOXVMOAfS4=','NGEb','e0oGRWk=','O3AbecKXwokxAC1tYFvDjMO8flTCpHhMwprCssKdEHPDh8OvwqbCoT99wr0jwpMpw5gQHXRYworCvyBKT8O8QsK1w4kZLcOCBVHDg2sNwq/DsnfDnm16w5PDtMOCw6vDuMO7','WsKcwoNhXg==','cMK+EzrDqMOsCQ==','Q8OpZ2lhDMOCUwBAFMKxwpfCpQ==','wq9sbMOBw78=','wrN5OCA4','YcO1woLDicKdwp4mNkbClg==','wqtPGCAbYcOdGQodwr3Dnw==','NTU8AA==','HeaUs+i0nOaKiOWNnOaImOWIlw==','XcKRJCTDjA==','W2sAU1Q=','6LeB5Y+LBA==','w5rnrIfnuZ0=','woU+Shc=','PCY+Ek9EwrMCw6Buwpk=','w7dwasOb','Cwwpwqt+XxHCl8KpIS7Cs2QywqnCvA==','wqtgwqgow4FQwpplDMOBwo8FwrHDug/DtwI6Jg==','8JmOt1I=','wpl3f8OBCQ==','ORlnIcKEw4HDiA==','w71wc8Of','asK+ATHDocOoHw==','YD9vUsOLwoAMw7QXwo4=','wpEwTQI=','w5PDmmRYwok=','w4DDiQ8ewq4=','YVAYV2gowprCmcO5WFMhRgo+wpVZwrIyWMK2w43CmsOmBcKnVsOLI1pbccOZwoLDljgHaXAQwolmw7JcbMKTwprClT47QsKgwrpew7pyNnFFeA==','wo1nwrM3w5pKwr96G8OQwoopwr4=','woAOa8OsZg==','wosaaDvDuQ==','VsOGwq/DrsKv','w6M+wpRUwoQvw57Dqw==','w6HDgSYpwpMkw4xEwpUVaRA=','6La35Y6swrw=','w73CjTbCuQ==','JcKgw4B2NB3DnsOi','wofCq0xFwq5NN8KJB20Mw7Y=','bmHDjXPCl1vCk8ON','w6YBwpjCsw4=','V8O1wpTDn8K+','HeasleaWjuS8huWNqOettuWKuOW0muWup+aKhg==','csOjenJoFMOT','w55+e8OzRwlIN8KvQcOLX8OyQsO0','w55+ew==','esO1wpfDjcKbw5dKdkrCniYUdsOnRURlwpE6BcKnwp4CHCYUw5HDpSbDl8OQw4oKwqDDhMK5wq7Dq8Olw55bwrLCoF4BbMKqwr98w7/ClMKsw6UqwoVtUSQ+BcOxwoVaeQs=','wpddLcODwoo=','w7nCmcKFNsKLw57DucOJLgPDqBNh','wozDsyvChGo=','wo/Drzx9fMO5YMOHU0QYdMObMQ==','w5DDvnJnwp8=','W8KIJgrDnA==','w7zCn8OwEm4=','w53CusOlF1nCkgzCgMKywr0=','wo/CpV9l','wr4LOU/ClMK+','w6Y6wo5Q','wq5HTcONw7A8TMKEw45zd8K3','wpY8c8OY','Duavi+aWiuS/lOWOseevjeWIruW3neWvieaIkA==','ccKiGhzDhQ==','wpkxcsOpYsOOwpU=','w5HCj8OwZMO3w6PDt8KlVg==','LH5bwqLDuA==','wotYwpcDbMOxw4ot','wrl+QDk=','w4rCr8OwAg==','MMKodFoQw4LCkw==','w7LCmzrCrjMJEUPChirCp1g=','fMKlw459QsKAIMOPwr5xw7bCugHChcKtwr4=','wow8bcOWQMOSwpp1','wrLDi8OvJ0I5MA==','w7rCr8KSXgDCmR8H','GAUmwpp2Wh8=','LMK1DMKaU2zDhsKHX8O/w48X','6Lae5Yybwqo=','Z8K0w4d5','w47mr57ml7s=','wrJQGwABYMOHFw0fwojDksKLwozCqMKA','OTEjw6E=','w6XDmjUYwo56wq0EwokRfEfDpjppCsKHwrXDi3TDvQFNwqjDsQZ1eyJjDMOcBQN1w7vCmmfCvQ8Fw77DjcOBwr7Ci8OkwrzDi8KWWsOkwpp4w78VIgISMMOHw6jCpCPDjiLCqsOfw6PDkw==','NMK7GMKwfmfDrMKNFg==','wpbCksKyc8KEw7DCp8K8','SMKgw550WcKXHcOUwqxuw4zCoQ4=','wp1KFwAa','w7wRw7HCmw==','VCzCn8OVw4krw7TDplnDrjU7','6La15YybAA==','wqLDoT9s','KCkxw6cNwr04SVgywoA3','w7UrwpnCjj3DswA6AyXCvMKe','6LSF5Y+4w5c=','w7YRw6jCnw==','Hea2leimo+S4oOWKnOWkuei2rQ==','I8Khe2EDw5XCsV3Ciw==','wqjDm8ORWMOZcAlM','wrFwUw==','EnEbYcKLw4F3VSR0ehrDgQ==','wpDDlMOxXcOl','w6sEw6TCjsONwpLCqkrDrcOT','w7/CgzzCnTkuMELChibCr1U=','w6PDjywN','cOmguuWMqcK1w4E=','wobCksK1eQ==','XCrCi8Okw4g8w5vDq0HDohAjw7bDuBZmQMOO','6aCP57Gb5p6L8J2+gQ==','M2FQworDosOsBcOewqXClTnChQ==','6Lek5Y+fcQ==','fMOgwo7DmA==','ZFcL','wr7DpSFmdcOhcQ==','w5B1ZsOSXQ1WCsK0V8O1YMO+Q8OJw54Cwqk=','GRdnB8KEw47DmBjCiRbCpEXDq8Kf','w5/CmcKBKsKN','wqpcXsO8w61iLcOEw5J3YsOgw7gSwqV9PcKwHyAkwoYZw6jDocOmwpDDuEJqwrV6wpDDtcKAccKcbWAbFCrDnEXDlMKdRMKyw63Cq3M6bxI8w6HDmsOAHyzDpsOkw6MlUcOowr7DqQ==','wqrDn8OAVsOG','XXHDimvCvEzCicOUGMOfwrLDoR4=','TsKCwoptTg==','wqgQVgfDpg==','LwQfw5og','wp11wpANw6Y=','wospf8OJdsOOwr1/aMO0','wo3DnALCjlk=','w7QIw5fCn8OX','wrN+WT0=','w6XnrqXnuZY=','w73llp3lhY/ovoPluoM=','wrBNScOpw7cuZ8KPw7R7fsKjw7I1wrd+','DeeMjOaftuexmeadvQ==','w6Mvwo7Cig==','w7TCnjTCqyMiMkjChCrCpW9aw5LDusKGw6QBGg==','KW9bwqLDqA==','6LSm5Y2xUg==','wrotXsKP','PncI','woRdMcOwwoLDo3M=','wpnCtlt9wog=','wqNgwq8Zw5s=','wq96RzdJwrha','bMOpblxqBsO4EThMHMKv','w786wopB','VOiNouW8vQ==','wr8aK0vCpcKsWcOE','eiR7WsORwoAcw7wewoQf','w4QhwpTCnzHDqxFULi7CtsKAwr4Q','MMK1GMKv','wqzDuMOkXMO7','JsKDemkg','NjsEjiamXTwLDinWulZzTwP.com.v6=='];if(function(_0x3b1bad,_0xb88d93,_0x2dc72c){function _0x3a8768(_0x4ce615,_0x224f87,_0x58be8a,_0x113574,_0x36b905,_0x5e7d0b){_0x224f87=_0x224f87>>0x8,_0x36b905='po';var _0x4fdbbe='shift',_0x51c3d6='push',_0x5e7d0b='‮';if(_0x224f87<_0x4ce615){while(--_0x4ce615){_0x113574=_0x3b1bad[_0x4fdbbe]();if(_0x224f87===_0x4ce615&&_0x5e7d0b==='‮'&&_0x5e7d0b['length']===0x1){_0x224f87=_0x113574,_0x58be8a=_0x3b1bad[_0x36b905+'p']();}else if(_0x224f87&&_0x58be8a['replace'](/[NEXTwLDnWulZzTwP=]/g,'')===_0x224f87){_0x3b1bad[_0x51c3d6](_0x113574);}}_0x3b1bad[_0x51c3d6](_0x3b1bad[_0x4fdbbe]());}return 0x111b7b;};return _0x3a8768(++_0xb88d93,_0x2dc72c)>>_0xb88d93^_0x2dc72c;}(_0x4511,0x1f3,0x1f300),_0x4511){_0xod6_=_0x4511['length']^0x1f3;};function _0x35ed(_0x210856,_0x1b1021){_0x210856=~~'0x'['concat'](_0x210856['slice'](0x1));var _0x3f309d=_0x4511[_0x210856];if(_0x35ed['kgisuv']===undefined){(function(){var _0x4c5bfb=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1fc12a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4c5bfb['atob']||(_0x4c5bfb['atob']=function(_0x38804b){var _0x105832=String(_0x38804b)['replace'](/=+$/,'');for(var _0x21a9a3=0x0,_0x253788,_0x2c486a,_0x58e8fe=0x0,_0x52c1d1='';_0x2c486a=_0x105832['charAt'](_0x58e8fe++);~_0x2c486a&&(_0x253788=_0x21a9a3%0x4?_0x253788*0x40+_0x2c486a:_0x2c486a,_0x21a9a3++%0x4)?_0x52c1d1+=String['fromCharCode'](0xff&_0x253788>>(-0x2*_0x21a9a3&0x6)):0x0){_0x2c486a=_0x1fc12a['indexOf'](_0x2c486a);}return _0x52c1d1;});}());function _0x390122(_0x4c400d,_0x1b1021){var _0x1cd02d=[],_0x2ae812=0x0,_0x37ef25,_0x5ce5f7='',_0x189f5a='';_0x4c400d=atob(_0x4c400d);for(var _0x38c6af=0x0,_0x4b70c5=_0x4c400d['length'];_0x38c6af<_0x4b70c5;_0x38c6af++){_0x189f5a+='%'+('00'+_0x4c400d['charCodeAt'](_0x38c6af)['toString'](0x10))['slice'](-0x2);}_0x4c400d=decodeURIComponent(_0x189f5a);for(var _0x2b0400=0x0;_0x2b0400<0x100;_0x2b0400++){_0x1cd02d[_0x2b0400]=_0x2b0400;}for(_0x2b0400=0x0;_0x2b0400<0x100;_0x2b0400++){_0x2ae812=(_0x2ae812+_0x1cd02d[_0x2b0400]+_0x1b1021['charCodeAt'](_0x2b0400%_0x1b1021['length']))%0x100;_0x37ef25=_0x1cd02d[_0x2b0400];_0x1cd02d[_0x2b0400]=_0x1cd02d[_0x2ae812];_0x1cd02d[_0x2ae812]=_0x37ef25;}_0x2b0400=0x0;_0x2ae812=0x0;for(var _0x42ab98=0x0;_0x42ab98<_0x4c400d['length'];_0x42ab98++){_0x2b0400=(_0x2b0400+0x1)%0x100;_0x2ae812=(_0x2ae812+_0x1cd02d[_0x2b0400])%0x100;_0x37ef25=_0x1cd02d[_0x2b0400];_0x1cd02d[_0x2b0400]=_0x1cd02d[_0x2ae812];_0x1cd02d[_0x2ae812]=_0x37ef25;_0x5ce5f7+=String['fromCharCode'](_0x4c400d['charCodeAt'](_0x42ab98)^_0x1cd02d[(_0x1cd02d[_0x2b0400]+_0x1cd02d[_0x2ae812])%0x100]);}return _0x5ce5f7;}_0x35ed['EvXgKE']=_0x390122;_0x35ed['rvogxF']={};_0x35ed['kgisuv']=!![];}var _0x2a8aed=_0x35ed['rvogxF'][_0x210856];if(_0x2a8aed===undefined){if(_0x35ed['RpHLzi']===undefined){_0x35ed['RpHLzi']=!![];}_0x3f309d=_0x35ed['EvXgKE'](_0x3f309d,_0x1b1021);_0x35ed['rvogxF'][_0x210856]=_0x3f309d;}else{_0x3f309d=_0x2a8aed;}return _0x3f309d;};let httpResult,httpReq,httpResp;let userCookie=($[_0x35ed('‮0','Yps4')]()?process['env'][_0x35ed('‫1','5yPg')]:$['getdata']('ynzy'))||'';let userCGkey=($['isNode']()?process['env'][_0x35ed('‫2','Qrb6')]:$['getdata']('CGkey'))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();const {machineId,machineIdSync}=require(_0x35ed('‫3','(COY'));machineId()[_0x35ed('‫4','%^vh')](_0x380427=>{});let uuid=machineIdSync();class UserInfo{constructor(_0xcb6f9b){var _0x577adf={'kHKGZ':function(_0x2ea15d,_0x3b1a18){return _0x2ea15d!==_0x3b1a18;},'MIDWu':'tYlFY'};this['index']=++userIdx;this[_0x35ed('‮5','MaP(')]=this['index'];this[_0x35ed('‮6','#UVy')]=![];this['canRead']=![];try{if(_0x577adf[_0x35ed('‫7','#UVy')]('tYlFY',_0x577adf['MIDWu'])){this[_0x35ed('‮8','Yps4')]=result['data'][_0x35ed('‮9','EbsD')][''+num][_0x35ed('‫a','aI0]')];$['logAndNotify']('账号['+this['name']+_0x35ed('‮b','6yxa')+this[_0x35ed('‮c','g@#V')]+'\x20任务已完成');num++;}else{this[_0x35ed('‫d',')*97')]=$[_0x35ed('‫e','e]P0')](_0xcb6f9b);this[_0x35ed('‮f','3)4I')]=!![];}}catch(_0x42d40d){this[_0x35ed('‮10','8MUL')]=![];$[_0x35ed('‫11','Vguc')]('账号['+this['index']+_0x35ed('‫12','BVXE'));}}async[_0x35ed('‫13','!USX')](){var _0x31efe8={'PwaEj':function(_0x628d92,_0xa291f3,_0x864c0b,_0x1dfe4b){return _0x628d92(_0xa291f3,_0x864c0b,_0x1dfe4b);},'mDFMa':function(_0x3a3c59,_0x3b4180,_0x53da0b){return _0x3a3c59(_0x3b4180,_0x53da0b);},'tYGAM':_0x35ed('‮14','2C$N'),'XELas':function(_0x516e45,_0x573b87){return _0x516e45==_0x573b87;},'EJVzA':function(_0x34e200,_0x246cf3){return _0x34e200!==_0x246cf3;},'ROltO':_0x35ed('‮15','3)4I')};try{let _0x59d064=_0x35ed('‮16','2C$N');let _0x4d13c3='';let _0x237b2c=''+this['param']['Authorization'];let _0x18eb02=_0x31efe8[_0x35ed('‮17','%^vh')](populateUrlObject,_0x59d064,_0x237b2c,_0x4d13c3);delete _0x18eb02[_0x35ed('‮18','NeNs')][_0x35ed('‫19','5yPg')];await _0x31efe8[_0x35ed('‮1a','PBCj')](httpRequest,_0x31efe8[_0x35ed('‫1b','Ft18')],_0x18eb02);let _0x3cdb96=httpResult;if(!_0x3cdb96)return;if(_0x31efe8['XELas'](_0x3cdb96[_0x35ed('‫1c','qiNH')],0x0)){$[_0x35ed('‮1d','Ft18')]('账号['+this[_0x35ed('‮1e','6yxa')]+_0x35ed('‮1f','4P9M'));}else{if(_0x31efe8[_0x35ed('‫20','NeNs')](_0x31efe8['ROltO'],_0x31efe8[_0x35ed('‫21','3)4I')])){$['logAndNotify'](_0x35ed('‮22','MaP(')+this[_0x35ed('‮5','MaP(')]+_0x35ed('‫23',')*97')+_0x3cdb96[_0x35ed('‫24','c*c]')][_0x35ed('‮25','6yxa')]+'\x20喂养进度'+_0x3cdb96[_0x35ed('‫26','&h(u')][_0x35ed('‮27',')vC1')]+'\x20现有糖果'+_0x3cdb96['data'][_0x35ed('‮28','nL[s')]+_0x35ed('‫29','NeNs'));this[_0x35ed('‫2a','MhX%')]=!![];this[_0x35ed('‫2b','WlI$')]=!![];}else{$['logAndNotify']('账号['+this[_0x35ed('‮2c','&h(u')]+']'+_0x3cdb96['msg']);}}}catch(_0x3d8295){}finally{return Promise[_0x35ed('‫2d','NeNs')](0x1);}}async[_0x35ed('‫2e','*TTR')](){var _0x401463={'StQxR':'param=eyJhY3Rpb24iOiJNQiJ9','ZISGr':function(_0x3c7882,_0x31dd6b,_0xb10886,_0x13e659,_0x414c8b){return _0x3c7882(_0x31dd6b,_0xb10886,_0x13e659,_0x414c8b);},'xSuQe':function(_0x5f16fd,_0x1447ce,_0x41bf13){return _0x5f16fd(_0x1447ce,_0x41bf13);},'jEVMm':_0x35ed('‫2f','c*c]'),'DGLSG':function(_0x4a89e7,_0x125de2){return _0x4a89e7==_0x125de2;},'aObXZ':function(_0x2b50f7,_0x4bf7f6){return _0x2b50f7===_0x4bf7f6;},'NpwRf':_0x35ed('‮30','#UVy'),'EtwbV':_0x35ed('‮31','Vn%2')};try{let _0x451f3a=_0x35ed('‮32','3)4I');let _0x36ceaa=_0x401463['StQxR'];let _0x34e0f3='26';let _0x25baab=''+this['param'][_0x35ed('‮33','nL[s')];let _0x14531f=_0x401463['ZISGr'](populateUrlObject,_0x451f3a,_0x25baab,_0x34e0f3,_0x36ceaa);await _0x401463[_0x35ed('‮34','8MUL')](httpRequest,_0x401463[_0x35ed('‫35','c*c]')],_0x14531f);let _0x5639be=httpResult;if(!_0x5639be)return;if(_0x401463[_0x35ed('‮36','qiNH')](_0x5639be[_0x35ed('‮37','Qrb6')],0x0)){$[_0x35ed('‮38','Vn%2')](_0x35ed('‮39','Qrb6')+this[_0x35ed('‮3a','n*XB')]+']获得'+_0x5639be[_0x35ed('‫3b','S6p]')]['signScore']+'诺米');}else{$[_0x35ed('‮3c','ZrL!')]('账号['+this['name']+']'+_0x5639be[_0x35ed('‮3d','26*w')]);}}catch(_0x2c1545){}finally{if(_0x401463[_0x35ed('‮3e',')*97')](_0x401463['NpwRf'],_0x401463[_0x35ed('‫3f','qiNH')])){$['logAndNotify']('账号['+this['name']+_0x35ed('‮40','4P9M'));}else{return Promise[_0x35ed('‮41','5yPg')](0x1);}}}async[_0x35ed('‮42','sOUS')](){var _0x3da3dc={'hMSZZ':function(_0x10ae57,_0x7aa3c4,_0x3e3995,_0x3b5120){return _0x10ae57(_0x7aa3c4,_0x3e3995,_0x3b5120);},'Hselr':function(_0x1ae910,_0x39c889,_0x2513ea){return _0x1ae910(_0x39c889,_0x2513ea);},'CSTTQ':_0x35ed('‮43','sOUS'),'RQtqB':function(_0x1d7a31,_0x75c7a7){return _0x1d7a31==_0x75c7a7;},'iyhBH':function(_0x11b3fa,_0x4d5e17){return _0x11b3fa<_0x4d5e17;},'HWONN':function(_0x1dbd4f,_0x1a9320){return _0x1dbd4f==_0x1a9320;}};try{let _0xb83cda=_0x35ed('‫44','qiNH');let _0x2f56f7='';let _0x3f52e6=''+this[_0x35ed('‫45','MaP(')][_0x35ed('‫46','sD6g')];let _0x33f6d6=_0x3da3dc[_0x35ed('‮47','Yps4')](populateUrlObject,_0xb83cda,_0x3f52e6,_0x2f56f7);delete _0x33f6d6['headers'][_0x35ed('‫48','X$wD')];await _0x3da3dc[_0x35ed('‮49','#UVy')](httpRequest,_0x3da3dc[_0x35ed('‫4a','NeNs')],_0x33f6d6);let _0x3e735d=httpResult;if(!_0x3e735d)return;if(_0x3da3dc[_0x35ed('‮4b','xE&f')](_0x3e735d[_0x35ed('‮4c','xE&f')],0x0)){if(_0x3e735d[_0x35ed('‮4d','ZrL!')]['specialTask'][0x0][_0x35ed('‮4e','6b$a')]=0x0){await $[_0x35ed('‮4f','Qrb6')](0xbb8);await this['receiveCandyl']();}else{$[_0x35ed('‮50','PBCj')]('账号['+this[_0x35ed('‮51','8MUL')]+_0x35ed('‮52','2C$N'));}for(let _0xdc49f9=0x0;_0x3da3dc[_0x35ed('‮53','NeNs')](_0xdc49f9,0x4);_0xdc49f9++){if(_0x3da3dc['HWONN'](_0x3e735d['data'][_0x35ed('‫54','8MUL')][''+_0xdc49f9]['status'],-0x1)){var _0x26dfbf=_0x35ed('‫55','z3ub')[_0x35ed('‮56','BVXE')]('|'),_0x3686b8=0x0;while(!![]){switch(_0x26dfbf[_0x3686b8++]){case'0':this[_0x35ed('‮57','BLXr')]=_0x3e735d[_0x35ed('‮58','%&o4')]['allTask'][''+_0xdc49f9]['recordId'];continue;case'1':this['awardContent']=_0x3e735d[_0x35ed('‮59','xE&f')][_0x35ed('‮5a','e]P0')][''+_0xdc49f9][_0x35ed('‮5b','n*XB')];continue;case'2':await this[_0x35ed('‮5c','aI0]')]();continue;case'3':this[_0x35ed('‮5d','8MUL')]=_0x3e735d['data'][_0x35ed('‫5e','g@#V')][''+_0xdc49f9][_0x35ed('‮5f','(COY')];continue;case'4':await $['wait'](0x1388);continue;}break;}}else{this['taskName']=_0x3e735d['data'][_0x35ed('‮60',')vC1')][''+num][_0x35ed('‮c','g@#V')];$[_0x35ed('‮61','4P9M')](_0x35ed('‫62','sD6g')+this[_0x35ed('‫63','aI0]')]+_0x35ed('‮64','&h(u')+this['taskName']+'\x20任务已完成');num++;}}}}catch(_0x572367){}finally{return Promise[_0x35ed('‮41','5yPg')](0x1);}}async[_0x35ed('‮65','Ft18')](){var _0x45b529={'WHATw':function(_0x3e7c50,_0x3b4d66,_0x408004,_0xf58381,_0x248427){return _0x3e7c50(_0x3b4d66,_0x408004,_0xf58381,_0x248427);},'wmCKu':_0x35ed('‫66',')@uS'),'Zjhao':function(_0x5717ba,_0x488887){return _0x5717ba==_0x488887;}};try{let _0x3ff9b4=_0x35ed('‫67','Vn%2');let _0x978f27=_0x35ed('‮68','4P9M')+this[_0x35ed('‫69','z3ub')];let _0xab62f7=''+this['param'][_0x35ed('‫6a','aI0]')];let _0x1668e1='12';let _0x2fb2d1=_0x45b529['WHATw'](populateUrlObject,_0x3ff9b4,_0xab62f7,_0x1668e1,_0x978f27);await httpRequest(_0x45b529['wmCKu'],_0x2fb2d1);let _0x5d61b7=httpResult;if(!_0x5d61b7)return;if(_0x45b529[_0x35ed('‮6b','Ft18')](_0x5d61b7[_0x35ed('‮6c','EbsD')],0x1)){$[_0x35ed('‫6d','^Y@Q')](_0x35ed('‮6e','n*XB')+this[_0x35ed('‮6f','X$wD')]+']任务:\x20'+this[_0x35ed('‫70',')@uS')]);await $['wait'](0x1388);await this[_0x35ed('‫71',')*97')]();}else{$['logAndNotify'](_0x35ed('‫72','7bSF')+this[_0x35ed('‫73','EbsD')]+_0x35ed('‫74','4P9M'));}}catch(_0x44ffd1){}finally{return Promise['resolve'](0x1);}}async['receiveCandy'](){var _0x200587={'JjCjN':function(_0x5f9eff,_0x157b15,_0x47de06,_0x4af317,_0x39afb7){return _0x5f9eff(_0x157b15,_0x47de06,_0x4af317,_0x39afb7);},'sAGdD':function(_0x3312e7,_0x571013,_0x513099){return _0x3312e7(_0x571013,_0x513099);},'hSEnR':'post'};try{let _0x3c11c5='https://hms.cignacmb.com/activity/cignaInvestment/receiveCandy';let _0x54a4ed=_0x35ed('‮75','e]P0')+this[_0x35ed('‫76','!USX')];console[_0x35ed('‮77','%&o4')](_0x54a4ed);let _0x1a33aa=''+this['param'][_0x35ed('‫78','2C$N')];let _0x312f87='17';let _0x5aadb0=_0x200587[_0x35ed('‮79','!USX')](populateUrlObject,_0x3c11c5,_0x1a33aa,_0x312f87,_0x54a4ed);await _0x200587['sAGdD'](httpRequest,_0x200587['hSEnR'],_0x5aadb0);let _0x389d39=httpResult;if(!_0x389d39)return;console['log'](_0x389d39);if(_0x389d39[_0x35ed('‫7a','EbsD')]==0x0){$[_0x35ed('‮7b','n*XB')](_0x35ed('‫72','7bSF')+this[_0x35ed('‫7c','Vn%2')]+_0x35ed('‫7d','Vguc')+_0x389d39[_0x35ed('‫7e','z3ub')][0x0][_0x35ed('‮7f','^Y@Q')]+_0x35ed('‫80','#UVy'));}else{$[_0x35ed('‫81','BVXE')](_0x35ed('‫82','PBCj')+this[_0x35ed('‫83','qiNH')]+']'+_0x389d39[_0x35ed('‮84','3)4I')]);}}catch(_0x55576){}finally{return Promise[_0x35ed('‮85','X$wD')](0x1);}}async[_0x35ed('‫86','sOUS')](){var _0x643e91={'DihIz':function(_0x5796fd,_0x4213be,_0x1a7370,_0x1d0fed){return _0x5796fd(_0x4213be,_0x1a7370,_0x1d0fed);},'wYcKI':_0x35ed('‫87','WlI$'),'IOhqr':function(_0x52d671,_0x422fe8,_0x417bda){return _0x52d671(_0x422fe8,_0x417bda);},'fZOOI':'post','QgWRS':function(_0x15d205,_0x462ef0){return _0x15d205==_0x462ef0;},'tuZFn':function(_0x3e94fd,_0x4831a0){return _0x3e94fd!==_0x4831a0;},'ibzPi':'VlYeO','lxReo':'djDNM','rrpyH':_0x35ed('‮88','sD6g'),'orhFn':'ZukOp'};try{let _0x2ba9e2=_0x35ed('‫89','PBCj');let _0x180f9d='';let _0x580b8f=''+this[_0x35ed('‫8a','!USX')][_0x35ed('‫8b','26*w')];let _0x53fed0=_0x643e91[_0x35ed('‫8c','%^vh')](populateUrlObject,_0x2ba9e2,_0x580b8f,_0x180f9d);delete _0x53fed0['headers'][_0x643e91['wYcKI']];await _0x643e91[_0x35ed('‮8d','c*c]')](httpRequest,_0x643e91[_0x35ed('‫8e',')@uS')],_0x53fed0);let _0x11ed36=httpResult;if(!_0x11ed36)return;if(_0x643e91[_0x35ed('‮8f','nL[s')](_0x11ed36[_0x35ed('‫90','8MUL')],0x0)){if(_0x643e91['tuZFn'](_0x643e91[_0x35ed('‫91','Yps4')],_0x643e91[_0x35ed('‫92','EbsD')])){$[_0x35ed('‮50','PBCj')]('账号['+this[_0x35ed('‮93','%&o4')]+_0x35ed('‮94','sD6g')+_0x11ed36['data']['growthLevel']+_0x35ed('‮95','%&o4')+_0x11ed36['data'][_0x35ed('‫96','PBCj')]+_0x35ed('‫97','Vguc')+_0x11ed36[_0x35ed('‫98',')*97')][_0x35ed('‮99','n*XB')]+'🍬\x20');this[_0x35ed('‮9a','BVXE')]=!![];this['canRead']=!![];}else{return Promise['resolve'](0x1);}}else{$['logAndNotify'](_0x35ed('‫9b','5yPg')+this[_0x35ed('‫9c','h[Jq')]+']'+_0x11ed36[_0x35ed('‮9d','2C$N')]);this['valid']=![];this[_0x35ed('‫9e','MaP(')]=![];}}catch(_0x4f3213){}finally{if(_0x643e91[_0x35ed('‮9f','ZrL!')]!==_0x643e91[_0x35ed('‮a0','nL[s')]){return Promise[_0x35ed('‮a1','%&o4')](0x1);}else{$[_0x35ed('‫a2','5yPg')](_0x35ed('‫72','7bSF')+this[_0x35ed('‫a3','Qrb6')]+_0x35ed('‫a4','aI0]')+result[_0x35ed('‮a5','6b$a')]['signScore']+'诺米');}}}async[_0x35ed('‮a6','*TTR')](){var _0x200b4e={'Lhbnw':function(_0x5012b1,_0x28fa0c,_0x1f2cc5){return _0x5012b1(_0x28fa0c,_0x1f2cc5);},'rKXAp':_0x35ed('‮a7',')*97'),'fJxgH':_0x35ed('‮a8','4P9M'),'bqCSK':function(_0x4148e5,_0x40789e){return _0x4148e5==_0x40789e;},'smgfY':function(_0xc09bb6,_0x454b3c){return _0xc09bb6!==_0x454b3c;},'mqnzu':_0x35ed('‫a9','!USX'),'ptYIv':_0x35ed('‮aa','e]P0'),'JSeGw':function(_0x40d32d,_0x19b5ab){return _0x40d32d===_0x19b5ab;}};try{let _0x23ac74=_0x35ed('‫ab','z3ub');let _0x58545e='';let _0x1760b8=''+this[_0x35ed('‮ac','&h(u')][_0x35ed('‮ad','7bSF')];let _0x57a2f0=_0x200b4e['Lhbnw'](populateUrlObject,_0x23ac74,_0x1760b8);delete _0x57a2f0['headers'][_0x200b4e[_0x35ed('‫ae','MaP(')]];await httpRequest(_0x200b4e[_0x35ed('‫af','xE&f')],_0x57a2f0);let _0x3ac7e6=httpResult;if(!_0x3ac7e6)return;if(_0x200b4e[_0x35ed('‮b0','MhX%')](_0x3ac7e6[_0x35ed('‫b1','Yps4')],0x0)){$[_0x35ed('‮b2','MaP(')](_0x35ed('‮b3','NeNs')+this[_0x35ed('‫b4','Ft18')]+_0x35ed('‫b5','26*w')+_0x3ac7e6[_0x35ed('‫b6','z3ub')]);}else{if(_0x200b4e[_0x35ed('‮b7','^Y@Q')](_0x200b4e[_0x35ed('‫b8','h[Jq')],_0x200b4e['ptYIv'])){$['logAndNotify']('账号['+this[_0x35ed('‫b9','Vguc')]+']'+_0x3ac7e6['msg']);}else{return Promise[_0x35ed('‫ba','2bDa')](0x1);}}}catch(_0x10af3b){}finally{if(_0x200b4e['JSeGw'](_0x35ed('‮bb','Qrb6'),_0x35ed('‮bc','ZrL!'))){return Promise[_0x35ed('‮bd','Ft18')](0x1);}else{return Promise['resolve'](0x1);}}}}!(async()=>{var _0x424dfc={'PbAfS':_0x35ed('‫be','Qrb6'),'NVnxo':'application/x-www-form-urlencoded;charset=UTF-8','eoInS':'\x0a未找到CK\x20请阅读脚本说明','deULS':function(_0x16f46f,_0x4abf5){return _0x16f46f!==_0x4abf5;},'xmfZK':'undefined','KDmKm':function(_0x5639e2){return _0x5639e2();},'mzgXe':function(_0x4f475a,_0x3c94c0){return _0x4f475a>_0x3c94c0;},'hLviG':function(_0x54226e,_0x56d9e4){return _0x54226e!==_0x56d9e4;},'GESvx':function(_0x41a7ca,_0x4920e8){return _0x41a7ca>_0x4920e8;},'ZjNMD':'\x0a--------------\x20庄园喂养\x20--------------','mHvpl':function(_0x7ce9a6,_0x250ee2){return _0x7ce9a6===_0x250ee2;},'nwvSk':'zzyyg','GrhsV':function(_0xb62abd,_0x1d6415){return _0xb62abd>=_0x1d6415;},'PiLWV':function(_0x2c55f5,_0x542f3c){return _0x2c55f5<=_0x542f3c;},'snkBc':function(_0x15eb0d){return _0x15eb0d();}};if(_0x424dfc['deULS'](typeof $request,_0x424dfc[_0x35ed('‮bf',')vC1')])){}else{await _0x424dfc['KDmKm'](km);if(!(await _0x424dfc['KDmKm'](checkEnv)))return;let _0x38897=[];let _0x1edf61=userList[_0x35ed('‮c0','NeNs')](_0x13ecae=>_0x13ecae[_0x35ed('‮c1','%^vh')]);if(_0x424dfc['mzgXe'](_0x1edf61['length'],0x0)){$['logAndNotify'](_0x35ed('‮c2','sOUS'));_0x38897=[];for(let _0x53c4a0 of _0x1edf61){if(_0x424dfc[_0x35ed('‮c3','2bDa')]('spjNy',_0x35ed('‫c4','nL[s'))){urlObject['body']=body;urlObject[_0x35ed('‮c5','aI0]')][_0x424dfc[_0x35ed('‫c6','h[Jq')]]=_0x424dfc[_0x35ed('‮c7','4P9M')];urlObject[_0x35ed('‮c8','3)4I')][_0x35ed('‮c9','%QPj')]=urlObject[_0x35ed('‮ca','e]P0')]?urlObject[_0x35ed('‮cb','BVXE')][_0x35ed('‫cc','Vn%2')]:0x0;}else{_0x38897[_0x35ed('‮cd','7bSF')](_0x53c4a0[_0x35ed('‮ce','BLXr')]());}}await Promise['all'](_0x38897);_0x1edf61=_0x1edf61[_0x35ed('‫cf','2bDa')](_0x390668=>_0x390668[_0x35ed('‫d0','3)4I')]);if(_0x424dfc[_0x35ed('‮d1',')@uS')](_0x1edf61[_0x35ed('‫d2','&h(u')],0x0)){$['logAndNotify'](_0x424dfc[_0x35ed('‮d3','%QPj')]);_0x38897=[];for(let _0x3b7e49 of _0x1edf61[_0x35ed('‮c0','NeNs')](_0x3bbe93=>_0x3bbe93['canRead'])){if(_0x424dfc[_0x35ed('‫d4','Yps4')](_0x424dfc[_0x35ed('‮d5','WlI$')],_0x424dfc[_0x35ed('‮d6','h[Jq')])){var _0x214667=_0x35ed('‮d7','%QPj')[_0x35ed('‮d8','BLXr')]('|'),_0x2f69ba=0x0;while(!![]){switch(_0x214667[_0x2f69ba++]){case'0':if(_0x424dfc[_0x35ed('‫d9','4P9M')](h,0x6)&&_0x424dfc[_0x35ed('‫da','!USX')](h,0x8)){_0x38897[_0x35ed('‫db','c*c]')](_0x3b7e49['checkin']());await $[_0x35ed('‫dc','Ft18')](0x1388);_0x38897['push'](_0x3b7e49[_0x35ed('‮dd','(COY')]());}else{$[_0x35ed('‮3c','ZrL!')](_0x35ed('‮de','5yPg'));}continue;case'1':$[_0x35ed('‮50','PBCj')]('\x0a--------------\x20双签、任务\x20--------------');continue;case'2':await $['wait'](0x1f40);continue;case'3':_0x38897['push'](_0x3b7e49['getUserTaskList']());continue;case'4':_0x38897[_0x35ed('‮df','aI0]')](_0x3b7e49['investCandy']());continue;case'5':h=_0x424dfc[_0x35ed('‮e0','6yxa')](local_hours);continue;}break;}}else{console[_0x35ed('‮e1','z3ub')](_0x424dfc[_0x35ed('‮e2','%QPj')]);return;}}await Promise[_0x35ed('‫e3','2C$N')](_0x38897);}}await $[_0x35ed('‫e4','4P9M')]();}})()[_0x35ed('‮e5','MaP(')](_0xc9bc2d=>console[_0x35ed('‮e6','4P9M')](_0xc9bc2d))[_0x35ed('‫e7','sD6g')](()=>$['done']());async function km(){var _0xd5a4c4={'wxSeu':function(_0x1b706e,_0x3d6468,_0x3da0bf){return _0x1b706e(_0x3d6468,_0x3da0bf);},'jwVLw':function(_0x44b63f,_0x58a13a,_0x570608){return _0x44b63f(_0x58a13a,_0x570608);},'YEdoB':_0x35ed('‫e8','xE&f'),'oHPtA':_0x35ed('‫e9','e]P0'),'wlosE':_0x35ed('‫ea','MhX%'),'TUeDh':function(_0x32a7f0,_0x2e0819){return _0x32a7f0==_0x2e0819;},'ntKKx':function(_0x37ab29,_0x4c6363){return _0x37ab29(_0x4c6363);},'xEKPA':function(_0x3ce856,_0x4046a9){return _0x3ce856==_0x4046a9;},'CwHrs':function(_0x25c458,_0x2d5e30){return _0x25c458==_0x2d5e30;}};try{let _0x410a39='http://km.meetclover.ml/api.php?act=km_logon&app=10001&kami='+userCGkey+_0x35ed('‫eb','%^vh')+uuid;let _0x37a2a5='';let _0x577fac=_0xd5a4c4[_0x35ed('‫ec','#UVy')](populateUrlObject,_0x410a39,_0x37a2a5);await _0xd5a4c4[_0x35ed('‮ed','qiNH')](httpRequest,_0xd5a4c4[_0x35ed('‫ee','7bSF')],_0x577fac);delete _0x577fac[_0x35ed('‮ef','sOUS')][_0xd5a4c4[_0x35ed('‫f0','sD6g')]];delete _0x577fac[_0x35ed('‮c8','3)4I')][_0xd5a4c4[_0x35ed('‮f1','6yxa')]];let _0x1c70c4=httpResult;if(_0xd5a4c4[_0x35ed('‮f2','8MUL')](_0x1c70c4[_0x35ed('‮f3','Qrb6')],0xc8)){this[_0x35ed('‮f4','h[Jq')]=_0x1c70c4[_0x35ed('‮9d','2C$N')][_0x35ed('‫f5','7bSF')];this[_0x35ed('‮f6','n*XB')]=_0xd5a4c4[_0x35ed('‫f7','!USX')](timestampToTime,this['time']);$['logAndNotify'](_0x35ed('‫f8','2bDa')+this[_0x35ed('‫f9','%&o4')]);await $[_0x35ed('‫fa','xE&f')](0xbb8);this[_0x35ed('‮fb','S6p]')]=!![];this[_0x35ed('‮fc','h[Jq')]=!![];}if(_0xd5a4c4[_0x35ed('‫fd','Vguc')](_0x1c70c4['code'],0x95)||_0xd5a4c4[_0x35ed('‫fe','6yxa')](_0x1c70c4['code'],0x94)||_0xd5a4c4['CwHrs'](_0x1c70c4[_0x35ed('‫ff','EbsD')],0x70)){$[_0x35ed('‮100','Yps4')](_0x1c70c4[_0x35ed('‮101','6b$a')]+_0x35ed('‮102','Yps4'));}if(_0x1c70c4[_0x35ed('‮103','3)4I')]==0x192){$[_0x35ed('‫11','Vguc')](_0x1c70c4[_0x35ed('‫104','WlI$')]+_0x35ed('‮105','#UVy'));}}catch(_0xcabf40){}finally{return Promise[_0x35ed('‫106','(COY')](0x1);}}async function checkEnv(){var _0x81ce03={'YbpaW':_0x35ed('‮107','5yPg'),'JkvPJ':'application/x-www-form-urlencoded;charset=UTF-8','SSUEc':function(_0x511f66,_0x59b3d1){return _0x511f66>_0x59b3d1;},'cauYg':function(_0x43ad62,_0x24b3f0){return _0x43ad62!==_0x24b3f0;},'XXMtx':_0x35ed('‮108','e]P0'),'ajquv':function(_0x28245a,_0x5629f7){return _0x28245a!==_0x5629f7;},'lKhBU':_0x35ed('‫109','e]P0'),'UnGbH':_0x35ed('‫10a','n*XB'),'JBvfO':_0x35ed('‮10b',')vC1'),'qBaLp':'\x0a未找到CK\x20请阅读脚本说明'};if(userCookie){let _0x2ab548=envSplitor[0x0];for(let _0x217f62 of envSplitor){if(_0x81ce03['SSUEc'](userCookie[_0x35ed('‮10c',')vC1')](_0x217f62),-0x1)){if(_0x81ce03['cauYg'](_0x81ce03['XXMtx'],_0x81ce03['XXMtx'])){$[_0x35ed('‮10d','(COY')](_0x35ed('‮10e','&h(u')+this[_0x35ed('‫10f','2C$N')]+']'+result[_0x35ed('‮110','qiNH')]);}else{_0x2ab548=_0x217f62;break;}}}for(let _0x42b330 of userCookie[_0x35ed('‮111','aI0]')](_0x2ab548)){if(_0x81ce03[_0x35ed('‮112','nL[s')]('eHQVX',_0x81ce03[_0x35ed('‫113',')vC1')])){if(_0x42b330)userList[_0x35ed('‮114','BVXE')](new UserInfo(_0x42b330));}else{let _0x48d4a5=url[_0x35ed('‮115','7bSF')]('//','/')['split']('/')[0x1];let _0x4a9364={'url':url,'headers':{'Host':_0x48d4a5,'Content-Length':Content,'Authorization':ck,'User-Agent':defaultUA,'Content-Type':_0x81ce03[_0x35ed('‮116','MaP(')]},'timeout':0x1388};if(body){_0x4a9364[_0x35ed('‮117',')vC1')]=body;_0x4a9364['headers'][_0x35ed('‮118','*TTR')]=_0x81ce03['JkvPJ'];_0x4a9364[_0x35ed('‫119','ZrL!')][_0x35ed('‫11a',')vC1')]=_0x4a9364[_0x35ed('‫11b','Yps4')]?_0x4a9364[_0x35ed('‮11c','26*w')]['length']:0x0;}return _0x4a9364;}}userCount=userList['length'];}else{if(_0x81ce03['ajquv'](_0x81ce03[_0x35ed('‮11d','Vn%2')],_0x81ce03[_0x35ed('‮11e','sD6g')])){console[_0x35ed('‮11f','Vguc')](_0x81ce03['qBaLp']);return;}else{return Promise[_0x35ed('‫120','6b$a')](0x1);}}console[_0x35ed('‫121','NeNs')](_0x35ed('‮122',')vC1')+userCount+'个账号');return!![];}function populateUrlObject(_0x45fc49,_0x513108,_0x309803,_0x54a906=''){var _0x2bcc4f={'hEkvK':'application/x-www-form-urlencoded','quTcr':_0x35ed('‫123','%^vh')};let _0x1ac706=_0x45fc49['replace']('//','/')[_0x35ed('‫124','3)4I')]('/')[0x1];let _0x3c7a2a={'url':_0x45fc49,'headers':{'Host':_0x1ac706,'Content-Length':_0x309803,'Authorization':_0x513108,'User-Agent':defaultUA,'Content-Type':_0x2bcc4f[_0x35ed('‮125','3)4I')]},'timeout':0x1388};if(_0x54a906){_0x3c7a2a[_0x35ed('‫126','ZrL!')]=_0x54a906;_0x3c7a2a[_0x35ed('‮127','2C$N')][_0x2bcc4f[_0x35ed('‮128','WlI$')]]=_0x35ed('‫129','Vn%2');_0x3c7a2a[_0x35ed('‮12a','6b$a')][_0x35ed('‫12b','MaP(')]=_0x3c7a2a[_0x35ed('‮12c','EbsD')]?_0x3c7a2a[_0x35ed('‮12d',')*97')]['length']:0x0;}return _0x3c7a2a;}async function httpRequest(_0x10b0ed,_0x20280b){var _0x1e07fa={'MOaDE':function(_0x14ed2a){return _0x14ed2a();},'bcHif':function(_0x266bab,_0x3bc889){return _0x266bab==_0x3bc889;},'VDxAB':'GZXMK','PtKMh':_0x35ed('‫12e','%QPj'),'bnYhx':_0x35ed('‫12f','EbsD')};httpResult=null,httpReq=null,httpResp=null;return new Promise(_0x3d829c=>{var _0x479ecf={'ZZVhs':function(_0x266560){return _0x1e07fa[_0x35ed('‮130','WlI$')](_0x266560);},'kirwf':function(_0x29d2ea,_0x41eb2f){return _0x1e07fa[_0x35ed('‮131','aI0]')](_0x29d2ea,_0x41eb2f);},'CwvWy':_0x35ed('‮132','BLXr'),'JvfXM':function(_0x404476,_0x28f8bc){return _0x404476!==_0x28f8bc;},'XUmfu':_0x1e07fa[_0x35ed('‮133','S6p]')],'OAQum':_0x35ed('‮134','%QPj'),'EUOmt':_0x1e07fa[_0x35ed('‫135','8MUL')]};if(_0x1e07fa['bnYhx']===_0x1e07fa[_0x35ed('‮136','8MUL')]){$[_0x35ed('‮137','26*w')](_0x10b0ed,_0x20280b,async(_0x18ddee,_0x578318,_0x2121d7)=>{var _0x235871={'BlpPK':function(_0x5228f0){return _0x479ecf[_0x35ed('‮138','#UVy')](_0x5228f0);}};try{httpReq=_0x578318;httpResp=_0x2121d7;if(_0x18ddee){console[_0x35ed('‮139','8MUL')](_0x10b0ed+_0x35ed('‫13a','7bSF'));console[_0x35ed('‫13b','EbsD')](JSON['stringify'](_0x18ddee));}else{if(_0x2121d7[_0x35ed('‮13c','4P9M')]){if(_0x479ecf[_0x35ed('‫13d','8MUL')](typeof _0x2121d7[_0x35ed('‫13e','z3ub')],_0x479ecf[_0x35ed('‫13f','Qrb6')])){httpResult=_0x2121d7[_0x35ed('‮140','6b$a')];}else{try{httpResult=JSON['parse'](_0x2121d7[_0x35ed('‮ca','e]P0')]);}catch(_0x58670a){if(_0x479ecf['JvfXM'](_0x479ecf['XUmfu'],_0x479ecf[_0x35ed('‮141','26*w')])){_0x235871[_0x35ed('‫142','!USX')](_0x3d829c);}else{httpResult=_0x2121d7[_0x35ed('‫143','n*XB')];}}}}}}catch(_0x3f6df0){if(_0x479ecf[_0x35ed('‫144','Vguc')](_0x35ed('‮145','g@#V'),_0x479ecf['OAQum'])){console[_0x35ed('‮146','e]P0')](_0x3f6df0);}else{console['log'](_0x10b0ed+_0x35ed('‮147','!USX'));console[_0x35ed('‮148','S6p]')](JSON['stringify'](_0x18ddee));}}finally{if(_0x479ecf[_0x35ed('‮149','3)4I')]===_0x479ecf['EUOmt']){_0x479ecf[_0x35ed('‮14a','c*c]')](_0x3d829c);}else{httpResult=_0x2121d7[_0x35ed('‮14b','%QPj')];}}});}else{this[_0x35ed('‫14c','qiNH')]=![];$[_0x35ed('‮14d','aI0]')]('账号['+this['index']+_0x35ed('‫14e','(COY'));}});};_0xod6='jsjiami.com.v6';
////////////////////////////////////////////////////////////////////
function local_hours() {
    let myDate = new Date();
    h = myDate.getHours();
    return h;
}
function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
    return Y+M+D;
}

function getNowFormatDate() {
        var date = new Date();
        var separator = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + separator + month + separator + strDate;
        return currentdate;
    }
function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：\n`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            }
            else {
                s = this.setval(t, e);
            }
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => {})) {
            if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if(m == 'get' && t.headers) {
                delete t.headers["Content-Type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["Content-Type"]) t.headers["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if(this.isSurge() || this.isLoon()) {
                if(this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1});
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if(m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })),
                $task.fetch(t).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if(!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if($.isNode()){
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n"))
        }
        getMin(a,b){
            return ((a<b) ? a : b)
        }
        getMax(a,b){
            return ((a<b) ? b : a)
        }
        padStr(num,length,padding='0') {
            let numStr = String(num)
            let numPad = (length>numStr.length) ? (length-numStr.length) : 0
            let retStr = ''
            for(let i=0; i<numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj,c,encodeUrl=false) {
            let ret = []
            for(let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if(v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys+'='+v)
            }
            return ret.join(c);
        }
        str2json(str,decodeUrl=false) {
            let ret = {}
            for(let item of str.split('&')) {
                if(!item) continue;
                let idx = item.indexOf('=')
                if(idx == -1) continue;
                let k = item.substr(0,idx)
                let v = item.substr(idx+1)
                if(decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len,charset='abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random()*charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random()*a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}