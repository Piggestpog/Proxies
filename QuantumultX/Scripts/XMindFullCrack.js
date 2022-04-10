/*
Xmind Unlock annual subscriptions （by LTribe）
Download Link : http://t.cn/A6zhp3Bm
Thanks To@xiaozhuolao's membership data.

[rewrite_local]
https?:\/\/.*\.xmind\..*\/_res\/devices url script-response-body https://raw.githubusercontent.com/Piggestpog/Proxies/main/QuantumultX/Scripts/XMindFullCrack.js
[mitm]
hostname = *.xmind.*
*/

let obj = JSON.parse($response.body);

obj = {
  "raw_data": "S0MY6Wu5wpkW52RE5XmMkSMfTBvnytTwIJODrtVDjnA0axrORbnv9gh1RC4W3/ejTfQhNBb7CVxxpbYnBBk2tHc4gAODhsuGpHkltYNL/P5dfORSpdbiNkAZr5aBBbHS/dNlaYjLYyBkq9Ohfe0QS9PeXOWLbDdNA6kqidLJysw=",
  "license": {
    "status": "sub",
    "expireTime": 9999999999999
  },
  "_code": 200
}
  
$done({body: JSON.stringify(obj)});

// Updated 20200715
// 仅供个人参考学习交流，勿用于其它
