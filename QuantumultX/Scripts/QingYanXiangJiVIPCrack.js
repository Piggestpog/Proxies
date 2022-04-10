/*
The camera of light words Unlock Annual Subscriptions （By LTribe）
Download Link : http://t.cn/A6ZtvYIJ

[rewrite_local]
^https?:\/\/commerce-api\.faceu\.mobi\/commerce\/.*\/subscription\/user_info* url script-response-body https://raw.githubusercontent.com/Piggestpog/Proxies/main/QuantumultX/Scripts/QingYanXiangJiVIPCrack.js
[mitm]
hostname = commerce-api.faceu.mobi
*/

let obj = JSON.parse($response.body);
obj.data.start_time = 1577813990;
obj.data.end_time = 4102491933;
obj.data.is_first_subscribe = true;
obj.data.is_cancel_subscribe = true;
obj.data.flag = true;
$done({body: JSON.stringify(obj)});
