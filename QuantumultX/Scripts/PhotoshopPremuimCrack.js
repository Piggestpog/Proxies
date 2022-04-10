/*
Unlock Photoshop for iPad & Ps Express (By LTribe)
Download Link: http://t.cn/AiBIDoTv (Photoshop for IPad)
               http://t.cn/AiEwcMje (Photoshop Express)
Note: Adobe PhotoShop 需注册登录非大陆的Adobe账号，否则会没有云存储空间

[rewrite_local]
^https:\/\/.*\.adobe\..*\/mobile_profile\/nul\/v\d$ url script-response-body https://raw.githubusercontent.com/Piggestpog/Proxies/main/QuantumultX/Scripts/PhotoshopPremuimCrack.js
[mitm]
hostname = *.adobe.*
*/

let obj = JSON.parse($response.body);
obj.mobileProfile.profileStatus = 'PROFILE_AVAILABLE';
$done({body: JSON.stringify(obj)});
